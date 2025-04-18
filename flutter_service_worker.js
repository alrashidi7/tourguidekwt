'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0a4ab3f8eca2b46068b417557cc385e5",
"version.json": "fcb46b55c7358152cc4e85d377e5d1ef",
"index.html": "f64371784eb99b00c8d71714e7f89f4a",
"/": "f64371784eb99b00c8d71714e7f89f4a",
"main.dart.js": "4839725656adffc0d1625600b07c304f",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "535d3f46e42e2e96a14add09d1681087",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a9b88764061f140c2b2bca891e174c7c",
".git/config": "c1231208c607834183c5104c29997844",
".git/objects/03/612f748c95ae06438a9f6a3bd047824fe362cd": "5ce23cbddbd12fa13f31dc3a551fc0a0",
".git/objects/04/32348d34286a2b3e4bd460d00105a6fe19bdcd": "14bc7faba45daa8a1fad99fede2df9c2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/9e086eb394f8650a0013dfd37e27f43ccf9f87": "e37b63f17c45b80e495c0027b1d98fe5",
".git/objects/33/65c5e583c0df88b06a667db9e31e4fa76e2857": "8edbfbb4344b99915344b654809da2ce",
".git/objects/9d/072afba5723fd0ce1158cc65384fef2fcd57cf": "f73eb432713b4c3c155d73d6f25e9b70",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/d1/330295623c94c821e3303ba321da2031e4c923": "bd3837649588c63118d05ffe4144b63f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4943fe6fe851a166f6d59a7a246b298267af00": "710f14cf5abe88387300beef1ac85f28",
".git/objects/f4/4645ad0090149d10d3cbef7242ff5aa5eef522": "a366938f3a2f5d77cd47ad38b3f24306",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/b7f42fc89a6185d945c8a6309525bfa5e9b089": "47b42766f4b39e3ea0a0401e0b4bca26",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7c/f9d887962149ccba48467542ea74a48393fa3c": "dc801ff20c442b9595d26d5b8ddff598",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1f/dd90c644cdfcff2025d0d00640cfeccc61f35b": "a600d9fea315b15c3c1a5b3282fd4977",
".git/objects/10/f526f8e4dd7b7acd1ba2e1d98b71aa58834ebe": "5974a4d0484d8ad48dd07f7c3bf7830b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/26a57849c595e512e3b080540a341c101ce5f6": "75948c56f584bd2506f97546d1e49062",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/acd28b90a72e546b0935b4e5bbeacf7ba5eaa7": "31b04037f9b1584c41ef09b85a4f0c12",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/39/af6289143ba18430d5232d3969210c5ff70f16": "5c3607694db41876b8bb581a2665f8c1",
".git/objects/97/ff27695d4a3c2575f44be8363cee25445adee8": "03bed46605bb73f7d77748ff78d04993",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d951e5c0a216a419f682e144fdc8d56a500e68": "f5b81183f05e0868353258de8fa53c9f",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/a6/c29ee207773bb3a8cf4480811ad02aba920a71": "3e028dc64abbb5a0692a3402999213d2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/2883842752acf742ff9e4a68f0123bb24f31f0": "79d83aa2c2b4ba9eee3ab73957c8649c",
".git/objects/c2/c9c82e4a4b7c49151c1f44ae320a629074d5da": "d804c0baf7576c6fb7a9126c9da3c29f",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/ce/4410a8271d559830826865d0547925afad4052": "86be93d2b76b2c67cac8f595ac22e63e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8d495174942e856f332ca5d15b7b579720a03f": "e514a8c810e8fcf46e5d633a37fcda6d",
".git/objects/2d/0eaf5c11f8f68e3de0f400444312f056850f2b": "b72e9dea6ef80565b99c3afbf1a0e1c2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8c/5d357dbaca6afc00a6fec00e87d85d5bebffa0": "d187471daf74c1433f4d4478f3cbe684",
".git/objects/85/748f42f95f3cce7cd67c3a4baaab59d04899d8": "98a201ff890d6d69c8950bfa4ab6dbcd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/6f4c08188b5c73523a7dff23d64e1e78e08f99": "828eb0898cb00e9e9113f12679eabc68",
".git/objects/76/db17b04c239d93300a4ccb264182535243eb19": "d6e843a83121fa3f67c79349435f5225",
".git/objects/82/c8f1a4bff04112a145b6297d35dae3dd258fc0": "1bce88ce933adab3a489d247a0704aeb",
".git/objects/2e/9066a6cbd539089cf45e9807bea992a3884430": "ac9560c09776619a81d5f7f1bc1d04a9",
".git/objects/8b/a98d19c4f21859f341fb89acd4b5a0bbd593ed": "3336067b9bdadfc082774004e00af500",
".git/objects/7f/06a8e3bf102ec05657ed32bcc5c04b1b0abbef": "c7dd99d8f2f6281e5e3aef6efc4a8fbe",
".git/objects/25/e0a5f3ded360e043bfb81e7a358938daac7585": "7340028b38fe7b8a49a19f7a883dbc4f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8089ea910d24a6003ca516b31cc27f2",
".git/logs/refs/heads/main": "d8089ea910d24a6003ca516b31cc27f2",
".git/logs/refs/remotes/origin/HEAD": "541711d27da45380b07c4f27e8b28a98",
".git/logs/refs/remotes/origin/main": "08ad221d7f9f34c384925ee1ed953900",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "88a0217a83a64e1655618fedb59a4850",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "88a0217a83a64e1655618fedb59a4850",
".git/index": "02df3426807bdeacecdd5f7f018376e3",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "7babfd6eb07b92b3053ea59138cf7d1d",
"assets/AssetManifest.json": "96f2dd5c7ab84a3bbcb57be8deb0cd02",
"assets/NOTICES": "ad3b977992d4ed6111af9fa2803ff958",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "be957dd3b3e12405c627b45a5046edc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cb1b458ecdc84ebcbcd3185068c5e9f5",
"assets/fonts/MaterialIcons-Regular.otf": "178fcaca9e01a673b8d0ace8ed4801c7",
"assets/assets/images/kuwait_1.jpg": "3673f312ab5b620ff8ce60be2610fa33",
"assets/assets/images/kuwait_3.jpg": "0adbc09b06d0e7ddef03260bcdeeb926",
"assets/assets/images/kuwait_2.jpg": "1de9892e1623c7a62ba8e6a48802e9d0",
"assets/assets/images/kuwait_city_skyline.png": "f7c76276e488bcc154fb62b6f9a36a35",
"assets/assets/images/fluwait_tour_guide_icon.png": "535d3f46e42e2e96a14add09d1681087",
"assets/assets/images/whatsapp_tour.png": "4b75dfd6ff504fe461ecbb38436d0eaf",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
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
