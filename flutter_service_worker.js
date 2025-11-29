'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "739216657760ef171e09c2e797a8de38",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "f296dd697c22298fe8baef4d753f42a0",
"/": "f296dd697c22298fe8baef4d753f42a0",
"main.dart.js": "1db27f5464868efe3f4f92d173099161",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "517b4e2f211ed58f2bcc03c72f0c234b",
"icons/Icon-192.png": "dd0b31a6fd279bb8297db24e5deb6289",
"icons/Icon-maskable-192.png": "dd0b31a6fd279bb8297db24e5deb6289",
"icons/Icon-maskable-512.png": "bbc6e64b571e2573c674be349bd89a1b",
"icons/Icon-512.png": "bbc6e64b571e2573c674be349bd89a1b",
"manifest.json": "d4e3a968ece366762d9c5df3b6bc1aa1",
".git/config": "07cb0baa15537117626fc5ad1c6f2a85",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/7278f34901e7ea01d0fa6e0710547bb42681de": "2586ba8fd46f68cc42f6477a3b334204",
".git/objects/50/378f01a11bc5fab924b697f11f87a6d0ba2ddb": "a519e614015eb3a011e47290f378f0bf",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/04/839578cda124bff6a037df89d4947fd2659698": "6ec57b255a5cc6be19f618b970f7634e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/b361a6117e4660a19673693b262b8e8f16e500": "df80573b95fede644cde7b702cb45846",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/bd15c32bb8fc395f11cdd597f92c60d6c33887": "862e55da241873a5911a4926afd8e236",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "1bb905c1172188cf1c3a2e9fa123dccf",
".git/objects/ad/be5b0fea9971b4a1fbd4e7e3e7ffb8d09f6552": "3d6b1ed2cf3bfff7bf291035cd42d21c",
".git/objects/ad/565ecd1364f0c8554c2780f4cfe02c364e8b95": "793fc00c823691387d88a5ccb3df6a2a",
".git/objects/bb/d5e9051a0b0121541d7b77287652322e1cda1f": "6d82b6bb672e9b384aecb8d03b060820",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/bd/2947b34c06ddbf485ad56c85ac897a6bf06197": "ea8517e1558bc9d267e320c830b187c6",
".git/objects/bd/29f1073cf400d74ae11e9c0eeada9632cfc3d8": "e8a76169bb70a1acf436f2dc56a74f81",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/e5/8d01e0fa50eb7e72ec9ec083660968f321f2ac": "f9a2cdf46ba339a77393432187103dea",
".git/objects/eb/44518e9b5e97bcb3473f5db465fb07dccd1c4c": "b7944433bf8ee9b300ec10ac26e80c46",
".git/objects/c7/9b0cbf446130f9d39e83f13924f0777d1817e8": "bed23f6d21d723e9cb9b1865ce1cf88b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/95ac919da6effb3023f3d3fe875b3c76146fc8": "750375f56dd90ec04b37ff0b77769b69",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/fe/4882c62442ad35367659cffe091962faeeed83": "b12c03dadfd3e7152011dd04e311886a",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/42/b0c72634cbb9580d3c8c2b5ed962a1230bc0d9": "fb37be8894b315c7e8b6f48e97fb4ee8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/97e20098557324266f96a0d036e1b25cc08db5": "bb6708f2dea43bac439e61bcdc95e149",
".git/objects/19/c5ff2c2707a652f22d2c42ee6f12ae1dabb324": "b793349d491eaf078eb00607df941ece",
".git/objects/19/80237bf1538c8876b8f14a93d4393cc026df50": "819b09688be535c4c168a982798e75f7",
".git/objects/26/14c974323778d25b850238b1f64e5d4c10d021": "274e0e8ae86a41ff302a9b6df734c3ac",
".git/objects/75/96801d3c1e576f0b9400b3e214b06bb3e43b5c": "cfc906560bbaa972465ae3172f4f25a6",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/dd8326b2944548780a02090e3cc4f936192a8c": "e326befd1e1012e01207e5004ca2287f",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/37/0fb7d24dcd5ff0d0d212a195f689aeae02d253": "512ae8ac705a160df68b80ff9d45e3f3",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "5c97d3c4382450b995fd2bf0b10b6c42",
".git/objects/0a/5f109209c8495db91bbc6784e94a91926f6402": "9eba8f53c97a4cdb27ddf340e6718885",
".git/objects/d3/921d1575042a8d131fe854a9c777669d837d20": "54edf8bb6df42e8672f3d2a0e6449c70",
".git/objects/d3/b237f127e8a1ca02811587f60cb29fba756f48": "05b65f2790e1538cc097cebc79948189",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/38da87c98836444ccb53292d191bd4219059cf": "4372e45e4e41d7bc9b3e32d17cf137aa",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/d291775706da5f48691fca730c24057329fdc1": "acd172f3063637b6b361186054eb78ce",
".git/objects/a7/cba0e9b8cee6c61b2af460eb18ca98689f7d88": "7ff25fcc35dc55328330efef0a1a6844",
".git/objects/a7/27382b38318baef4a3a64f3c44ee5ad92b90e7": "1326be383fb91d35b1325ee9b401f78c",
".git/objects/b1/1d3717c246af1b913b8badc26a8aae5b58e233": "7fb53adbe42f8152ef5a5c9a89b0ed17",
".git/objects/dc/9d4cddb8d02595db704eb0384c585be0a61cbb": "9ae75b2b0f6c83329b3a639c2e8be6e0",
".git/objects/b6/67f6961256d81bf3388d7313b7268fdb629423": "bb74dedf4ae902793e71433b0edf1dd7",
".git/objects/a9/36a4b9c278b5f16e8ee676421e948e500c0e8e": "6bcc203debbad08373913d4521b75285",
".git/objects/d2/75aaff1b4fdd0dc13be40a2ee61959081eaaf3": "7bb547550159b5b2b918c5f05a6fe672",
".git/objects/aa/95b90c1db37f360bc658ed065b0c3c5ed7f673": "872ceb88a0b018b1374da9c15febc5ea",
".git/objects/a8/4cfd085a7b786d03e953a59f51efa134bd9708": "e917f5bc07dfd9b8ff60aabac3a700e2",
".git/objects/b0/e53950145d9d03f979c4bc59ec3bf37943e841": "a01308d19840f8c414bcf1c6cf7205c0",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "89496a3087b2c3dbecc6c6bc2f6dfa53",
".git/objects/b9/6aecc4cdc750e985958b89184cdc7957d9a690": "8aa407664825443a853f5b8ed761ac2f",
".git/objects/cc/5b751a35bd362b29a8cdec82ca728e9cce0aeb": "623dcdc9379d0711370772d6289bc3cb",
".git/objects/f0/047eee7e13b170c2c338276247ee7ac42454ed": "3af0d62b147c8096085665012f71fba6",
".git/objects/e9/fe0491c3852d86f10971195e31c9f03c745130": "d0337a76f046173c9cab38c3b505b965",
".git/objects/f1/1a5068b95b029dfcc472f80c736d152a9c0e77": "c49efe04ba85122abcec8dcf6cf11fac",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/1e/6322c0c34df176069763e63e7965db009bbd54": "62984beab78d8af5b8ff68a7ae443c11",
".git/objects/84/37f468685b5933615303fd1ff6c9ad3dbf94ee": "5b857442f26674bb292a22165633e8a6",
".git/objects/4a/eccb58313e63efc967e12416bce01f364edd72": "458e3e156ac1e0ce6a1b6bad6109d474",
".git/objects/4a/3c14c623b21c7aeb6858fd520bb6b6dd6b5f92": "0cde0bc287e9e27298abaf03bf563a47",
".git/objects/23/ffa7c77b2810bb699106d2aceb786bb9a4eecb": "c1099b028932be77fa961dca8d3d8179",
".git/objects/8c/9e7042e18adde9532bfda1ea324b2d0c117ad6": "d6debd6ca038aa9f0ff193d87fa21a02",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/3e666526d72b36675cca17804704802b866b4c": "ed05f396de4fa5adcb23d2a57b5e383a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/14/0ac15bc7dec74bc383c51799562acacd342e7c": "3b653e8d4f5b0b2636f18dd77c7721ec",
".git/objects/22/ab7b75509e20768a8edc57c608dee55b77c54d": "26ee73608ce975cc2b2b5a3985dbc930",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02099a4880863bd3bc335457fa8d9f45",
".git/logs/refs/heads/main": "1d68856ab5b968c7623320458a3a6eb0",
".git/logs/refs/remotes/origin/main": "fe81125706f9575e69843270163bfbf4",
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
".git/refs/heads/main": "72d6aa91f6b8bf292e2f14c8f9f02248",
".git/refs/remotes/origin/main": "72d6aa91f6b8bf292e2f14c8f9f02248",
".git/index": "4b23cc97275bd3f9d7f224bcca347810",
".git/COMMIT_EDITMSG": "f4949dd50d6a9204fb29752b08154ae3",
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
