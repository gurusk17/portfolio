'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2d15e1f543d6f168a0706ae39ec2eb2b",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "f296dd697c22298fe8baef4d753f42a0",
"/": "f296dd697c22298fe8baef4d753f42a0",
"main.dart.js": "64cd541849228c36530f058362411213",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "517b4e2f211ed58f2bcc03c72f0c234b",
"icons/Icon-192.png": "dd0b31a6fd279bb8297db24e5deb6289",
"icons/Icon-maskable-192.png": "dd0b31a6fd279bb8297db24e5deb6289",
"icons/Icon-maskable-512.png": "bbc6e64b571e2573c674be349bd89a1b",
"icons/Icon-512.png": "bbc6e64b571e2573c674be349bd89a1b",
"manifest.json": "d4e3a968ece366762d9c5df3b6bc1aa1",
"assets/GuruResume2811.pdf": "42bc2c917ec2d21989c797f078e36067",
"assets/screenshots/partner2.png": "d71b2efa6b9a53065b61978e214e4308",
"assets/screenshots/bandhan1.png": "2162603e1f1e0f6dbcb1576305041a1c",
"assets/screenshots/databank3.png": "b8a5e7418c350a581f08e6f198a14826",
"assets/screenshots/databank2.png": "9a0170d4677d526f88a5c7bee3c7fcaa",
"assets/screenshots/partner3.png": "9bed8228f1de38621e5d2db72cae4a0f",
"assets/screenshots/partner1.png": "36fab59ec8e721f3647f6cb93486bc67",
"assets/screenshots/bandhan2.png": "e19f3ebc2fd924b677cb404a77ff5f3f",
"assets/screenshots/databank1.png": "29f006aca56def9b0a29145f3d97d099",
"assets/screenshots/bandhan3.png": "102dc2f00966f56b91c73a2dd6a38178",
"assets/screenshots/partner4.png": "32bd5d58c0bb61e7f246ed56695dc886",
"assets/screenshots/databank5.png": "d68ba91b5223b83aa61440549dc1f4b4",
"assets/screenshots/databank4.png": "fd7c225fe074f44970ea484672699195",
"assets/screenshots/partner5.png": "e809317c6ce1a605bbe116b88e6c790d",
"assets/screenshots/bandhan4.png": "ae0f48776ca28b85c61dc0e3dbba9629",
"assets/screenshots/bandhan5.png": "26af781df783af052639e64f9bdd0dcc",
"assets/screenshots/hive1.png": "3fbaa043e749ec8b965092cf8ee1484b",
"assets/screenshots/hive2.png": "30f964e9c6f9d91727196261e84d92a0",
"assets/screenshots/hive3.png": "afa9a55e80fc2d40a5a46f6a29631b63",
"assets/screenshots/hive4.png": "d90c8cced6d9952d5327fc2c52a60379",
"assets/screenshots/hive5.png": "7c05ca85f60b101fcc7a0ab0df5649c1",
"assets/partnericon.png": "07ebf042d13a694338bfcc8b2d53b497",
"assets/databankicon.png": "629618a87a65913ec183121b30bb2741",
"assets/AssetManifest.json": "c9a0bc9f6e98c15a05cad22c67f783bc",
"assets/bandhanicon.png": "884ea9d764fbe50148e1846bc1ce1a58",
"assets/NOTICES": "f258c6e20a1820b7754fcbe3b4face29",
"assets/guru.jpeg": "876532decf1c4487e9c8b4d6eda717b5",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/AssetManifest.bin.json": "85c7240d030c1891eeef9502f5007300",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/hiveicon.png": "9cb92c7b598428c16a9f5679f01b109d",
"assets/AssetManifest.bin": "80e9a39cdd862d145a2e556315b2b3ab",
"assets/fonts/MaterialIcons-Regular.otf": "c2fd2a4f476ca4ccf458ad86efe69d37",
"assets/assets/GuruResume2811.pdf": "42bc2c917ec2d21989c797f078e36067",
"assets/assets/screenshots/partner2.png": "d71b2efa6b9a53065b61978e214e4308",
"assets/assets/screenshots/bandhan1.png": "2162603e1f1e0f6dbcb1576305041a1c",
"assets/assets/screenshots/databank3.png": "b8a5e7418c350a581f08e6f198a14826",
"assets/assets/screenshots/databank2.png": "9a0170d4677d526f88a5c7bee3c7fcaa",
"assets/assets/screenshots/partner3.png": "9bed8228f1de38621e5d2db72cae4a0f",
"assets/assets/screenshots/partner1.png": "36fab59ec8e721f3647f6cb93486bc67",
"assets/assets/screenshots/bandhan2.png": "e19f3ebc2fd924b677cb404a77ff5f3f",
"assets/assets/screenshots/databank1.png": "29f006aca56def9b0a29145f3d97d099",
"assets/assets/screenshots/bandhan3.png": "102dc2f00966f56b91c73a2dd6a38178",
"assets/assets/screenshots/partner4.png": "32bd5d58c0bb61e7f246ed56695dc886",
"assets/assets/screenshots/databank5.png": "d68ba91b5223b83aa61440549dc1f4b4",
"assets/assets/screenshots/databank4.png": "fd7c225fe074f44970ea484672699195",
"assets/assets/screenshots/partner5.png": "e809317c6ce1a605bbe116b88e6c790d",
"assets/assets/screenshots/bandhan4.png": "ae0f48776ca28b85c61dc0e3dbba9629",
"assets/assets/screenshots/bandhan5.png": "26af781df783af052639e64f9bdd0dcc",
"assets/assets/screenshots/hive1.png": "3fbaa043e749ec8b965092cf8ee1484b",
"assets/assets/screenshots/hive2.png": "30f964e9c6f9d91727196261e84d92a0",
"assets/assets/screenshots/hive3.png": "afa9a55e80fc2d40a5a46f6a29631b63",
"assets/assets/screenshots/hive4.png": "d90c8cced6d9952d5327fc2c52a60379",
"assets/assets/screenshots/hive5.png": "7c05ca85f60b101fcc7a0ab0df5649c1",
"assets/assets/partnericon.png": "07ebf042d13a694338bfcc8b2d53b497",
"assets/assets/databankicon.png": "629618a87a65913ec183121b30bb2741",
"assets/assets/bandhanicon.png": "884ea9d764fbe50148e1846bc1ce1a58",
"assets/assets/guru.jpeg": "876532decf1c4487e9c8b4d6eda717b5",
"assets/assets/hiveicon.png": "9cb92c7b598428c16a9f5679f01b109d",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
