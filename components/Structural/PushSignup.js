import { useEffect, useState } from 'react';
import { registerServiceWorker, requestNotificationPermission } from '../../utils/push';
import InfoBox from '../content/InfoBox/InfoBox';

const topics = [
  { id: 'patchnotes', label: 'Patchnotes (balance changes)' },
  { id: 'announcements', label: 'Announcements' }
];

export default function PushSignup({ onSubscribe }) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(['patchnotes']);
  const [notifStatus, setNotifStatus] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showA2HS, setShowA2HS] = useState(false);

  useEffect(() => {
    // show a small unobtrusive control after mount
    setTimeout(() => setVisible(true), 1200);
    function beforeInstallHandler(event) {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowA2HS(true);
    }
    window.addEventListener('beforeinstallprompt', beforeInstallHandler);
    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallHandler);
    };
  }, []);

  const toggle = (topicId) => {
    setSelected(previousSelected => previousSelected.includes(topicId) ? previousSelected.filter(x => x !== topicId) : [...previousSelected, topicId]);
  }

  const handleSubscribe = async () => {
    try {
      const permissionResult = await requestNotificationPermission();
      if (permissionResult !== 'granted') return;
      const registration = await registerServiceWorker();
      if (!registration) return;
      try {
        const subscription = await registration.pushManager.subscribe({ userVisibleOnly: true });

        const externalEndpoint = process.env.NEXT_PUBLIC_SUBSCRIBE_URL;
        if (externalEndpoint) {
          await fetch(externalEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ subscription, topics: selected })
          });
        } else {
          // Fallback for static export: persist demo subscriptions to localStorage
          try {
            const stored = JSON.parse(window.localStorage.getItem('demoSubscriptions') || '[]');
            stored.push({ subscription, topics: selected, createdAt: new Date().toISOString() });
            window.localStorage.setItem('demoSubscriptions', JSON.stringify(stored));
            console.warn('Subscription saved to localStorage; set NEXT_PUBLIC_SUBSCRIBE_URL to send to a remote endpoint.');
          } catch (storeErr) {
            console.warn('Failed to save subscription locally', storeErr);
          }
        }
      } catch (err) {
        console.error('Push subscribe failed', err);
      }
    } catch (err) {
      console.error('Subscription flow error', err);
    }
    if (onSubscribe) onSubscribe(selected);
    setVisible(false);
  }


  const handleA2HS = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    setShowA2HS(false);
    setDeferredPrompt(null);
  }

  if (!visible) return null;

  return (
    <>
      <div style={{ position: 'fixed', left: 12, bottom: 12, border: '2px solid #ccc', borderRadius: 6, zIndex: 9999 }}>
        <InfoBox>
          <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Be the first to read the Patch Notes!</div>
          <div style={{ marginBottom: 8, fontSize: 13 }}>Choose which updates you&apos;d like to receive:</div>
          <div style={{ marginBottom: 8 }}>
            {topics.map(topic => (
              <label key={topic.id} style={{ display: 'block', fontSize: 13 }}>
                <input type="checkbox" checked={selected.includes(topic.id)} onChange={() => toggle(topic.id)} /> {topic.label}
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={handleSubscribe}>Subscribe</button>
            <button onClick={() => setVisible(false)}>Dismiss</button>
          </div>
        </InfoBox>
      </div>


      {notifStatus && (
        <div style={{ position: 'fixed', right: 20, bottom: 100, fontSize: 13, zIndex: 9999 }}>
          Notification permission: <strong>{notifStatus}</strong>
        </div>
      )}

      {showA2HS && (
        <div style={{ position: 'fixed', right: 20, bottom: 60, zIndex: 9999 }}>
          <button onClick={handleA2HS}>Add Site to Home Screen</button>
        </div>
      )}
    </>
  )
}
