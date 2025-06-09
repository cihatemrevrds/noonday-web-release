'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a0240af76c5a7d5079d201f4f60f6e54",
".git/config": "080c827c00472c8793abb0041cbc66a6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "78706a2b0d94d0fe0487c1d1ca473c1a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff2dfb4bb672f6c88b7b97c9d5f67923",
".git/logs/refs/heads/main": "d5a0ceb602518f2934081e1c4e8c2f74",
".git/logs/refs/remotes/origin/main": "332bac43fd4e85d4801c3c0da0d8d840",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/4eccffa56859b8bd69d281f0d50cd7c5920aa0": "c9ba3f44cb9f2ef2f48aa472774e5e2b",
".git/objects/06/8b6b6e9a740da323aca934802c3d0848bd403b": "fcd0567a9dbfe2d2c4027b51fdbe7036",
".git/objects/0b/45721b8c15409de47595469a8e9931ae021133": "8a4de9467b0b8b09080c1cad506ec84b",
".git/objects/0c/cd341202be67e18b03a2143ac65b822e8292f4": "b573449f178b47295c5fd075ea396186",
".git/objects/11/a2bde50812594ee6e46ec1bbac7b6063f7ba04": "21afee826a00b57a07afdd8282225535",
".git/objects/1d/343e65c98aa63802e1018472341fd99b4447b6": "e961297ded5606e26b87d0c06329c7d7",
".git/objects/27/c539c74c094eb9ef0c9c304770c61262caab02": "3fb512d00eea3a1385df8c24d75d42e9",
".git/objects/27/f73f95efca5515e0b2d846440a82bb4bbfd719": "ee228c034fd9a53d7995599265218f0b",
".git/objects/2d/e3ae244470a64379e38818f74cbdeefceaba27": "2a7b68b92a31df018e6cde8e265f7f63",
".git/objects/2e/37ab9f1ccd250f0330bafbdef538468af67318": "59a23e17a40766106ba55cf903ef6116",
".git/objects/30/207cf42c4293d44c474863129255d1214c5d02": "dc942990249d3e72ff43d4c64fb79eef",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/7d13d93b4108189161c983797420d9a40cdbd9": "e0f8e7444d0847a7104ada51f39c7752",
".git/objects/3c/c7c075b4955cd763e19b7d54d89358f6bc2fed": "85c358faab7651ec47e5ddb11dbaabce",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/4a49f7a0555d7046ca43181976bf1acc58ba5b": "5d6b7e7e4fa836d7728289819bd8a920",
".git/objects/46/6023d964df3037c84d2ada68903e4425a381c4": "437669ca24822dd2f295e8df037de837",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/75b5acb5bb85b2994bdada3a3f785ca33237c9": "d8e5045b9d9a7f5c2cc58ba1bdea6ba0",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/549fb6bf864018abf82eba19411daf562f5acb": "0552d9540e3439e4a2819a9d3816a97a",
".git/objects/61/11b2b81f52d3484ff60e06bea73fe3f66e8e5e": "cff7596cbdba0b3d2756a83761819994",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/2cdc958eac0a5e2b3d90df3d4bfbcb0f435e83": "8660442645ccf7254bfd042755aa617d",
".git/objects/67/be2cd5f47e6715c78ee581e47b930f343b433a": "681d6c8f8f29ed4e48ec81044b0dbd6d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/d0c16ce9a453fe755de6ee4fa6833bdbeef48b": "c87232b967e70ceb4fb2081e150ac459",
".git/objects/78/3dcd757d6bf4efaffa988d7b5193fe883ff48f": "f98566a8aeb1c58d4f06bf2ca98ca500",
".git/objects/7b/f5c35255cf6ddb447fb177ab228c1341647e6f": "893a84d5a7a88fd3e92b385f8816c404",
".git/objects/7c/e576ead06216a73eb75d43dfb27d89a3b3c107": "3f047d28393b3563f34b87f6081af167",
".git/objects/84/05bfad7c5979251d5f1ca6cf688b63db85fbcb": "ef253b64b4968ff5e2d02187f77b8358",
".git/objects/85/c482dc53df77a6507d82fad518cbdfa985e86f": "668c92830553dcc30e5db37e907067ab",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/62cf278579c46ff7899bd038fa7704cb2cc87d": "1d4cb0641892692fe4646a7137ba1041",
".git/objects/90/9da895b541b3ab28057a3d90ef7fcbdcce997a": "ae66008cf5aaf59673581d6ced97e057",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/9c/b4c0409139294219cec21d9e8a5fb272b627d6": "64cc0b9a903a7c01f2f94bfc69e42ab9",
".git/objects/9d/14594b2cb06d8fef38b1653318dcc5fd05045c": "cb674dc1fd527c0468f2b84b7e47a298",
".git/objects/a2/0a438d5660fd64736f8f0d0e3695985d82f0f5": "a77e016abfcb333a1d1f4f062ff3bf50",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/5043c9faa0b7bb715f6316d2b1cf2b3ff56132": "dc110b443048b5118fef34f683725529",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/567a0cec3669ec271c99ede51452262929fdfb": "d56e4bf83733a7b743250b02370b989b",
".git/objects/ab/8fdc91c49700df177385bf7cd22c2aaa3eac41": "c09f887b7e01414ce7d93df469b13107",
".git/objects/ab/d98e196a0bf1ffe38aab5673c52554acb22f60": "5b554e8eaf6e6d393e5e2f67134ae139",
".git/objects/af/c3c6e92a8c95b9caf25abfb234a06fabf7c2f9": "7bb9e33eec8881232d6295f36ec208f8",
".git/objects/b3/f6973b732ba793776f57251ccc108c0ebebb90": "5addab8b5d8ed0c0b3209ad6db74f3f2",
".git/objects/b4/48a8fc1e010f297e535de969eebd6eecc7d7aa": "2f02cdd553577ee37c48ac38d30b3802",
".git/objects/b5/61b937d62ae2cf455de69d8996a0377aa7c6f4": "26f1565f776b9f7294d4870f6197dfa5",
".git/objects/bc/84a8b2ce1b40882f0aeefb7316255eb05c6a3c": "0272a668d20361d3a2a5c0c6de04d566",
".git/objects/bc/ec4106f19ee06663e7dbc2a14bd8e8605be94c": "2afb44226e98c880b104c6576ad08069",
".git/objects/c9/fd6dde37896a8956966701dcefd7686190a7eb": "13197a3895efd15568b97f6015ab90a8",
".git/objects/cc/c69ff474ae885fae3ae59f216c8c8f93dd4c78": "6714ab11c37eaed1a48b7666731fe193",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0096215ff4011d90dc587f437dedbbac9955f4": "a15d8e3d81d9f5b949ed9ecf9898a054",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/a7f13200df348241206d8dd2fa69ef5e54b2d9": "b0b7feef720b9b9ef623d907d6f8be8b",
".git/objects/da/3df88c7cc442a98390ff2213326b236bf86b83": "8b6a28448c2ca6ae7ce6a776026f4c13",
".git/objects/e4/a17d5190a36b706f4e19078472b6444dcb813f": "5c3ad948d735fc0a20e37c8ef496c672",
".git/objects/e6/1eaa0a8e7fe4e8416ef960ca610dfb6a865ad7": "e06aba76f1cbced11959bbd73fa2d9eb",
".git/objects/e9/055d8e5e6b40282f50ebedb07b109b52147619": "d9233072d13e7c7056895b07fd9a026d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/e11b6a3e70b79640f1f58d14c2564a80ac247a": "78f5f03d3b0d7d7c349b8afb3b1d4bff",
".git/objects/ee/e999d487587788beb5d79b98467a31b9b836eb": "094af1678a4732176b69a6c9aca1f475",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/019614eefd76208ac1663a82421537bb232402": "6b2e14ab7f76a76eac0d4426220f57a6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/94006bd0a97dd02a520a29626ba43ef8169f41": "6b2dbeeae1fc534243a1ad7833870d74",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ff/bbd55754b08f02c357537402bf3b8850f5cc17": "5b55fe10a1edf90e816c10bf8512752f",
".git/refs/heads/main": "00582ef59d48434235aff051772a3810",
".git/refs/remotes/origin/main": "00582ef59d48434235aff051772a3810",
"assets/AssetManifest.bin": "4b47b75930c8b67804d696183af14ad9",
"assets/AssetManifest.bin.json": "1633731f9ed5990755c3325782648a3e",
"assets/AssetManifest.json": "949a32e384fd94eb64a061630ee850f9",
"assets/assets/fonts/Rye-Regular.ttf": "17cda14f1171784ef4c7d568dda006be",
"assets/assets/images/backgrounds/app_icon.jpg": "94919ca6238c37901ba054cb768fbbbd",
"assets/assets/images/backgrounds/button_wood.jpg": "9ee8e17e8d0cbe4d8059381cf2a5a4ad",
"assets/assets/images/backgrounds/saloon_bg.png": "a17c82a557d9cdc75d6be2ea795be501",
"assets/assets/images/backgrounds/sky_day.jpg": "960cc00f923ab043fb144703f530a4b0",
"assets/assets/images/backgrounds/sky_night.jpg": "0aaa401533966c9e4468c59719202259",
"assets/assets/images/backgrounds/western_town_bg.png": "a17c82a557d9cdc75d6be2ea795be501",
"assets/assets/images/backgrounds/western_town_night_bg.jpg": "178ee1113b67a282947d83a0b10ceab1",
"assets/assets/images/profilePictures/attractive_woman.png": "9c6182bbbefa7e180eab8679bb12d3ed",
"assets/assets/images/profilePictures/bad_man.png": "7cdbd7d27b51422a8b1459be8c2b675d",
"assets/assets/images/profilePictures/bad_ninja.png": "4b78ae9c38add973317cda24f39f344e",
"assets/assets/images/profilePictures/cool_bad_man.png": "eb38de6d547f89e269b72eea61417e5a",
"assets/assets/images/profilePictures/graggussy_happy.png": "24c2fa2afaeaf0e34f18caab7f70ef5a",
"assets/assets/images/profilePictures/graggussy_normal.png": "cf8d74c81534e40837d64d27c35d5af9",
"assets/assets/images/profilePictures/happy_man.png": "d67f2c8dcf5bf6c59f1b77de06c7982a",
"assets/assets/images/profilePictures/normal_man.png": "3f8c2bea63264a66be918b580b38c285",
"assets/assets/images/profilePictures/normal_woman.png": "6562e5c926ebd8eb340a5d78ca670873",
"assets/assets/images/profilePictures/old_man.png": "029542bef079fad956e9c252f8c7e5f5",
"assets/assets/images/profilePictures/plague_doctor.png": "b3aa1a135d8f42b35da99b88d4d941f7",
"assets/assets/images/profilePictures/revolvers_crossing.png": "4ace377c963c62417c00fdaa4515b939",
"assets/assets/images/profilePictures/tf_gambler.png": "b9e84ea981838517066ea9a9e39b2781",
"assets/assets/images/roles/chieftain.jpg": "cc127389c450bfd47c9641e8d52cb88b",
"assets/assets/images/roles/doctor.jpg": "83e48b1c3ce66f8abe41b9066e349f5b",
"assets/assets/images/roles/escort.jpg": "725a955659585c11787dcb9191cdd6a8",
"assets/assets/images/roles/gunman.jpg": "f6b24fb154093dec4a014af0e93b4ad5",
"assets/assets/images/roles/gunslinger.jpg": "e73798acc0709ec403dad0480b81e9d3",
"assets/assets/images/roles/jester.jpg": "3d91542c9e382335ae983df65669c5f8",
"assets/assets/images/roles/peeper.jpg": "837f11db63539282502d94b65c11f375",
"assets/assets/images/roles/sheriff.jpg": "d9dffc07a7974d10af05ed45634ace4d",
"assets/FontManifest.json": "2d13560ea163d13dff38765c9930683d",
"assets/fonts/MaterialIcons-Regular.otf": "b4b9dba3868022da473c7aa24ccef2be",
"assets/NOTICES": "249b268f46e286330445eb7685220b98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "e044f1911d0c32395f810896facca011",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "092356f60a3851fd17e30ef8784223a0",
"icons/Icon-192.png": "d3bd9b80bfa234b5c8a650d43cab2879",
"icons/Icon-512.png": "c0f1d2b4de8de0d310279a34277c95fd",
"icons/Icon-maskable-192.png": "d3bd9b80bfa234b5c8a650d43cab2879",
"icons/Icon-maskable-512.png": "c0f1d2b4de8de0d310279a34277c95fd",
"index.html": "056ad8ef6378b87f4dc00dd46d1e1826",
"/": "056ad8ef6378b87f4dc00dd46d1e1826",
"main.dart.js": "7c89c36175c51a855a0f018eed10a5b2",
"manifest.json": "6b39e74f8877c70c43152a9b10b2c62a",
"version.json": "2a1afab8e684aa0425a125b299d1f58c"};
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
