'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d8951f8942f3ae19e6043c8b2a510dae",
"index.html": "5cf604e57704b01ef6321c2bf463870e",
"/": "5cf604e57704b01ef6321c2bf463870e",
"main.dart.js": "9577655a22b93c120a0c1b4cd9fb3ac8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ae6a8df1eadca5f571f4850ff6bc64d4",
".git/config": "f9c0ecfc620485f4b6034b77951ba5e5",
".git/objects/66/2187abdbadf5c3c31779b5e63f743fd46e1eba": "5a1c986b53743f468048f941843094c0",
".git/objects/3e/5ee6c90c295d157558434a2c75a5bbb8963e1d": "8f59e5542f4cf81f286810097fecf695",
".git/objects/9d/dfc4ef870b72d0da5c956447847d4d5aea7399": "e392029ef23888e5130228e4dc05ee14",
".git/objects/b5/1891ecd26da11d42095269d3231d2942279bbd": "bdc04c09b90ef68e8769bb12950466a4",
".git/objects/d1/447e64c6d3a817a0b92ec67c3f80383ae8c15c": "5a128f7d8b1d8cf759476b977d985d87",
".git/objects/f4/c74faa70c4612c1264dc3c000521bc43453fb3": "b2dddb0e68b471a65376f5eedd034c5d",
".git/objects/c0/0e3c66f793991134c97b63023ff8222372008b": "c86ce8cc62f91dccb62033845a1455c1",
".git/objects/ec/d18c1aee93ab1a2fc66d78ba6e36f6a9fb6211": "28ad54a7f875da38316578ef1d16a68a",
".git/objects/27/e332008ef8abd8917aacaa386b9966c86fee79": "fd83ae409fb0c84c9e2da5e5bd06a898",
".git/objects/pack/pack-4ae9f7e5bfc02988dfa3bbad1539f415875ea7fe.idx": "ff1d3e62b765a56e5ea2588f065571eb",
".git/objects/pack/pack-4ae9f7e5bfc02988dfa3bbad1539f415875ea7fe.pack": "d3bea6a3670b585b52da7177431b80ca",
".git/objects/74/02b26a4bfc4d5a6dd4f4e9f1ce30faff8b245c": "f3e304adc1efe2aed4c62b50f5b03dfb",
".git/objects/8a/a92acbc034b5465ba3ac9e8a2423ccd6b430da": "295c53cb4c9d2c040cab98479d1d7aa8",
".git/objects/5d/a054eeb760bee8671f0a2b4c1ba273766bc9da": "a925bb8dd0e198fa0744b3763b1c2017",
".git/objects/52/90b34cbc97fbeccd828ec24c05d1b4403eb52b": "5c05d14af7e5dc66ffb0931eab570ca6",
".git/objects/b1/6bbdad1cdbd1b3e1243d38c4cfd5a77162eed1": "65c607a3926abdb1e3246a7dc7eb0edc",
".git/objects/e6/05e108353e614fc3947e84bb8f6fc8dc1d3310": "b409895885a5b03c3c4c98888f6cb5dc",
".git/objects/46/755001f7573e3eb3a177e4519e02dd6524cda8": "874bbda0fe955d430cc3d3adccdf90bb",
".git/objects/12/9910aabb5609722d0d1b2618b486942c6dfea6": "9c3012853a8481903a5aa4619c2def9d",
".git/objects/7a/cb96f70e62d2e2e49193ac335ccb30d9f7aa4d": "bd19d7f698a9bc2f687917ceb95a53c2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f6bc653038d29f92086af457de2f2ca4",
".git/logs/refs/heads/master": "f6bc653038d29f92086af457de2f2ca4",
".git/logs/refs/remotes/origin/HEAD": "7d39b758cfe66e90a9d0a3e1c81ef268",
".git/logs/refs/remotes/origin/master": "c02c35da78618931519490d1a0fd9901",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
".git/refs/heads/master": "42ab57bbcc507ddc711180bce7ff515e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "42ab57bbcc507ddc711180bce7ff515e",
".git/index": "d122d7c542ea27c5ba674b57138df2d9",
".git/packed-refs": "403582b4bfeaaf3346a61c8be84d8959",
".git/COMMIT_EDITMSG": "7aae19d756c6a4bb5c89e9a0ce0cd7c3",
"assets/AssetManifest.json": "0de63e7468a1a00748fe357aeace7f20",
"assets/NOTICES": "9ed041bcd6c85c87a98087fbc45d4e1e",
"assets/FontManifest.json": "6b40e4511978ddd52da67e7174cdad62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c1adb9b328b1d7327f785f8cd5182234",
"assets/fonts/MaterialIcons-Regular.otf": "4ea1c0cd213543d98b451dc92674c7cd",
"assets/assets/images/page5/00.png": "13059b06b15b7ad83fbf3b440c643702",
"assets/assets/images/page5/01.png": "6ad75bd177ba11bf0d2fc7e78d7ecc72",
"assets/assets/images/page5/03.png": "d5235bb482b99d854ac4cfb95533deae",
"assets/assets/images/page5/02.png": "9e3c36310234e0f9b435af70b9b5a583",
"assets/assets/images/page5/05.png": "125a8c1282e457ca162692871df6d834",
"assets/assets/images/page5/04.png": "4423f1e6eda984b1f92d38bedc3b708c",
"assets/assets/images/page4/Rectangle1626.png": "e0d53ec6c1e50846c738cf6835e5b5bc",
"assets/assets/images/page4/Rectangle1627.png": "165594af1068b4b803d355ed38baa308",
"assets/assets/images/page4/Rectangle1631.png": "4ebc7376320efb0f796014beeecd74dd",
"assets/assets/images/page4/Rectangle1630.png": "2a8cd1cb734511492271b240076e9e88",
"assets/assets/images/page4/Rectangle1629.png": "c9cd249e123c40804f3ed65dacee8943",
"assets/assets/images/page4/Rectangle1628.png": "7072b921c736aca65a569abf75f8e1b0",
"assets/assets/images/logo/KAKAO%2520logo.svg": "275c1ed3b487360b88fae52abb89fd7a",
"assets/assets/images/logo/main.png": "d265563c72376a2cbbd648e23e16cf49",
"assets/assets/images/logo/buly_tmp.png": "290579a333c4612a4cce9044405d2e65",
"assets/assets/images/logo/Facebook%2520logo.svg": "e7ec778088040858ad831997bf3c67c9",
"assets/assets/images/logo/Instagram%2520logo.svg": "dda84c7c4e2a6ca0ba39661a8fc255af",
"assets/assets/images/logo/buly.png": "290579a333c4612a4cce9044405d2e65",
"assets/assets/images/logo/share%2520logo.svg": "0d5477039c575f46f7ef436d305b4f53",
"assets/assets/images/result_Buly/card/Perou.jpg": "3b789f1b1b15c08690afcd9c48ee6cbe",
"assets/assets/images/result_Buly/card/Rose.jpg": "8709a500ab1fee2d0d2a45601696b4f0",
"assets/assets/images/result_Buly/card/Cresson.jpg": "d1aadd16033f5164831a8ca1b3281c45",
"assets/assets/images/result_Buly/card/Groseille.jpg": "eab9c61aaf97a1cd61d67d8e5a4d43aa",
"assets/assets/images/result_Buly/card/Mexique.jpg": "9ae48b3d6bdbf99dec938efac2b52be2",
"assets/assets/images/result_Buly/card/Iris.jpg": "b6b6595f95a2d24e507526d831d73ca4",
"assets/assets/images/result_Buly/card/Foret.jpg": "81e924bb1c3a076418c3741389ca58fc",
"assets/assets/images/result_Buly/card/Lichen.jpg": "28005a4e076e5823fcae4b45c1d5405d",
"assets/assets/images/result_Buly/card/Verveine.jpg": "4228170bb1371ecf2c9a36fb78137f73",
"assets/assets/images/result_Buly/body_product/bodylotion.png": "e4b49be2035e8bb6353226aa82d3a63a",
"assets/assets/images/result_Buly/body_product/bodyoil.png": "2fd475dc1f732d34eef94afd72418672",
"assets/assets/images/result_Buly/background.JPG": "0db1789fbbc0a2f5dfbdccd92cc939a6",
"assets/assets/images/result_Buly/Logo_buly_2021_v2.png": "290579a333c4612a4cce9044405d2e65",
"assets/assets/images/result_Buly/bottle/Perou.png": "9fa011d11b892cf1b49a02c21bf21d43",
"assets/assets/images/result_Buly/bottle/Rose.png": "c28b0702c74dbbf6b21001fc8c605411",
"assets/assets/images/result_Buly/bottle/Cresson.png": "486ed955dd5ad16c6789cb2fae02cf19",
"assets/assets/images/result_Buly/bottle/Groseille.png": "79ac966747ff962af69b8d545cdb7e67",
"assets/assets/images/result_Buly/bottle/Iris.png": "ffb7bfcdf264367d0120af260da7b525",
"assets/assets/images/result_Buly/bottle/Mexique.png": "503f29ced7127eff9b904f1019649b1b",
"assets/assets/images/result_Buly/bottle/Foret.png": "a111b4570346626be0de57b57a8b2fea",
"assets/assets/images/result_Buly/bottle/Lichen.png": "ee76bb106a56af4287d097b5b0aadb53",
"assets/assets/images/result_Buly/bottle/Verveine.png": "6b23b2d4b5eda5793a01c72858ef01d9",
"assets/assets/images/result_page/Ellipse%252062@2x.png": "00694fe13cdfbf020367f92ce3bfa17f",
"assets/assets/images/result_page/tmp@3x.png": "1db5f3725c3b86fc24406b700a57e126",
"assets/assets/images/result_page/tmp@ori.jpeg": "66784e3a2b73d4437ddbc194fd2d500c",
"assets/assets/images/result_page/Rectangle%25201722@2x.png": "45715df011028787ff3728c6c1368f48",
"assets/assets/images/result_page/Cresson.png": "486ed955dd5ad16c6789cb2fae02cf19",
"assets/assets/images/result_page/Foret.png": "a111b4570346626be0de57b57a8b2fea",
"assets/assets/images/result_page/main_image.jpeg": "db74110c4b25f3ca71f11d07f2f18621",
"assets/assets/images/result_page/Rectangle%25201712@2x.png": "a2547e242b7c89f1c39fc87438ba256e",
"assets/assets/images/result_page/Ellipse%252063@2x.png": "23fdf528928e3ca27bbf59bb3b340b43",
"assets/assets/images/result_page/bodylotion.png": "e4b49be2035e8bb6353226aa82d3a63a",
"assets/assets/images/result_page/Rectangle%25201719@2x.png": "02c1e2b535ada2e7da28880302accad7",
"assets/assets/images/result_page/Lichen.png": "ee76bb106a56af4287d097b5b0aadb53",
"assets/assets/images/result_page/buly_logo.png": "290579a333c4612a4cce9044405d2e65",
"assets/assets/images/page8/iPhone13_Rectangle1621@2x.png": "e393ac52cc8ddf8df4aace4677850103",
"assets/assets/images/page8/iPhone13_Rectangle1691@2x.png": "2d31a9c0e55e97938710b2c0d3f70e12",
"assets/assets/images/page8/iPhone13_Rectangle1639@2x.png": "84f83a5d5611acd7ec08e7f0b309c81e",
"assets/assets/images/page8/iPhone13_Rectangle1693@2x.png": "53a8e4f3152aafc7e304fab46ac6bc1d",
"assets/assets/images/page8/iPhone13_Rectangle1620@2x.png": "673a1035a81efc9cf303112448b3c0ff",
"assets/assets/images/page8/iPhone13_Rectangle1624@2x.png": "9bf9a825776e958b26af97118183e974",
"assets/assets/images/page6/iPhone13_Rectangle1623@2x.png": "875d8ac6f868f1af6b2a2dc8c8dc4f56",
"assets/assets/images/page6/iPhone13_Rectangle1621@2x.png": "38bb559fe76246e40639052cc93d2d62",
"assets/assets/images/page6/iPhone13_Rectangle1625@2x.png": "5afd366207f816b271fcb65b0728aca3",
"assets/assets/images/page6/iPhone13_Rectangle1622@2x.png": "b7c2d2d9f4f21eab3de2a178b9acdd09",
"assets/assets/images/page6/iPhone13_Rectangle1620@2x.png": "0ab0b122b89b82b2e1e50d7f8317690e",
"assets/assets/images/page6/iPhone13_Rectangle1624@2x.png": "21f6edd94631ca2814c9a3b9c2bc6145",
"assets/assets/images/page7/iPhone13_Rectangle1621@2x.png": "f065dc02761de3f138b7c917d3adf8bd",
"assets/assets/images/page7/iPhone13_Rectangle1639@2x.png": "c78d110d5fac31077c4bc02a4f1325bf",
"assets/assets/images/page7/iPhone13_Rectangle1620@2x.png": "b5ce33359532358bbab69c2c645aaf46",
"assets/assets/images/page7/iPhone13_Rectangle1624@2x.png": "7ab119bf350e13258bfb4a40c2afc167",
"assets/assets/images/page0/X.svg": "f48da3173265ea78f815359ea16802bc",
"assets/assets/images/page0/Rectangle1712.png": "018c9f737c73f1be124dd8a0a057f6a5",
"assets/assets/images/page0/Rectangle1712@2x.png": "8ed45dd7397d64088828cdd1f7789b8c",
"assets/assets/images/page0/Rectangle1712@3x.png": "88c8950da84ecce8c84c45007185b277",
"assets/assets/images/result_Buly_slide/Rose/mood1.jpg": "e7af6ee421786c3acd434b1fb895d638",
"assets/assets/images/result_Buly_slide/Rose/mood2.jpg": "9f5363fd9355553a0e27aa151aaa53e1",
"assets/assets/images/result_Buly_slide/Rose/man2.jpg": "45be2769ecafa1f58774e699e5c1dae5",
"assets/assets/images/result_Buly_slide/Rose/man1.jpg": "fe1db83dbc5f0e4672b472fcba8b4e15",
"assets/assets/images/result_Buly_slide/Rose/woman1.jpg": "784970bfe45d4401488808b98e5fc258",
"assets/assets/images/result_Buly_slide/Rose/woman2.jpg": "274d9a70c18390a24c4cd53850c9bc66",
"assets/assets/images/result_Buly_slide/Perou/mood1.jpg": "d4219a97e544f6ba63e590180c2d077d",
"assets/assets/images/result_Buly_slide/Perou/mood2.jpg": "e2fbc674ce1eb67f4f49be6c4d2ba95a",
"assets/assets/images/result_Buly_slide/Perou/man2.jpg": "78f6240d24d43034676563e432069be1",
"assets/assets/images/result_Buly_slide/Perou/man1.jpg": "0a7be02f01723b292b5189e65dc95401",
"assets/assets/images/result_Buly_slide/Perou/woman1.jpg": "879b7bbe93100e2d9d46f9ceda2c117f",
"assets/assets/images/result_Buly_slide/Perou/woman2.jpg": "d1d3d3ca254607e0c3250de15a808b0c",
"assets/assets/images/result_Buly_slide/Foret/mood1.jpg": "1cc83f43b617773e083953685c952176",
"assets/assets/images/result_Buly_slide/Foret/mood2.jpg": "6315b8b48b01267087efd867d821b9a6",
"assets/assets/images/result_Buly_slide/Foret/man2.jpg": "19ef256cf9ea6c373785acf538727d1a",
"assets/assets/images/result_Buly_slide/Foret/man1.jpg": "6ee777aa5f0a27126893fdc7e75def85",
"assets/assets/images/result_Buly_slide/Foret/woman1.jpg": "e72eb92eae4047d3320786e59d441495",
"assets/assets/images/result_Buly_slide/Foret/woman2.jpg": "d91b018405b51a6cf6e8ccbf12204036",
"assets/assets/images/result_Buly_slide/Lichen/mood1.jpg": "3514551f2ad63dc2871e7eec40935845",
"assets/assets/images/result_Buly_slide/Lichen/mood2.jpg": "8929b121c76f367e2e12ea96df1ce764",
"assets/assets/images/result_Buly_slide/Lichen/man2.jpg": "0a88b0cf5db6aaab054f7d207f8f9054",
"assets/assets/images/result_Buly_slide/Lichen/man1.jpg": "38e4f227a3a468bf0129ee4e6c65d578",
"assets/assets/images/result_Buly_slide/Lichen/woman1.jpg": "64120e83c23b986f286ffeca3ae8a45c",
"assets/assets/images/result_Buly_slide/Lichen/woman2.jpg": "270d1c5e1dccaba49566b84d9387a6b1",
"assets/assets/images/result_Buly_slide/Mexique/mood1.jpg": "e61514260f14ab1a3bdd3107d29b002d",
"assets/assets/images/result_Buly_slide/Mexique/mood2.jpg": "d55e52a2c8d5784ad6ff9778d67bdb7d",
"assets/assets/images/result_Buly_slide/Mexique/man2.jpg": "62e94ed8da149e20a449f0e83d624110",
"assets/assets/images/result_Buly_slide/Mexique/man1.jpg": "7a96ad7d89760d0011415cf224004fa8",
"assets/assets/images/result_Buly_slide/Mexique/woman1.jpg": "c590b0397d5bdb3d4561bfcd93a8cbf2",
"assets/assets/images/result_Buly_slide/Mexique/woman2.jpg": "1f2fbd1f547239bc69ecfc7a17d0ff48",
"assets/assets/fonts/GyeonggiTitle_Light.ttf": "5ed9da4c3084e16be8431b123f2cacdc",
"assets/assets/fonts/NanumSquareOTF_acEB.otf": "89cc297ec4aa9e9870abba7728680c1d",
"assets/assets/fonts/NanumSquareL.otf": "c40969eb31e6b4fde6545d9ceb518288",
"assets/assets/fonts/NanumSquareEB.otf": "702510f5ef52748fed5abad03e0946d3",
"assets/assets/fonts/GyeonggiBatang_Bold.ttf": "2d57e2b329906223492227a865ed38d5",
"assets/assets/fonts/NanumSquareOTF_acL.otf": "884752b551d5b0c63e5fb52085414cb4",
"assets/assets/fonts/GyeonggiBatang_Regular.ttf": "417c45334598bb95a82e5393ea6a9d65",
"assets/assets/fonts/GyeonggiTitle_Medium.ttf": "8b4a14dd12bb9fce00e2506967de4a86",
"assets/assets/fonts/GyeonggiTitle_Bold.ttf": "b1d868613960158477a873f856f74b77",
"assets/assets/fonts/NanumSquareR.otf": "94caf6ad65d567bf536b3dfc12d1ae81",
"assets/assets/fonts/NanumSquareOTF_acR.otf": "51b78e8c049320a59c81224b1a9355b4",
"assets/assets/fonts/NanumSquareOTF_acB.otf": "14dcd062d37157fb16b0a980910429bb",
"assets/assets/fonts/NanumSquareB.otf": "d7c4bb6cc69192432eea2124eac30fdd",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
