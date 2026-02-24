self.addEventListener('push', function(event) {
  let data = {};
  if (event.data) data = event.data.json();
  const title = data.title || 'Mana Source';
  const options = {
    body: data.body || 'New update available.',
    data: data
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url ? event.notification.data.url : '/';
  event.waitUntil(clients.openWindow(url));
});
