export async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      return reg;
    } catch (err) {
      console.error('SW registration failed', err);
    }
  }
}

export async function requestNotificationPermission() {
  if (!('Notification' in window)) return 'unsupported';
  return await Notification.requestPermission();
}

export async function subscribeToPush(registration, applicationServerKey) {
  if (!registration || !registration.pushManager) return null;
  try {
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey
    });
    return sub;
  } catch (err) {
    console.error('subscribeToPush error', err);
    return null;
  }
}
