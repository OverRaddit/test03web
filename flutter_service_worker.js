'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d8951f8942f3ae19e6043c8b2a510dae",
"index.html": "85b4ab5bd54da1805ab7d80ee453d8b5",
"/": "85b4ab5bd54da1805ab7d80ee453d8b5",
"main.dart.js": "4456130f88d92e6723344fe4db167040",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ae6a8df1eadca5f571f4850ff6bc64d4",
".git/ORIG_HEAD": "329218349f37d07612895575b50faf83",
".git/config": "17045522f09203596a70532a9a380bae",
".git/objects/95/99387151f88d388efded7363b1e9dc49c2401d": "48846855b5c3b5f1e65c5e4bca1ac43e",
".git/objects/92/817af538e95002aaa71cabc6eefb080ec06632": "f025045b0c5ffe7842de4aebd2bfc1b9",
".git/objects/66/54c9f70f385dae07fd0c89ffde2caf2d901b8a": "d013c7906fcdf6e969b5c25738dec280",
".git/objects/50/e40837d291e390e7e4086e223d291d8f7248eb": "25043008bd23a587c7cfea3c9bb323ef",
".git/objects/50/7e1f1dbc29cef09b1e426510737b75a19925d2": "3fa0a0b058f6fd5ee66f07036aefb50a",
".git/objects/57/2f1cb7408bbcabc8eb575a82c73cdbead6a4f3": "9321ce5c81b019f11d43e95aeb1c8142",
".git/objects/03/1c1cd8edd06e936b5fafe8d3fa7a0b0618446e": "dd8db69aab1bcc57ca2f4990ae31e407",
".git/objects/9e/0b6c5bce9fbdfbcf55401a6f58ba9053bfb6b3": "8d7c3feca34c14e22d44f5f69ad0695c",
".git/objects/35/c401b42223a4a7af3e3e4fe9492564b195693c": "b9fe53ab0e599ef5b3fc8ef97caec3cf",
".git/objects/56/5a906c52ef6ddd8b9035204ddf58105a8c98f9": "3af39170b795a2d575dcfcd25cc52c3a",
".git/objects/3d/027bb01a702e953cd9121368e82165aa50f173": "c26e6f02136918f33368166625388ebd",
".git/objects/3d/0de33d03142cb6b3ea9f4f7065fcfc363ca378": "ec02e235dd287aa5822872cafca02610",
".git/objects/58/23be4eb0af8ec88032ffc0f22d1028e2090c0d": "52ab020f28760e02422a3d6f2b9b01cb",
".git/objects/58/c8d8d981d80b373b8fdf807b67078822398a20": "94bb1903fb8a37dc66aa8bd49f4aacf7",
".git/objects/0b/670804accfa33ccbb606a3ef6bafbe72a68cd9": "0bd11576e2108765a2684c5204b165b2",
".git/objects/93/44d6c33cca6b7a66f1e60a3db8fc7c7c1f391f": "8cd676ec7a7cfe0a9156d6da12a6ccda",
".git/objects/93/0a3a8cdff38c4f56670d26b993191d8121799f": "03c20137df724cdfc90f49505c5ee29f",
".git/objects/93/5d23dfabd964624e84352dd9f6d0cd63fa2d1a": "a038c265494dc731e9ccdc9b2722e682",
".git/objects/94/0bf1ac3914e580dd1a33f8e0c1af4581fb12c2": "4316150823c174af4601f52a459d464d",
".git/objects/60/551520b9c5bebadf926ec20b1ff5cc99702521": "996ff50493391314714360b71ae8fa88",
".git/objects/60/e2865231de2a8fb1bcdaaa5ea8ca70dab93576": "62c956f9dbec4479966d1feb9b4825a3",
".git/objects/5a/d7273d06d77d966912839d2c11192f8d1d768e": "987ff91efc7efb67f9b3dd4757a7b0cf",
".git/objects/05/fb4bbcd3e22bfdf164523444343aa3c49eb023": "be41748feacbcc0f2610a996a21c927f",
".git/objects/05/cac58e9fd9e14397ae6d33f8501c05a8d96458": "54473a26bedea5629c848cd6c260d0cb",
".git/objects/02/14bc7b74ea0e98c00f6afbcc217b72627dc7a1": "1553d4f259eb21d2f673096d7ebdaa1c",
".git/objects/02/a51d3dd686e273e72788f2e7c4fa21cb5974f1": "7c2805488b6ad97b418772db4e728b29",
".git/objects/ac/7d19f6f395ac96d1e213b62d332e2984d109f5": "fabd806bd67eef0a48ad685106e3c95b",
".git/objects/ad/76ec0ead9bcee25518754fc7b0e8f7391ef9ac": "71a7ee1fc6dfbd715a6d497ec4edb03d",
".git/objects/be/859449b1b74344091297a96877d18d622897a6": "3e602483632685a867c6a87c50335091",
".git/objects/be/5ddb0e4dc5aae6ebc9f69a1f7da4fffa8ad1a6": "7a5e3923d4c33bddd61fd0e83003faec",
".git/objects/b3/33f04ee9188e18b2f669c04262254022348274": "c5e5a5aca4e7ccaeb457b8e4082879e1",
".git/objects/df/514acaeb255a453e1846be25dc1c31a6146e33": "1a3891135f3b38479a6339023a8564fa",
".git/objects/da/723770df5c8e01828a6b4cbd68405738a1f1f5": "1b1011554339cceed9499edf589d8312",
".git/objects/da/3f7569270ea47293db5d097f7ee458bfeb217d": "f2a05e56eeefd5fc5c505a8e152e4278",
".git/objects/b4/d2e0d8720100c5b62694dd501fd4f037e09d82": "036a4f251a0f1c28a52b2bfe1b6fd6c7",
".git/objects/a2/e942a7a37f93942ab8386db8ba35f36d334706": "7b5395c8c061f69679b8d0e19cff8a00",
".git/objects/a2/d1ee81a812642354332068d92dbcd0235aea50": "bee9abcc2f66629758d86365c4d16f09",
".git/objects/bc/118ed4fd5ade36546b6a3846096dffa51980c2": "e0b1f266ab965e89b71991ab3a6eea44",
".git/objects/ab/3d2834b231ab695826826f8206c35c1ce2824d": "bd6bc6a2b0abeee9f1cc256bc79e6e17",
".git/objects/ab/c6f79eaf055d0a843fff3b690d62b15c519cfb": "7c640a6ba644e486734750ef7b0ccd4f",
".git/objects/ab/33b37483b748f79f41eccf9b008a99bdb4cf0a": "afe88cff86d9ca3e536e8802a94bfabb",
".git/objects/e5/7d099701d56d250ebb0b9319ff717d026f6cb8": "c3bfae14fb4249373a1d6b0a8cfc5331",
".git/objects/e5/78728b716a44135b0004785c79261f8f72e4dd": "ff01e23bd0ef0906c9625dc73372ceaf",
".git/objects/e5/a0b7ad9caf18bfce6c207e6b3f3b0141ad295f": "dfd21cbe44efa70dceedfc37d9f1fe2f",
".git/objects/c7/d6f3de2dbd13ac69ad6a78056005b0ed4e7846": "1ea17f9717c6c63c4bbcd374de962755",
".git/objects/f2/bd6596944554f2c53e234cb95497b739ed2603": "8287aaa72cf9a6f82dc1c6278b3d2131",
".git/objects/ed/0b35b4fb7804e9d07c6bcd31678650b4ca7aa2": "f1a7ce3a6a2977ed0ac22c573b212246",
".git/objects/20/290bf4894406571018f6b05ab101a428a3d72a": "6929b0d172967817e9ea402ad5a0c046",
".git/objects/27/177130dabc3d66c5d17e732ea4d40ad684c5b8": "b0b70e28c7dabb9e7faf297893838556",
".git/objects/pack/pack-899f61db535601749be0d661df690fc96724675a.idx": "35c17286b784d499e353e16b816773af",
".git/objects/pack/pack-899f61db535601749be0d661df690fc96724675a.pack": "7f6154309fd215e1728a6721cd36f8c8",
".git/objects/7d/e3569f3a16cb5451275235d27edd659b51defc": "ab3d11180e3c24301dcb929b2a184815",
".git/objects/7d/0f232679a15f1b80d1ab9f5c9a4d52e83f7072": "61e5e2ffa6e3bcb7a6168c7410d1b7f9",
".git/objects/7d/c37a9ab3837fad57c8856b5fd5d78571ab8d6e": "b6affa7183029f5b1e308a18b25d952d",
".git/objects/29/98df5b539fda2d685661dc587fa6dc24d247f6": "11473e2beb6f0a26bfb491a793b2c7e0",
".git/objects/16/7473c99d0a80190627373a6eef1edb6d8c9d91": "8797d8943f076b8140618c5a23a63853",
".git/objects/16/d8dd04f9f6be3ad578c1389103aa7eb0712ab7": "ef7cdc247a20b815a23d1f9ed2b4bea5",
".git/objects/42/e7c05c2e3babb348d311a12315f4a02fa2fc9d": "f19b18818c9a27d78af0bf2d2c46f2a3",
".git/objects/42/4b0a6d7b3d722a82d1195211bfddcacd9c5a46": "ee765c533c5a037a2b09757fdf43ee50",
".git/objects/45/260f7fbc0d336f9ed8282d8fb7689e806edfd2": "70c27c5c9566a445a9b7bb2ab22798d8",
".git/objects/80/6d8dd8bb4b7389f5476a50bee597ccc4282788": "2c6160ecbda767eaf8c58b2e2d157451",
".git/objects/74/e5db1e8e130f8eea0f36dc98552b0234b8364d": "9849cadbc0a576145678f0605fd641be",
".git/objects/1a/42259a3229ccdb2ed1a22e7d9924505010372c": "a8b07ce170785ae9eb8701790e01a211",
".git/objects/17/dff718bda4f06b72bd37e12ec0a5d472853af8": "55b7ba18c0a1a0fff5e17d32b3c6a1a8",
".git/objects/17/8a7f0baad7eef245f795a1889825e451ab8780": "dfc39bfb470712451b54c125a0802c93",
".git/objects/10/eff668f099a1275a81505e635c121412546702": "db1f4890e67162aa62424e3693b7e506",
".git/objects/19/38cb0d2ae90be631fc56b2db7000750b372a10": "04d209be334c1c7f1ade05d11251f9f7",
".git/objects/4c/e6787acb388e49e36c09b70f018b4f906bcef8": "e99d421ffe52bfe0b7fb6b7b927296ed",
".git/objects/26/82760cc9d153d270a69b45afc58deeae92811c": "fed50653c7de71c728ff481b052cb029",
".git/objects/21/c96664c111e270a4d2ce5003a137f386d2eb7c": "51d52e70971fe9ea1e8117dfa3c42771",
".git/objects/72/526e76f4beff84d3445f397632734abcf8667b": "da411e08d2231462e3402dce1a7554ee",
".git/objects/44/5380cbd27b19500d0c8480c02ba4d26c663417": "af8d5c282e291f3f42f432e2ee658d54",
".git/objects/00/6b679d427955e8e7111f9bfbe063e332a67a6c": "b2abb670dd46a0bca81a013f13abcd8e",
".git/objects/6e/0839786f2102fdd02bae43dd037956d4c884f3": "6ed5633b02764ed09792dac4fba5790b",
".git/objects/6e/07341a5ce841688846194645b17b372f1bb8ad": "d0e669973f58c44809b9387bbb5a8229",
".git/objects/9a/8f2d379568691e3bc73544a34d5e8f54644b16": "7cfce8af0e1356a5df0195829d29f42f",
".git/objects/36/6dd01b28eb90ad9e4865435b56da8584dc6bf3": "e65786b804f408de0e78a4fb5294115f",
".git/objects/36/972076acc93c74d371d7aba7b7eb8d37976e61": "b5e1116dd6ea01a833c88b0c92920f9a",
".git/objects/5c/91621b3c933d45898a0d4024adf5730ad3d13e": "b2e816eda2879f62fe625ccdb02c6b9e",
".git/objects/09/d5fff3ffd2ab5a54092daf586c5b5d50673746": "b994010b0be69170e83cd6df481ad074",
".git/objects/09/fc29dae22e29b3b68c166aa1b15de27a07ad4e": "f5270d15a3b84c0678e2adeb877c01b0",
".git/objects/62/8f41e499513752f870aab01f92dfbdd663aa36": "6b35f27b74c1148e219fe1e1c7536c73",
".git/objects/96/22ee241fed173c14f742580368ef363a55e56a": "aec5cd0c446cb09b8b3710849ad6ff15",
".git/objects/96/cc947eee2cb758e0274520fdd84d18e292c3a8": "d6acb3256850ad4fc7fe4e778a95b58b",
".git/objects/54/9be058a6354629f871364230ab58cb601c4900": "01f1058d0089096f807e210d9762f232",
".git/objects/30/e84e46143cd085592f1ab0a1b374d42f5053c3": "80cf6ff1320c64664e18c0cea536d3c1",
".git/objects/30/ded4d03c80c6248b3d2bb031c17742691df039": "e30132862a9b23693fcdfb0d21796ea9",
".git/objects/5e/21bfc7fa835ee06e83b490d441b4fc5f8a2034": "be3db53495171f62ab9818795ea8b245",
".git/objects/5e/5b0ceb25e0d6bbe5e5eb9af86ef1f874a79457": "4963a76c2b5ffb41dd1b8daac3d709c2",
".git/objects/01/16d12c508bc182be01933d2ef9d08cd8875056": "f175829905f6556e5f0a200cc1266fe7",
".git/objects/06/586917c8279e4223f49417f4a5555988d21f72": "da4f8f262ae91aa72d8eb31b82da7815",
".git/objects/39/ed69d5f1f2e28fefdfc37ae0dbe6dd1ed88775": "ff5263ab1b6b0f0daf298a68be186f98",
".git/objects/52/75e119b9b15a0e43de5b813befdb347b6e3c03": "42f35698f7322b928c19badb23822f6b",
".git/objects/0f/7e326e73a80e97e091b3892bda0ce47861905a": "67c4fe969fc35f08104e745532fe1b84",
".git/objects/0f/519fee49e28e116374700ed99c71a505c51117": "c6677c1e6dbcadf11d26a923b5758adf",
".git/objects/64/7b2c5dca91456fb6b2d55884c33c78c538d651": "d255391a2b9edc4329fcc4804a3935a9",
".git/objects/90/a9e23b535dcc18d87a9a3c359f39ddc1314a94": "bc651f7b2db446d4d4974bdbe4d261c9",
".git/objects/bf/4af463a54625fddb0e957406b3fe3c960d343c": "a97a3880861b66d8666bb90e6c207e99",
".git/objects/d3/956efee19819793e9ed7dc540e0d8a831d67a4": "33b0280df18b5eec202e289b005dbcdb",
".git/objects/d4/54d430a865b1bc0a25dea2693f433733152c96": "988ede814479cd15d3feb71c686e6311",
".git/objects/b1/c52eaa5366805ece7af6fe77a466159c4a5165": "0d47ee2eac791cb91302e5487a5d3270",
".git/objects/b1/5db41274206fb2642a1722067173e6d81f3aaf": "68b15702acf855408245e9ae5fc9e8b4",
".git/objects/d5/c8349dd25357967c5fcdaefe11db990d03b8e6": "42a9b189d7859e05e01b5862cc0c3ee4",
".git/objects/af/7a22e7e5038eb77cf001bde05d2c6f4e11e56f": "6ce669b0584e64bd7cc5644abe76583b",
".git/objects/a8/247cd03e2e7100f6f3c3b84bcdbbcc0c26bd08": "b9d4b47e87edbed01dc93309726c43b0",
".git/objects/b0/c1c12153700ab4c498d9bb37b129e227e2a895": "b793e57c7d5e390d4ec34a7ca65fd82d",
".git/objects/b9/ba727969ec40261e2b30244872ab18e05c946b": "339044871e7179be2277a4ecd2d8603c",
".git/objects/b9/01f96e31d0522c7a741f3b29fb124e84dca57f": "7fdb622156e93210b87924e61f141753",
".git/objects/a1/caceefb41bd29e8e5e383199f4a2da6c739217": "86fc4710d06cab0eda45b3236559e57d",
".git/objects/e6/6223c2121777c165fe9e6e91cdeead52bc0e07": "11c0030f30a04c948ebaec99c24a2d1f",
".git/objects/e6/baafca5e1c24d9ec6a9da76942b0913c57939c": "d53a3a17486d6e619c811cf3f5cd9aef",
".git/objects/f9/808fab4a8c2bedd4a6c85818947d36792d9415": "1b5ec70187cd458664a7bd2928fa231f",
".git/objects/f0/9b1409baa8bcea1f18c1faa7ab900b6cf3ccd2": "36019a60ad53b82389354eb44360dabd",
".git/objects/e8/afc3da0c8144becbfcb6967b90e0026ec4e00a": "518d2edfe4f5d08ad0289ac796a47e82",
".git/objects/ff/64913dfff214af341b0a872adf8cc195631a6b": "aafa7b0ee1f7831aac1b0f98dcda9729",
".git/objects/f1/f00ed23f69d214392f3dd24a5666a90ba09fe4": "1a6d5cbbb64738063df6546f6c65a1d0",
".git/objects/f1/09e009b9a1c820705a75198b0bc6df4e5f2c87": "81a9128a36a71f2465c07720b1a08b1c",
".git/objects/e7/06f92cb7ca6f5ec41a396b2e07d053d0c1c259": "922dc68fadcdfbe6e4e62957587174b9",
".git/objects/cb/ecfc6b40f67245d38e6accef4bbc522bde5d93": "83cf26d9ce389f284c8d4a4f7909b2fd",
".git/objects/ce/aaff13ba1cd26c6ed671e0212f3bc84e7f7293": "39a1dd9017675edc31f4083593b55a2e",
".git/objects/2d/e0df0a788316a3ee13ce74c886ea8be2600932": "4fcdaacc9fc33771ce0a962e398e178d",
".git/objects/1b/e052aacb852f15bf12e420f3c64390787402f1": "77eef5b05b75dfb44627eed109a94d73",
".git/objects/70/807ecad70f87965cf71a2366c0c1374087c750": "3e8cace7e665da7c8c6e05e247338900",
".git/objects/1e/8f5248dda51aed0044f3ba7463940c23b3342f": "b04b3de8ed6e16474f1159b0cb7b9471",
".git/objects/84/dc177f26da768a9255f170ede45e426dfdf128": "c78031559882f52e4a29f6279bfbeb93",
".git/objects/23/7ce754061212b035e64c631a43163fd155575e": "9904729fff51182eefee49a479cf2515",
".git/objects/23/e59134daa75df4f915e5b12892ff74e8a63e72": "2633db00b969d0cb601eeaa8cc2b1c97",
".git/objects/8d/8011b186b5639f7b50fb66f5098a1f4b77bce6": "c20d30a81ead1d9fd9602e24f82c1ffc",
".git/objects/12/f31d06e8adaab4657bca9ea662f49b7ed0a555": "979cc39010097bb847bd8a96e458d299",
".git/objects/12/27993408fd6761b744b4756c30820d0589ac32": "7de2cae5971273e74f111f0842a470a5",
".git/objects/1d/94b2cae4675907077535f4ea91c76bd1c75151": "a0c31599077c39e91298b484a7e43f6e",
".git/objects/1d/3a2f6c6f5e71a433b46fef9c56e12a1b40d555": "e804fcf2a500675387ab0ef9bc4092a3",
".git/objects/71/d28ac5c2744a02e31c4be0ce0d87cf542db3d0": "9646cad425ce4cb44b218d81906dc32c",
".git/objects/71/b8b7b12eef13f0e793b298342ab14762143f2a": "391a0ec3f49af56ffd757878e0935051",
".git/objects/71/92acc0aca54f26663617133c9e4093081ebee2": "63fdfaf5aa83f8465e90f19deb0c522b",
".git/objects/1c/7ee89d4b37e9621e0dfdae26f1d28e29316c0f": "38132b347050d92b9b49e1dda257c880",
".git/objects/1c/9cfaf51ef69fe034d368a4f8c7919484d087d9": "174d87af97ba598d5b68d48e73abf67c",
".git/objects/1c/06e6afba5727c3f80e1ebc9cf509046e0453a8": "bdf2dc1ba14ff88c268fd3a991c70be5",
".git/objects/1c/316f8876f9fca6d6949b80cc3af8cf121e66ad": "87e7a17018b036e8a958e9b37e726633",
".git/objects/2e/7aa1f58c1a8a21e1ab78073b8d6289691aa787": "e3ca72880e407ec9b95b9b5641dce869",
".git/objects/2b/3cf0ca73e6512abac846c6e4bae4680eed163b": "b7bfa574bbdb7b426ad9f9da919187ef",
".git/objects/47/081212978ac0f8ef855d42a7985c5ba7fa2a0d": "48530d89e76bd1e902faca8edb547b14",
".git/objects/47/8bba5da89d6471fec391a9d530884de0f560e6": "c7ca8aeb79b8982f68dce383e9a1ffd8",
".git/objects/7f/6940805a821383dabbfb788b73c7eae0325657": "c48cad5eebdf4529e5107f46ed41702c",
".git/objects/14/942e8c15647dc6d3b4d4851337bb14d835ad20": "7071c1d8e3637920008f623f617db71d",
".git/objects/8e/f01fae91a4c5f13d950cb2c0248ecf23e8291c": "d8a42edcc1a279403d8346fed7943ed2",
".git/objects/22/3e3aa6a1f60d7a5a6b77ec71fa2109e17ada25": "41218eca9da73de0bd6baf8e66b502f3",
".git/objects/22/3eb91b3e8a01e821e52d2654217384083944bf": "89ea0572bed2d310ea61308e2bdd7d60",
".git/objects/25/eb6dcfb94c98676ab3a26f6b2fc6929b3deefd": "60a7d1f642619037d695c571a0bec6c8",
".git/objects/25/532c887bc25c9b6ba59c899949c24e864cfe76": "4e1aa81a33201647740b716491afac62",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6889b3c67e96749aaee392674dce0d2a",
".git/logs/refs/heads/master": "6889b3c67e96749aaee392674dce0d2a",
".git/logs/refs/remotes/origin/HEAD": "52327f6484a06e6c13ed57441753f7d9",
".git/logs/refs/remotes/origin/master": "b1d6f312e1a55bac610fd1145471bb92",
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
".git/refs/heads/master": "992b52c54e2378770de9b2f226ac6199",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "992b52c54e2378770de9b2f226ac6199",
".git/index": "4a468dad4590ccbc933f2bb92541b544",
".git/packed-refs": "c03a566346ed9045f5aa3b6936a67a9d",
".git/COMMIT_EDITMSG": "9945db3adf9e86e31180e6d01863ace3",
".git/FETCH_HEAD": "e48102310d46dce2c753a3d11f46b702",
"assets/AssetManifest.json": "53afdd77f492aa73af960a26f9e68ab5",
"assets/NOTICES": "32c90220ecb8c784c0776f59e309870b",
"assets/FontManifest.json": "a83bae1dcb9e580289aabdc9f0e1bb07",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1e2b396f5120483506389bb0d8c22806",
"assets/fonts/MaterialIcons-Regular.otf": "ed8b088095c1ec213678783cec04e0c5",
"assets/assets/images/img_13.png": "55ee58582bd11f6f96d4c539478f7311",
"assets/assets/images/result_Jovoy_slide/Guerre/mood1.jpg": "64e07bab045d8f427cc696ec544f9bae",
"assets/assets/images/result_Jovoy_slide/Guerre/mood2.jpg": "62c120628b9a8fb21041255272dbf1ee",
"assets/assets/images/result_Jovoy_slide/Guerre/man2.jpg": "04897255a3e1149c3c86a2cb32d087cb",
"assets/assets/images/result_Jovoy_slide/Guerre/man1.jpg": "270117cd00fc76d0ea7a465e44ac3661",
"assets/assets/images/result_Jovoy_slide/Guerre/woman1.jpg": "ea9102f942423b9141c9f789cb8634d4",
"assets/assets/images/result_Jovoy_slide/Guerre/woman2.jpg": "4acc499daeb56de56549fcfa7ffdeac1",
"assets/assets/images/result_Jovoy_slide/Psychedelic/mood1.jpg": "eee3bd6185e4358aa85b469efb2d693b",
"assets/assets/images/result_Jovoy_slide/Psychedelic/mood2.jpg": "7b5935d4f159684263bd7b7a4dc51f73",
"assets/assets/images/result_Jovoy_slide/Psychedelic/man2.jpg": "61d80dfd9bd1161cfb2ba8bc805d21fa",
"assets/assets/images/result_Jovoy_slide/Psychedelic/man1.jpg": "261a1adce03225a5bd2ba634abb0ea83",
"assets/assets/images/result_Jovoy_slide/Psychedelic/woman1.jpg": "beb2e0f262bca41bb5d62b2b35ac94e1",
"assets/assets/images/result_Jovoy_slide/Psychedelic/woman2.jpg": "ee0956e02071acf7f48adb11b8ef7820",
"assets/assets/images/result_Jovoy_slide/Touche_Finale/mood1.jpg": "62adeade33a3c71f7679f537ac1f6db7",
"assets/assets/images/result_Jovoy_slide/Touche_Finale/mood2.jpg": "8d71ead15d224fa2a679bd7bbd154781",
"assets/assets/images/result_Jovoy_slide/Touche_Finale/man2.jpg": "cc828010bbd599f49382cd220cd3f154",
"assets/assets/images/result_Jovoy_slide/Touche_Finale/man1.jpg": "6537e85829539792269042191e1fcf0f",
"assets/assets/images/result_Jovoy_slide/Touche_Finale/woman1.jpg": "1a492f6c1cabf886de9c970e9631fbee",
"assets/assets/images/result_Jovoy_slide/Touche_Finale/woman2.jpg": "de2ed10c8a6cdc19081e68f1894f7438",
"assets/assets/images/result_Jovoy_slide/Gardez_Moi/mood1.jpg": "d79517fe6233a9630b6990ae5cbfc077",
"assets/assets/images/result_Jovoy_slide/Gardez_Moi/mood2.jpg": "b21d85de685a182a55cae384d9777e70",
"assets/assets/images/result_Jovoy_slide/Gardez_Moi/man2.jpg": "a27e971d03ee81231a6518a8117973df",
"assets/assets/images/result_Jovoy_slide/Gardez_Moi/man1.jpg": "3ff407b6347b79aced4e654ee431cc34",
"assets/assets/images/result_Jovoy_slide/Gardez_Moi/woman1.jpg": "c0dcf81d95f8489073e1d8d60717feca",
"assets/assets/images/result_Jovoy_slide/Gardez_Moi/woman2.jpg": "c8d40fcb755a15796ffe90a8caeb0ba9",
"assets/assets/images/result_Jovoy_slide/Connaissance/mood1.jpg": "45c6b5132078121c3112c4e75cec5e3c",
"assets/assets/images/result_Jovoy_slide/Connaissance/mood2.jpg": "11dfd6412ba436e6ed9767ded274a788",
"assets/assets/images/result_Jovoy_slide/Connaissance/man2.jpg": "d81069267afc7236e8a6cb8254a934a2",
"assets/assets/images/result_Jovoy_slide/Connaissance/man1.jpg": "ca02d73b61afc6c2488436c902ca8bf0",
"assets/assets/images/result_Jovoy_slide/Connaissance/woman1.jpg": "8704d2aaa0409fd28e8b96fee4cd9645",
"assets/assets/images/result_Jovoy_slide/Connaissance/woman2.jpg": "322d79a479edd5ffb884f85c6ce34824",
"assets/assets/images/result_Jovoy_slide/Ambre/mood1.jpg": "af4369093118adf53611fa849669527d",
"assets/assets/images/result_Jovoy_slide/Ambre/mood2.jpg": "f580dd49a88dc2ecae5ff1b2b4e0478e",
"assets/assets/images/result_Jovoy_slide/Ambre/man2.jpg": "5c4aabf48bf1f95766c9ba0f8829674d",
"assets/assets/images/result_Jovoy_slide/Ambre/man1.jpg": "df23a1d7bf2581a851f2ac6d3cb5dcac",
"assets/assets/images/result_Jovoy_slide/Ambre/woman1.jpg": "43d5e67a28cadaddaa73143c2de1ac70",
"assets/assets/images/result_Jovoy_slide/Ambre/woman2.jpg": "18911a1b83e91590383272067cbb6ec9",
"assets/assets/images/result_Jovoy_slide/21_Conduit_St/mood1.jpg": "2f763b81c69c612e5edafd2125c674dc",
"assets/assets/images/result_Jovoy_slide/21_Conduit_St/mood2.jpg": "503afab859cb412dc2e8c8501eaeb543",
"assets/assets/images/result_Jovoy_slide/21_Conduit_St/man2.jpg": "c6965bb51d1ee197c8c34a9ff28dd34b",
"assets/assets/images/result_Jovoy_slide/21_Conduit_St/man1.jpg": "d9f6eabcbf675812b38ec14b06e023aa",
"assets/assets/images/result_Jovoy_slide/21_Conduit_St/woman1.jpg": "db74110c4b25f3ca71f11d07f2f18621",
"assets/assets/images/result_Jovoy_slide/21_Conduit_St/woman2.jpg": "18af4236a50da2a3fa36bbf541815f00",
"assets/assets/images/result_Jovoy_slide/Remember_Me/mood1.jpg": "49d291fd10cf30b3d4b20e2e9ae2a309",
"assets/assets/images/result_Jovoy_slide/Remember_Me/mood2.jpg": "76d2ae20dba443c844f612cac0a7062b",
"assets/assets/images/result_Jovoy_slide/Remember_Me/man2.jpg": "49559e26a6893ce18357a05b8547abc8",
"assets/assets/images/result_Jovoy_slide/Remember_Me/man1.jpg": "9b453b7aaaa8fa8d41c0caa0d94c1345",
"assets/assets/images/result_Jovoy_slide/Remember_Me/woman1.jpg": "714254975c948503e955f77511572802",
"assets/assets/images/result_Jovoy_slide/Remember_Me/woman2.jpg": "dfa1b887d90ec425a01ac374bfba5cc2",
"assets/assets/images/male.png": "0b6c962fd86285d406ab62dc72a1ff8c",
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
"assets/assets/images/female.png": "05bf3ce8e2779e63dc1ca6ef2d57095e",
"assets/assets/images/logo/perfume_today.png": "af9cafa6dbd3f9a5ea34932c0527c2c3",
"assets/assets/images/logo/KAKAO%2520logo.svg": "275c1ed3b487360b88fae52abb89fd7a",
"assets/assets/images/logo/Facebook%2520logo.png": "c7a8fb31874ecb7f53f1d69200bb9262",
"assets/assets/images/logo/Facebook_logo.png": "c7a8fb31874ecb7f53f1d69200bb9262",
"assets/assets/images/logo/main.png": "d265563c72376a2cbbd648e23e16cf49",
"assets/assets/images/logo/buly_tmp.png": "290579a333c4612a4cce9044405d2e65",
"assets/assets/images/logo/Instagram_logo2.png": "b58c6be0d3873422ff6af6955b0377f9",
"assets/assets/images/logo/Facebook%2520logo.svg": "e7ec778088040858ad831997bf3c67c9",
"assets/assets/images/logo/KAKAO%2520logo.png": "6f199988618effe38665f73c426cff99",
"assets/assets/images/logo/KAKAO_logo.png": "6f199988618effe38665f73c426cff99",
"assets/assets/images/logo/Instagram%2520logo.svg": "3c451c27d33cbbaf8401aa796bcd7ec5",
"assets/assets/images/logo/buly.png": "290579a333c4612a4cce9044405d2e65",
"assets/assets/images/logo/Instagram%2520logo2.svg": "dda84c7c4e2a6ca0ba39661a8fc255af",
"assets/assets/images/logo/Instagram_logo.png": "7affe5031b2902376dc8f1c5b09baa5b",
"assets/assets/images/logo/share%2520logo.svg": "0d5477039c575f46f7ef436d305b4f53",
"assets/assets/images/logo/Instagram%2520logo2.png": "b58c6be0d3873422ff6af6955b0377f9",
"assets/assets/images/4.jpg": "64850fd64892bdc241035dc21c94d1db",
"assets/assets/images/5.jpg": "45e4912823f34438a04ce9e9d56b7575",
"assets/assets/images/icon/arrow_circle_forward.svg": "56cbf3f960690c3f739964f04d72f93c",
"assets/assets/images/icon/arrow_circle_backward.svg": "2635aa9c7b366471cb1eda03b8ab9bbd",
"assets/assets/images/flavor/Vanilla.png": "64f85a1f16e6b7f44ce48d6d7e780192",
"assets/assets/images/flavor/Spicy.png": "48f19a5094a48ca3e8ba8169cf90f3b7",
"assets/assets/images/flavor/Amber.png": "49a1888855f175a717bbc04c27103013",
"assets/assets/images/flavor/Woody.png": "6fbc7443b5cbf145e2899834eb6c17be",
"assets/assets/images/flavor/Floral.png": "43744062c4f6e02bf0ff6e4bfc34a4e6",
"assets/assets/images/flavor/Powdery.png": "b05bd99d19a23706d8f822f704bc3119",
"assets/assets/images/flavor/Green.png": "98723a320e55d670e25e0dd06cff28db",
"assets/assets/images/flavor/Sweet.png": "be376033ee6d6dc229e9d42e135b212c",
"assets/assets/images/flavor/Leather.png": "047f00a674b39e371c3222548b071b0f",
"assets/assets/images/flavor/Fruity.png": "609c417496c642e311181a8052160827",
"assets/assets/images/flavor/Herb.png": "da90062a4a0228569a5c51a7e2608984",
"assets/assets/images/flavor/Aromatic.png": "733317169194c81148e7049d812fda9e",
"assets/assets/images/flavor/White_Floral.png": "524792575c06cccf8e7aab3aada3f9fc",
"assets/assets/images/result_Buly/background2.jpg": "0db1789fbbc0a2f5dfbdccd92cc939a6",
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
"assets/assets/images/result_Buly/buly_logo.png": "057c6794409dd0626a943cd5a51be63a",
"assets/assets/images/mood/male/Cool1.jpg": "0cba66687ca3cf0359814f7f542d270e",
"assets/assets/images/mood/male/Chic1.jpg": "ecf2023158507e0ed8fb6d9139044d0e",
"assets/assets/images/mood/male/Unique1.jpg": "e0246b1e15ce4a3f9b7c9b194f387b6b",
"assets/assets/images/mood/male/Warm2.jpg": "225971212c593c8773689515015a70ad",
"assets/assets/images/mood/male/Cool2.jpg": "1df029e704d14a45974fec5d167dc761",
"assets/assets/images/mood/male/Chic2.jpg": "9c49ecf874b85be76918220642954161",
"assets/assets/images/mood/male/Unique2.jpg": "3f23466cb66a37c6223d4e51d4c941bd",
"assets/assets/images/mood/male/Warm1.jpg": "6c669ebcf43e2775a12f42e90a31adc6",
"assets/assets/images/mood/male/Weighty2.jpg": "27b2207fd6fc843ecb2129c8e56b5ff1",
"assets/assets/images/mood/male/Natural1.jpg": "758750b31fa093d6c974dc1c9f5bab61",
"assets/assets/images/mood/male/Luxurious1.jpg": "a2febad29725067c1a01a6b42dcf12ab",
"assets/assets/images/mood/male/Weighty1.jpg": "340123144dfedf4a3350e8f62611c3f2",
"assets/assets/images/mood/male/Natural2.jpg": "9e75d165ea80e2d30a6e846b2c8d8b0c",
"assets/assets/images/mood/male/Luxurious2.jpg": "cd47e1a739b6b140c2dce2635cd6cbe7",
"assets/assets/images/mood/male/Neat1.jpg": "8c95f10f6f67179327198cc65afeb37b",
"assets/assets/images/mood/male/Glamorous2.jpg": "9a03cfad1330ca4292feb2a589d22697",
"assets/assets/images/mood/male/Sexy2.jpg": "d3e89488cf03aef50f22ed0294c840b3",
"assets/assets/images/mood/male/Calm1.jpg": "18524ee924efe466cbc86470087bd0d3",
"assets/assets/images/mood/male/Soft1.jpg": "17c22bc47c54e8c7a572733d9531014a",
"assets/assets/images/mood/male/Glamorous1.jpg": "970ca8e185d18ed371e037b8cc69d6de",
"assets/assets/images/mood/male/Neat2.jpg": "d2508be9bdde1df8ee448ad5e1fc304d",
"assets/assets/images/mood/male/Sexy1.jpg": "961b09e84682466798def29e459a853d",
"assets/assets/images/mood/male/Calm2.jpg": "edbbb1a7a11d346702251b2f49564fdd",
"assets/assets/images/mood/male/Soft2.jpg": "15dc46075ca9eb6fa9b00bd554027436",
"assets/assets/images/mood/male/Romantic1.jpg": "41f0c51c396c1ffc910ee27b03eb2ffc",
"assets/assets/images/mood/male/Romantic2.jpg": "ed2c58a67317e98398369a9a0300452b",
"assets/assets/images/mood/male/Fresh2.jpg": "35ede99762e6151ee90d388159cf4ef2",
"assets/assets/images/mood/male/Confident1.jpg": "776df9ad678f5d296a251a5135a41d3d",
"assets/assets/images/mood/male/Fresh1.jpg": "2d6b3ab9d370e9e3e8d945bf72c5883d",
"assets/assets/images/mood/male/Confident2.jpg": "be4467beaa2cc6605a242c5aa003a419",
"assets/assets/images/mood/male/Heavy1.jpg": "6bb26926a0253fe0519a4378fdbbebad",
"assets/assets/images/mood/male/Lovely2.jpg": "70b45cce86c1ac4a080ffa51c43d45f1",
"assets/assets/images/mood/male/Feminine1.jpg": "7b4389d65239e5ecd6f8f26700799f25",
"assets/assets/images/mood/male/Heavy2.jpg": "94fdd6bba146e968a10eb8c74febfe27",
"assets/assets/images/mood/male/Lovely1.jpg": "07f8530d06186cacee6304ead0a819ed",
"assets/assets/images/mood/male/Feminine2.jpg": "ef08531c32aba6c341914c61a179eb12",
"assets/assets/images/mood/male/Elegant1.jpg": "82b3a9fa3c68cd85b4abea237a8df36e",
"assets/assets/images/mood/male/Urban2.jpg": "4e2bbfb7d436cede166ccfe9f4ffd711",
"assets/assets/images/mood/male/Innocent2.jpg": "008186697b63b6ede472b80156ad8fdf",
"assets/assets/images/mood/male/Elegant2.jpg": "523d230f87611a82dc708968dc3e24c3",
"assets/assets/images/mood/male/Urban1.jpg": "fda6a8e6d05cc0221e31cb2dd538bc2f",
"assets/assets/images/mood/male/Innocent1.jpg": "b8a01311c7e5b7af0ae15b1e2afe7fb5",
"assets/assets/images/mood/male/Comfortable2.jpg": "766b06dbfa0509a5c54e787d6958fb1d",
"assets/assets/images/mood/male/Mature1.jpg": "bcf5b7eec5f7cb67862cc0df65aca0e9",
"assets/assets/images/mood/male/Masculine1.jpg": "08374e02608b1570f53c9d52b7fafe94",
"assets/assets/images/mood/male/Comfortable1.jpg": "3c6e822725dee39dca41044a1fb37a76",
"assets/assets/images/mood/male/Mature2.jpg": "b9803d847a2dc0217fcaaf4f4290a2d2",
"assets/assets/images/mood/male/Masculine2.jpg": "a757f20306d33e537e4789b536c91fb8",
"assets/assets/images/mood/female/Cool1.jpg": "2d42dda633c2dfb2e95170a5b35f4259",
"assets/assets/images/mood/female/Chic1.jpg": "24cffa68717bd75f8c09c9697561dc1f",
"assets/assets/images/mood/female/Unique1.jpg": "3c32d96ebaec322f9e971e71393a2179",
"assets/assets/images/mood/female/Warm2.jpg": "81be98b01924fe569f86bd55fb01e58d",
"assets/assets/images/mood/female/Cool2.jpg": "fb432e5d0e037120dfbab0687e5a0b24",
"assets/assets/images/mood/female/Chic2.jpg": "c38093af69ad0dcb4ecc92a0adf9605d",
"assets/assets/images/mood/female/Unique2.jpg": "44d8f34bde608751dddec2dacae45da2",
"assets/assets/images/mood/female/Warm1.jpg": "473db825ceb248a23114f54d61c1319f",
"assets/assets/images/mood/female/Weighty2.jpg": "a5043eb1e5553f7e8739af909172e5ac",
"assets/assets/images/mood/female/Natural1.jpg": "76424ee7f7212e00b2b02f435ebd144d",
"assets/assets/images/mood/female/Luxurious1.jpg": "94dff39ec515eaf96af2fa293b5f99fa",
"assets/assets/images/mood/female/Weighty1.jpg": "cce130e6332bf76d9538ab51035c2f6e",
"assets/assets/images/mood/female/Natural2.jpg": "145e889fb33b731c7aabae231c188564",
"assets/assets/images/mood/female/Luxurious2.jpg": "f5ee9e0c48989da036267e924a8edcbf",
"assets/assets/images/mood/female/Neat1.jpg": "53f1aa0e79fc8cadf62761b51370e036",
"assets/assets/images/mood/female/Glamorous2.jpg": "1c7c134dd6b033a081a3ccda50adbabd",
"assets/assets/images/mood/female/Sexy2.jpg": "ac33a21537499eee8e164abda9708d03",
"assets/assets/images/mood/female/Calm1.jpg": "f99e5b55725132b3d44b1aa139e2420c",
"assets/assets/images/mood/female/Soft1.jpg": "f6bafc21775298d22a2021e546d14e4e",
"assets/assets/images/mood/female/Glamorous1.jpg": "223a7fef18a4fc521c46ebf1a218ce28",
"assets/assets/images/mood/female/Neat2.jpg": "f799ff684cdffee329d1c9cb28e4f042",
"assets/assets/images/mood/female/Sexy1.jpg": "c9bade572faddb20a0289514dba6f684",
"assets/assets/images/mood/female/Calm2.jpg": "45cabe1ca9efa12cb5fa10338e9abdf2",
"assets/assets/images/mood/female/Soft2.jpg": "cc515f2e1ec070424fc6be9e0871183f",
"assets/assets/images/mood/female/Romantic1.jpg": "67ad1e9557eb2b628e27733ce02987bb",
"assets/assets/images/mood/female/Romantic2.jpg": "171cf8b0f6f33e6636cd1f9228fce8bd",
"assets/assets/images/mood/female/Fresh2.jpg": "f11325b562c912bcbf63fb3f73912edd",
"assets/assets/images/mood/female/Confident1.jpg": "c1b25f8acb2cb63e5ad078152ace8b1b",
"assets/assets/images/mood/female/Fresh1.jpg": "873062929c2981e740c39787dfc70816",
"assets/assets/images/mood/female/Confident2.jpg": "d46ee2e1d2b1c7b642aa8e7364fd0e28",
"assets/assets/images/mood/female/Heavy1.jpg": "74c3b5dfa32137774f83b9656ad79e32",
"assets/assets/images/mood/female/Lovely2.jpg": "4a10155f14af22b08156852ebce9b3d7",
"assets/assets/images/mood/female/Feminine1.jpg": "3638e00f4d8a38a2fe9247751779bd48",
"assets/assets/images/mood/female/Heavy2.jpg": "12bfa607a9fbdeb02d69cb1ffde20e62",
"assets/assets/images/mood/female/Lovely1.jpg": "1dc911b5e838e3377a136bfad31d8258",
"assets/assets/images/mood/female/Feminine2.jpg": "75445508d83d374f41f89b5e095aac19",
"assets/assets/images/mood/female/Elegant1.jpg": "26aef719c70d1b7a637d51ac2a252d09",
"assets/assets/images/mood/female/Urban2.jpg": "db92b8887755115885d2418a2da76b30",
"assets/assets/images/mood/female/Innocent2.jpg": "2b2cc1bc5a5a36966a01b55b7da0b5d0",
"assets/assets/images/mood/female/Elegant2.jpg": "5f70c6f8b57aab03ca0ef719a5a6f5dd",
"assets/assets/images/mood/female/Urban1.jpg": "24e912a1dd5bf69ed2118a53284fc8bc",
"assets/assets/images/mood/female/Innocent1.jpg": "0ddae8139e60dde6425dee8d69703e04",
"assets/assets/images/mood/female/Comfortable2.jpg": "9cc04be8a67bc436d9577dd9386bb741",
"assets/assets/images/mood/female/Mature1.jpg": "e97cfe3dfacdf1d8fc415d41ed014863",
"assets/assets/images/mood/female/Masculine1.jpg": "b9fffaf42a837867306757882e0b572e",
"assets/assets/images/mood/female/Comfortable1.jpg": "2b32b75015de2773a47b94a2bc0e5a3d",
"assets/assets/images/mood/female/Mature2.jpg": "e4d1eb90b026fe39d6a91f0be28e929a",
"assets/assets/images/mood/female/Masculine2.jpg": "3317070693d9b3c7279b6875bb24a7bf",
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
"assets/assets/images/result_page/puration/cover_2.png": "fd498bbfe4a5b204e3a7c811449bbeb2",
"assets/assets/images/result_page/puration/cover_3.png": "c1df9cdadcc99e171fd1a0600c439f9f",
"assets/assets/images/result_page/puration/cover_1.png": "b181f041fd7f12620b525ad3cce44467",
"assets/assets/images/result_page/buly_logo.png": "290579a333c4612a4cce9044405d2e65",
"assets/assets/images/2.jpg": "258a17ad003d74406a071a543dcfc852",
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
"assets/assets/images/3.jpg": "d49a5d99d8702c3ee2c853a62ef3eeca",
"assets/assets/images/page7/iPhone13_Rectangle1621@2x.png": "f065dc02761de3f138b7c917d3adf8bd",
"assets/assets/images/page7/iPhone13_Rectangle1639@2x.png": "c78d110d5fac31077c4bc02a4f1325bf",
"assets/assets/images/page7/iPhone13_Rectangle1620@2x.png": "b5ce33359532358bbab69c2c645aaf46",
"assets/assets/images/page7/iPhone13_Rectangle1624@2x.png": "7ab119bf350e13258bfb4a40c2afc167",
"assets/assets/images/1.jpg": "f1754a5f4248c62e7ad9aa16363c2f29",
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
"assets/assets/images/result_Jovoy/card/Gardez_Moi.jpg": "9a376c4cd0c69488eae3fc23a04c624e",
"assets/assets/images/result_Jovoy/card/Remember_Me.jpg": "1e31e44052d1f62b4ec34cf546e81760",
"assets/assets/images/result_Jovoy/card/Psychedelic.jpg": "53df4aa5b0e68e3801afd6efcd81a5e3",
"assets/assets/images/result_Jovoy/card/21_Conduit_St.jpg": "7a844920ceba2bd5eb66a7f6fb188d95",
"assets/assets/images/result_Jovoy/card/Ambre.jpg": "caff48ec661f743e6838a5c23a2cbabe",
"assets/assets/images/result_Jovoy/card/Guerre.jpg": "7acf6c103d5d4027dffa507b3169b7eb",
"assets/assets/images/result_Jovoy/card/Touche_Finale.jpg": "a315df08099d3286fae4c35f350acc13",
"assets/assets/images/result_Jovoy/card/Connaissance.jpg": "7b39b70abf1d48f18436f2f17c44e4d4",
"assets/assets/images/result_Jovoy/add_product/Danzatoria.png": "e99bc6b5ea546e418c8fe44b9e4b9abb",
"assets/assets/images/result_Jovoy/add_product/LatinLover.png": "d8fda494ee43185bce925e83c00c18fd",
"assets/assets/images/result_Jovoy/add_product/Barcelona.png": "51fb78e9d0d5ba219e49adab64bff06e",
"assets/assets/images/result_Jovoy/add_product/Discovery.png": "cb29750902e6a7a040135a03530eb0c3",
"assets/assets/images/result_Jovoy/add_product/mini.svg": "551927e8525ab25f33816589914fed5b",
"assets/assets/images/result_Jovoy/add_product/discovery.svg": "efdb90dd01e9b6d9c7116b762fef6fb8",
"assets/assets/images/result_Jovoy/Logo_jovoy.png": "a9070aa95eba96301ed6fe711c5ed2f3",
"assets/assets/images/result_Jovoy/background.png": "d21e2565a0d4bf57df0080d574091672",
"assets/assets/images/result_Jovoy/bottle/Gardez_Moi.png": "aa9a6a18d6473df3d68d94824d1e0f7c",
"assets/assets/images/result_Jovoy/bottle/Remember_Me.png": "211d628bf4c184c92fc12cec5b27ef2c",
"assets/assets/images/result_Jovoy/bottle/Psychedelic.png": "6da71738f548283a0d4060c639b59369",
"assets/assets/images/result_Jovoy/bottle/21_Conduit_St.png": "bef181216ad7198890594374bf88678c",
"assets/assets/images/result_Jovoy/bottle/Ambre.png": "8ab46944f033489ebd841e5251ab6ee7",
"assets/assets/images/result_Jovoy/bottle/Guerre.png": "07a3e5f4fe2d6a862e4b4ff8e7d632b4",
"assets/assets/images/result_Jovoy/bottle/Touche_Finale.png": "190830a3a22a76e9018e9ff33f9189aa",
"assets/assets/images/result_Jovoy/bottle/Connaissance.png": "76b5b19cc3263004c6451d6e81d4b735",
"assets/assets/images/result_Jovoy/cover/male/Gardez_Moi.png": "08b0a972ea25325fae0b861685c9aa1c",
"assets/assets/images/result_Jovoy/cover/male/Remember_Me.png": "294eec12a321b070187e86ba46cdf654",
"assets/assets/images/result_Jovoy/cover/male/Psychedelic.png": "ee94cfacb2a367bede9adfbb2274186e",
"assets/assets/images/result_Jovoy/cover/male/21_Conduit_St.png": "0a6e87209d75d33de852a9b13f58871a",
"assets/assets/images/result_Jovoy/cover/male/Ambre.png": "fec5756556e9cfaf8705198fb3201747",
"assets/assets/images/result_Jovoy/cover/male/Guerre.png": "ba88f95a7f25003c91a858c960dc6143",
"assets/assets/images/result_Jovoy/cover/male/Touche_Finale.png": "15e3164826db233e203b507c8a7835c5",
"assets/assets/images/result_Jovoy/cover/male/Connaissance.png": "adf6deab1a781d2a6ff5b4ebcdd8fa7f",
"assets/assets/images/result_Jovoy/cover/female/Gardez_Moi.png": "0ccd4b44cbc9d331965b5af42584d78c",
"assets/assets/images/result_Jovoy/cover/female/Remember_Me.png": "8b1cc4ed252f1a779649f0ca70a50bec",
"assets/assets/images/result_Jovoy/cover/female/Psychedelic.png": "1e978a13cf9b6ea2f513085a9ae2facc",
"assets/assets/images/result_Jovoy/cover/female/21_Conduit_St.png": "74d36b83cc6edf2cc6e2896dc75902ad",
"assets/assets/images/result_Jovoy/cover/female/Ambre.png": "ca93c39fb595ec486f83575fb74ae5ba",
"assets/assets/images/result_Jovoy/cover/female/Guerre.png": "ec9767eb3fd8f04a0b141e9836eceb10",
"assets/assets/images/result_Jovoy/cover/female/Touche_Finale.png": "627d5f90c1ac68ffe75f153eb43c035e",
"assets/assets/images/result_Jovoy/cover/female/Connaissance.png": "d4423f1a17e9098e646303c5f3d8d1fb",
"assets/assets/fonts/Lora-Italic.ttf": "fe816b372d76560f16a295da2e98b198",
"assets/assets/fonts/GyeonggiTitle_Light.ttf": "5ed9da4c3084e16be8431b123f2cacdc",
"assets/assets/fonts/NanumSquareOTF_acEB.otf": "89cc297ec4aa9e9870abba7728680c1d",
"assets/assets/fonts/Lora-Bold.ttf": "04a54a65953cf0c6f9c2170ee70ee8b7",
"assets/assets/fonts/NanumSquareL.otf": "c40969eb31e6b4fde6545d9ceb518288",
"assets/assets/fonts/NanumSquareEB.otf": "702510f5ef52748fed5abad03e0946d3",
"assets/assets/fonts/GyeonggiBatang_Bold.ttf": "2d57e2b329906223492227a865ed38d5",
"assets/assets/fonts/NanumSquareOTF_acL.otf": "884752b551d5b0c63e5fb52085414cb4",
"assets/assets/fonts/GyeonggiBatang_Regular.ttf": "417c45334598bb95a82e5393ea6a9d65",
"assets/assets/fonts/GyeonggiTitle_Bold.ttf": "b1d868613960158477a873f856f74b77",
"assets/assets/fonts/AppleSDGothicNeoSB.ttf": "8683b84b58121f0dc4070ed892d02614",
"assets/assets/fonts/NanumSquareR.otf": "94caf6ad65d567bf536b3dfc12d1ae81",
"assets/assets/fonts/NanumSquareOTF_acR.otf": "51b78e8c049320a59c81224b1a9355b4",
"assets/assets/fonts/NanumSquareOTF_acB.otf": "14dcd062d37157fb16b0a980910429bb",
"assets/assets/fonts/NanumSquareB.otf": "d7c4bb6cc69192432eea2124eac30fdd",
"assets/assets/fonts/Lora-Regular.ttf": "5fbbc2dd9545c49556bbf4323e73ffe0",
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
