importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
);

/* global workbox */

// workbox.core.skipWaiting();

/* injection point for manifest files.  */
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

/* custom cache rules */
const imageRoute = new workbox.routing.Route(
  ({ request }) => {
    return request.destination === 'image';
  },
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

workbox.routing.registerRoute(imageRoute);
