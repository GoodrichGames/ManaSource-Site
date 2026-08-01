/* Bump when changing precache list or caching rules so clients refresh. */
const VERSION = 'mana-resources-v2';
const PRECACHE = `${VERSION}-precache`;
const RUNTIME = `${VERSION}-runtime`;

/** Core experience available offline after first successful visit. */
const PRECACHE_URLS = [
  '/resources',
  '/resources/rules',
  '/resources/patchnotes',
  '/manifest.json',
  '/favicon.ico',
  '/sw.js',
];

const RESOURCES_PATH = '/resources';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PRECACHE);
      // addAll fails entirely if one URL 404s; add individually for resilience.
      await Promise.all(
        PRECACHE_URLS.map(async (url) => {
          try {
            const res = await fetch(url, { cache: 'reload', credentials: 'same-origin' });
            if (res.ok) await cache.put(url, res.clone());
          } catch (_) {
            /* offline during install — runtime will fill later */
          }
        }),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k !== PRECACHE && k !== RUNTIME)
          .map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

/**
 * @param {Request} request
 * @param {string} cacheName
 */
async function cachePut(request, response, cacheName) {
  if (!response || !response.ok) return response;

  if (response.type !== 'basic' && response.type !== 'cors') return response;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
  return response;
}

async function networkFirst(request) {
  try {
    const fresh = await fetch(request);
    await cachePut(request, fresh, RUNTIME);

    if (request.mode === 'navigate') {
      const url = new URL(request.url);
      const bare = url.origin + url.pathname;
      if (bare !== request.url) {
        await cachePut(new Request(bare), fresh.clone(), RUNTIME);
      }
    }
    return fresh;
  } catch (_) {
    const cached =
      (await caches.match(request, { ignoreSearch: true })) ||
      (await caches.match(new URL(request.url).pathname, { ignoreSearch: true }));
    if (cached) return cached;

    const shell = await caches.match(RESOURCES_PATH);
    if (shell) return shell;
    return new Response(
      offlineFallbackHtml(),
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
    );
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;
  try {
    const fresh = await fetch(request);
    await cachePut(request, fresh, RUNTIME);
    return fresh;
  } catch (_) {
    return cached || Response.error();
  }
}

function offlineFallbackHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Mana Source — Offline</title>
  <style>
    body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
      background:#000; color:#eee; font-family:system-ui,sans-serif; padding:1.5rem; text-align:center; }
    h1 { font-weight:600; font-size:1.25rem; }
    p { opacity:.8; max-width:22rem; line-height:1.5; }
  </style>
</head>
<body>
  <div>
    <h1>You're offline</h1>
    <p>Connect once to load Rules, Patchnotes, and other Resources. They will stay available offline after that.</p>
  </div>
</body>
</html>`;
}

function isResourcesNavigation(url) {
  return (
    url.origin === self.location.origin &&
    (url.pathname === RESOURCES_PATH || url.pathname.startsWith(RESOURCES_PATH + '/'))
  );
}

function isStaticAsset(url) {
  if (url.origin !== self.location.origin) return false;
  const p = url.pathname;
  return (
    p.startsWith('/_next/static/') ||
    p.startsWith('/nextImageExportOptimizer/') ||
    p.startsWith('/images/') ||
    p.endsWith('.css') ||
    p.endsWith('.js') ||
    p.endsWith('.webp') ||
    p.endsWith('.png') ||
    p.endsWith('.jpg') ||
    p.endsWith('.jpeg') ||
    p.endsWith('.svg') ||
    p.endsWith('.woff2') ||
    p.endsWith('.woff') ||
    p === '/favicon.ico' ||
    p === '/manifest.json'
  );
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    if (isResourcesNavigation(url) || url.pathname === '/') {
      event.respondWith(networkFirst(request));
      return;
    }
  }

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (url.pathname.startsWith(RESOURCES_PATH)) {
    event.respondWith(networkFirst(request));
  }
});

self.addEventListener('push', (event) => {
  let data = {};
  try {
    if (event.data) data = event.data.json();
  } catch (_) {
    data = { body: event.data && event.data.text() };
  }
  const title = data.title || 'Mana Source';
  const options = {
    body: data.body || 'New update available.',
    data,
    icon: data.icon || '/favicon.ico',
    badge: data.badge || '/favicon.ico',
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target =
    (event.notification.data && event.notification.data.url) || RESOURCES_PATH;

  event.waitUntil(
    (async () => {
      const all = await clients.matchAll({ type: 'window', includeUncontrolled: true });
      for (const client of all) {
        if ('focus' in client) {
          client.navigate(target);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(target);
    })(),
  );
});
