'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js": "ddacf2e415d765a2d2f691a61d5237c8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "6762c87ba76497eb30447ce564dfe333",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/assets/app-store-badge.png": "a17999c0453d502059f643f37db747b5",
"assets/assets/featuregraphic_al2.png": "324c99441a9737d4bd6cb5c22f85a750",
"assets/assets/featuregraphic_al.png": "c453789a52b00d81e0268f9944ffe9ce",
"assets/assets/al2icon.png": "d53a764f70588409567e0920109fd39f",
"assets/assets/google-play-badge.png": "49f3770207399f70437411b07e4c5137",
"assets/assets/LOGO_NO_BACKGROUND.png": "bd4d20fe4cf2a6cda410a50b5e6f9b6a",
"assets/NOTICES": "151b0bacf84aaf6bbb1b0550962540f9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "222509917f12bad10c9b28df64384ed0",
"assets/AssetManifest.bin.json": "0912ff204db970c6514f0ae73ee58449",
"devlog/al2mobile/assets/2/selection.mp4": "2f4aa1289023d0f714016c29dba451f0",
"devlog/al2mobile/assets/2/rotating.mp4": "3ecd71eb46d8b641e45038396d7b2a48",
"devlog/al2mobile/assets/2/moving.mp4": "551769ec19df3ac4958c7a703d1112d5",
"devlog/al2mobile/assets/2/copying.mp4": "4b080b0474984c2957affe34f18561ea",
"devlog/al2mobile/1.html": "fcd4175983406739aa46fca012c012fc",
"devlog/al2mobile/2.html": "3f1ff1961d3b6848fec3e4e6dbf64907",
"devlog/al2desktop/assets/2/split_selector_ui.png": "86e34125f564f1e7dd3a3ca8ea88f891",
"devlog/al2desktop/assets/2/alternator_starter_ui.mp4": "ec8b9425a4f8fae536f4f177cea59b58",
"devlog/al2desktop/assets/2/dual_starter_video.mp4": "92b723b03268f49e1989ebd24ed9c96a",
"devlog/al2desktop/assets/2/split_selector_video.mp4": "461173b9c54cdde10cdcfb992f6630b2",
"devlog/al2desktop/assets/2/alternator_starter_ui.png": "45f2d20c8c0ae079b2a3c1d8193ecbc3",
"devlog/al2desktop/1.html": "3e3a0a8fa645ecd4b50ed307cb38aba5",
"devlog/al2desktop/2.html": "fec33ff944c684cecff264fc66e000ea",
"devlog/discord.png": "d74865e1094f5ac0a0e782875449ff66",
"devlog/reddit.png": "26ab75902a5350e9d006ca9c82a659eb",
"devlog/Background.jpg": "b099df30a78d3c37978a8f21c08c3e95",
"index.html": "9df32980ebb21f6a90182c618c2e870c",
"/": "9df32980ebb21f6a90182c618c2e870c",
"manifest.json": "54d69beeeba8abe34c50e6cc5f8126b7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"al2-privacy-policy.html": "8e29e99979d5721ff4b82ac3f48b0852",
"favicon.ico": "2c1d571dc2d08efe68e3bc22f1e1b467",
"app-ads.txt": "df958a764bded3ddb626af908cb54961",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "fe92a24a5b072eea6dcde1937371ca4a",
"flutter_bootstrap.js": "cbdef25e367771cf9ad9a05ca8542374"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
