'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d8951f8942f3ae19e6043c8b2a510dae",
"index.html": "6dc68051d860b5d52622a62ab9d26b78",
"/": "6dc68051d860b5d52622a62ab9d26b78",
"main.dart.js": "8a45851a8731d10cdf8020e1549eae3f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ae6a8df1eadca5f571f4850ff6bc64d4",
".git/config": "bfb46ebe5661370f5ec7f841b654561a",
".git/objects/95/7ec05822947e841e6867af9b852cccfc7fc701": "120bdad5df66e70042fe10e498db2fd0",
".git/objects/59/1007e0959973408af4c79523ac1f82582dfc33": "27b9fe2b0516c5addf41ce60f01b0e53",
".git/objects/59/63cbcb9bb6084fd2d4d7f95c87d66e73a00faf": "7bab2868a3ac57f6a806cd15cd11595c",
".git/objects/66/8327f1cacfc73bb8b8b3534a54956257d2d7b3": "131ce008b742ea781bf2ab1177d95180",
".git/objects/50/dcb5491997f62f0baca78ac8151c0f1ad4a3d2": "95674d39f49baa553042a33db5726abe",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/fa5947303f2d7417396d96d164a32f7ca2f084": "577899668a45521d960403dd03b5ca8b",
".git/objects/6a/0fcb4d6947f6d45983404cda926b6b5a7a2a59": "619e4009281d998d06a72afb4d543c39",
".git/objects/32/9d4e09a49ed403aaf2f4e7afbbb47550a2600d": "ebd384708b7a2df87daae1013b6850b1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/6a6e64f49a9e2d6eab86a7514a93f8ff771d10": "3488c182fcdc5b0a304746b739c29621",
".git/objects/69/aef9bcdad1b8367bfff23270b097753774ef98": "6d5adb979befb67461746dfe3dab0b1f",
".git/objects/56/9a2a63bc04e80f3c7490c1a420a06bcbb27d17": "3d53a4220a64430837cc73d3d0a1e90e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/7a9f00139ec6e931e4f1785c0cd47bd3f57010": "814abdc35ba40500aa1630007c3e7649",
".git/objects/3d/80dca4c594d5212221ff715b08b818145e1b1c": "c89b835e76cc806979fea7ae105902bf",
".git/objects/58/079fedf2e13ccb381de338d784c558c345ebb9": "b217920c28e197ca6cae72d72f720c61",
".git/objects/67/18a85c9b2c0b7c45a7aa7a905af5d96650678d": "03bc17141051c50f316f8a4129504a55",
".git/objects/0b/dd9f4b692bdb99ca94d73b6cdbd8947ae4b45f": "ac3c68bfd64abed977f24b987027372b",
".git/objects/0b/ecf2e3609d796338a812d2b30ce00203567e46": "c4db415569c0cc00b69981e5829f5cb7",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/d9ab336af70384476fe7fc94af9082127a1826": "fb892433f932c6b9747584adc1ca1d36",
".git/objects/94/5e59efcad851a09b9e3854657e3c4c6e47bb1f": "05045ab9ef6511ca8e79d277a58bbbf5",
".git/objects/94/2fff63379a1098e993a5dde32a4f265d7b92cf": "a5b05934b4afb8663a8afb39ff041007",
".git/objects/0e/12478927e3f595363b60e8fcf2c1f2118bdbb8": "c53fb9ec665d30aeb63c8ad3312362e0",
".git/objects/60/19e25c0543ba682745c3ceaa0854507cb828cd": "d6c470798239ad2e8e8d0a11123fd53e",
".git/objects/34/710e79c06f89421d4e535489ac8cd1f7de7e19": "587383b8e972b00bcc52b6f29bf14754",
".git/objects/5a/42202b7cad9b07ca3ca568fd48e1448ec50049": "92da2a18ba70d9d5de4bbbbec08aad91",
".git/objects/5f/1cc24fa9ac87dc51491d2415078c5bb6e726ce": "1a515c86eb7bbe0c455e47ecf9d65f20",
".git/objects/9c/9573209dac4a967138256ca8acbdc40ed57b6f": "ad41f0f571928a0f4d343714e4ca3c31",
".git/objects/a4/0ae5ea761f984826202bc66848a45cd475bbef": "82fd7ddb8ac6cb1fbc78eb1f884eaa4b",
".git/objects/a4/ef21b3c167dcfb9c76bbe8813062133f3849ca": "fe15f633de66f44b46c072238817a5d6",
".git/objects/a3/b10531dd2c56eae2924adf1643a2f17b611614": "dfe7a8fabce3d7540f28cac5020331d0",
".git/objects/b5/c0e11208d9b8238b357049684152cac8c481c8": "856a077022f57a68905661364070439b",
".git/objects/b5/1d40ca8e5e252b82bd8d64ad7453b1d7a15d6f": "3adfb90ce3a2b27590d220c1a71bd76e",
".git/objects/b5/0859203607f396009480e7c4f37f1270e9bfa3": "2763f57558822148c2ddaa75d17638ea",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/b66389f6a392efb95a11b47cd11978dcc3c0b0": "f2bb30608ec6ba8bf80ef980f3c7797d",
".git/objects/ad/a5d158542dd0239c4984873be55e90cc8a3ece": "14864ca21b747581b8185ff5e6414473",
".git/objects/bb/372837c6affe7aad9c8190593c2f8f421201ce": "89a9f968c9446a05f7df21adf52c1af5",
".git/objects/bb/1a05eafc89c1370841f6d422b9a22be57c8fa1": "53f9aa1f9522de6ad6d7f16acf7d9e3b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/a58aa195444666a707703f89f10a25b8164b7b": "32bc5ad028e30bc88a44bbfe156d353e",
".git/objects/d0/7fb2cff8dd57fda2752515fc2706ade999becc": "9b7aab88132741fbed577f7b6c233437",
".git/objects/d0/ee238b37388e01eb364a7724a92bf18182e140": "801e9aed84be477ba3cd376fe4ce5a16",
".git/objects/be/da0f5fd997a1f27527b44353e9c718ce045426": "13daee1c193cfb8fdcbd7594979148ac",
".git/objects/be/d8bde31e9f345fe49c338367ebaced10cda1ee": "fe07c7406fca0cda7398d56e91026f7d",
".git/objects/b3/b226dac3eba2377cfc12bbc994d1412af2ff70": "f89195e071302e51fa3f1496e9d4649a",
".git/objects/b3/8d794752b6ff74563cc2d5d13c8f15987dae6c": "07291fd9fe50c0393a8d24a6a2f0bd38",
".git/objects/b4/9ceb40ca9bd4190add84a35f343f382dab81ca": "bb1ee27d45462da05e479c57e3594b60",
".git/objects/d6/3d29eec76edc4e4e3325d50d6376b2f99044ba": "0450685ed53c16bb9fa049246788b82d",
".git/objects/d6/abe0e60fded715eec62d4f890854da771018f1": "faad834a0e469fa88ee3ef738c5f9c8a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/17c4b6ccdb4c961674879ca8b931b41480d47e": "bf63c31a47ce2efdcfd92616e228e3f4",
".git/objects/d8/aadd7acf6148a372efecdce10f102bb8fea6d0": "b8d8f2c50f6360ff7eed2759aecb33b7",
".git/objects/ab/40f1058a0ac8745df3d8bf69ef3a81e3aadbd0": "b1cb311524fffa28eb151cb497d86e95",
".git/objects/ab/9ae730ccb0b5af1b8778535198014a1a357165": "f0d647a066d81e7c8ae1182ec00d5493",
".git/objects/e5/2435d4528bc04603706bec468659a77c34738e": "f4876654ef435e5083290ddcfb3102cf",
".git/objects/f4/58ff9fbbf1c5d54681d5ccdd2d8f25d7a4f3ed": "d17b7fb4d4f6e568cc32af20ad9566c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/69a2b95f270ae9ac3e181b0b8dba4183c1a43a": "0e8feb058fc2f5a8f0c0856dac2a4e70",
".git/objects/fc/960a6e1171f8d8731a35e546c1d43da2118030": "27cd549f107adddcac9f845b7c2e329c",
".git/objects/f2/9370931197255e7dfe8f4d0816f64c874cc99b": "2e4ec064d7ac6aef33738a2be5a390f5",
".git/objects/f5/923d71903af672627ab791f835fa9b8018bf4c": "a12e9ba634445aa506801361abaa06af",
".git/objects/cf/4f67961acacd576b3e6ee9d0f923575b39b802": "657e572c6e69d03f10204e990a20cd6b",
".git/objects/ca/2dbbf7f5c5c7dd5cf80af2efb54215d2f2adf1": "c2d4f26409066900f86375113e5616da",
".git/objects/e4/f76cf012643313a2bb5c19212680a4a5ccc435": "ac37abe9484303e09c583fa22f232776",
".git/objects/fe/7db4c9be70994724e4aa54a4be7ba1f91ae790": "882dd9a4c75c801abc39998050edc3f0",
".git/objects/c8/e05b3bfd346a582916a1762c959863b906b37f": "fa2a9a1f80a55968921c77cfb54b43f6",
".git/objects/fb/6cd5bc981683cabc88328c04bde245da365c9e": "37c1611b7f525a5aa3d40cf63669ac80",
".git/objects/c6/127f666bdeead5096f8364cc588c3e67560eab": "884fd9d2e385d05e404bbd65f1c75d43",
".git/objects/c6/a9396cc19ee39456b8feb9317f9feac9a57ad9": "8745c709673b49dd8aea3db14fdfbc49",
".git/objects/ec/d065c71dc5196655b609c2ba629a359d9ee125": "9db9e61fd0d3b360bc44646fd2fb91c0",
".git/objects/20/fd5125e311ead42c238b7a71e5b69b04e7ed92": "2f310f97a1c9b1c313e3df5249699660",
".git/objects/18/4439eaaf287900760ba9caa88047e9f3c2f05b": "b16d340a1c8c15c471da8ff97fa58eb8",
".git/objects/4b/f7d810cdac57b09ff880c4714ff44ba0642969": "c5189dadf7651193c751e60d0049f3d5",
".git/objects/4b/3ef792755675cff324f03efe45dd2d562ee61f": "511061c92dfd5e76656536a8c5256079",
".git/objects/11/c4329b6be027264464f2afb928a88ba971366f": "7248847acf523bc836ffbd37b80508de",
".git/objects/11/8f749d4a9931d44c78704843764b3ae545afab": "f3a7a877925036ab40ad265bede281b9",
".git/objects/7c/4169ce9a8883dbe947652fe8b6a6676f5e4ed4": "b8aaed829194f69eb09363fb375daa18",
".git/objects/7c/0c56e0cec89c08e4a639da9c2b1f2dbf550aea": "4e4c359870252d4c3ba28e815fa55c37",
".git/objects/16/2e5dfc0a43b1182977e9f626a535aa839f5846": "4bc77e9971cf8132fe4ff64c591df7fe",
".git/objects/16/e5aa8587603be5e2b58d21a424e33494194ed8": "0e9b79630a780dd51b6259eac8158690",
".git/objects/89/1071a5268cb30b20c6cf686cb1b710d20e3843": "050385e675714d959266c45d6099e1b7",
".git/objects/73/5ec3ae73a0478749d57b9faeba709f54e151c0": "6961663ed959e4426ff35919e9ac4e7d",
".git/objects/74/fbba86ca258effaae25c904fb5ab08407ec6a5": "5e9e72c6743d23be06820732c9eea5ba",
".git/objects/28/118e30f3c85e8f136994679de0680101b6e25d": "dd7ca1ca486a0fb61d2642a066f8227f",
".git/objects/17/f1f826270e87315486c743bf97e2ca092d6cdf": "acd1dd75a0b21f004185fc3fad6439c8",
".git/objects/8a/bbbf4dc710ccf5b8f54994d74db9307ef0d923": "1f8447fa27a8958c5e10054d5c45d77e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c6905a664e22f78ab1fc2a9e9614c159af75cb": "854df23ed4e0a89cb66dc33e2e1a0ea3",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/00386a5989fbd99f7f52801f40b6786eb2100f": "a290a20fdc1a8cf69ba697edcaddaac3",
".git/objects/4d/edc344ad4ff742e60968ec1b2f0c2d5b93ed9a": "6a0b37ace7bd2afa3e179506a5de0fbb",
".git/objects/4d/c1f0fd0b485ea39a8d71a1654083c2ef7739be": "6d65e3b9493c394bc1e574291026223a",
".git/objects/4d/a0ad755b988d011d63204fc2a6898e1f5a0644": "f6741594541ac45118a771c659c44904",
".git/objects/72/4ce7ad95f53b0b1ed2a3033be6f95ae9393596": "67e9cc38ef7cbd8b72b41dbe0a2450f5",
".git/objects/72/64350ba12ef7e12074d71860eab1d4bfd61d99": "06453615bd3fabe7c7266e803e83f513",
".git/objects/43/1391d0783fd8c25071a78b8d9eedb6885fb1c4": "2e349f0ae3a4b27d74946d649711a6a9",
".git/objects/88/5cf8366b5837bbfc55d41321730c3aea7dff68": "a8916a0ccd6d52f65db2f88a918703fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/18011f81abbeeac1c8cd77921a4ad3ab64a032": "f6b66c0a99734be88875b383b5aed832",
".git/objects/6b/00b87125e9ac0389239e5a8247679b45d6d8df": "215670447ef0fd99b2389b20559786ff",
".git/objects/07/fc7df3c0c79736230fb9e1f179dec8482b6872": "40fc7ea981423316f3d90f414d9adea7",
".git/objects/00/fcddd797c530f04d865b7dcf35e0bcffc59258": "d7db268eaa7b36ad34f9183108dec75a",
".git/objects/00/ba434eea6b187bd9ebc5d6fa662704ce57ef75": "16e9b0c626e352db252891febf1d325a",
".git/objects/00/8984de207edec5e15ddbd4e4aa871fcae7d905": "e16386a229c1f329842bb76b3cbf9f38",
".git/objects/00/bf58431467d7c27043230091ee5be454bf86b3": "48d1905bbf014c1f0b03224c7c2f9d33",
".git/objects/36/f25fe604d1dd36fe10bad017bb5e6b21386a6a": "7c72d3f6ebd484760b09c549ff4f626c",
".git/objects/5d/ecbd124129e981151f873f4bfe60fb4526ef5e": "d36acb70ac578f50d668907eac06f2df",
".git/objects/31/ba05e357a0b8a50655f7cb6d06b41aed03cbaf": "8c150a79fb524760d75b342f32b5c036",
".git/objects/65/bb33e736279c5f12fb17892a8c22f78e260815": "ab493478d5be65b91b810b40154b271e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/044710a3b8b161cd8cea992500e68c63d001e7": "a00c0f8d3ca54b6ff52ae2f7cf1e01cd",
".git/objects/98/c97ae5b0649034b3c856e671d551bca79251bc": "413be845e636f9f8d26de5a7b460e1b8",
".git/objects/37/de700fb6cfb23db1d972f17a7c7012c0fc6497": "1ec0c5d9a4900d443ad0dab84f29211d",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/7aaa4580a82306a8e69be0167ffbd9a7352ff9": "c247b9b2cc4975b11fe1712d845796b1",
".git/objects/06/f1e33e07b5133e5a0c7286a45e5b57f75fc1a3": "4a1cdca61ae2ac1353f53b9da0b7328d",
".git/objects/06/6bd2eecf4bd77bbc26a62f157b15cee854870a": "a9a15a0003e96a2b93614cb4e8b1f927",
".git/objects/99/a5fb784a5b8e6d6d3830b97130005e9f48a253": "69ff47f00c9eadef824fdb6cf5d83329",
".git/objects/52/306de5b24103eb0719b7380cf5da919d669ce8": "904874ff71c72a815cc0f36ab817121d",
".git/objects/0a/c7ae7af7414c32a1509ab388000ef938ca2b0a": "b7805ac9e6b943b1639c5a8d6fba41e4",
".git/objects/0a/828daf5f49ae40a5f0abed1ee99e419175be68": "4d259e2fef40bf73a2571a21671a2df4",
".git/objects/90/551b16cd1dd26494bdb306307b15797b2b07ff": "29a6d7e8c928761933944c1e60999375",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/99aa55878888c1b84fa5b20b22f74f36a01ed1": "b650fbf9e9ebf1682bc0b1e83a9e7670",
".git/objects/a0/79ebdc830e4bacca7a5db4b385f375d24ce466": "ebc889d0f53dfa5108a314ff94105776",
".git/objects/a7/45bfaca65bd430019e4f894bf7b73b0d6b40e6": "21787a245d90932fc03d9ffc983f2c93",
".git/objects/b8/1b04f8e95270b074a9cc75da61818942d6e8a3": "bcc2cda0afef83e492037d9d9343359a",
".git/objects/dd/2e33f2a42f636541ba1e5f26ea780b7d4550f8": "14dce1b062ed8d2adba36e5eecd57e0b",
".git/objects/dc/0b330e5afefa10197932ad22a6782db323162a": "fa5872298ffd34878d68b104f32ee687",
".git/objects/dc/b2a9a014e77f1759ef393ab54edc0268ff15d3": "2ece83a1c4f70399e5447f84ec33941f",
".git/objects/dc/7e1d83e60f79225b5ea8fa7eef015e6e80b212": "86ce31224ff54548faa218b5a6c7fba3",
".git/objects/b6/97159fb27bb2e196da8fc60dfb31d115fc12e8": "f3cbe9dbc210a4864a9ae4cb96675809",
".git/objects/a9/98121c789ae50a86fee24ebafc762846fc0426": "d8345dfb55f0f421172616bda99e068d",
".git/objects/d5/267414ac45706b8fbe3b7e2b9bc1647708852b": "23b46629531df45bcbdde794666aa2e1",
".git/objects/d5/7c8c17f4057cc39ab580212378c67c843946f4": "a2da24f8689d2d4b4ca60d648748c5f5",
".git/objects/aa/b05b3f788db6d2b26700f26522c78e39f238e6": "f21d234ba346c430666608bf330382f5",
".git/objects/af/b6e804ed0b02dfa046d3e1d4ecf429dc4a6c9a": "0a23c400ff52424174f7fd4e73b1395e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/76e75340e850e8fd080d2b4b68a0571fa038b9": "c1b47a4cf0b781713a8ee82d235e9db3",
".git/objects/ea/2714c0be3bdfbc612407ae41725a431030d3c3": "9236358b4cbca2a9f2a7a09a56f7f60f",
".git/objects/cd/968501a93a5ab8d2f3e36d78cfb738dedabd93": "2f5afdec15c5cf3e2049b6e2f5c27160",
".git/objects/cd/92a89b2dd8ab43f75c21f05f37e15497d43de9": "bc4c4c40e97c0916f0adde5519119f81",
".git/objects/cd/f6d5170d754ea76d4bc76214c1e9d758d878ec": "f3991b0a23ce20a6c9478908928ac9fe",
".git/objects/cc/13542262ab79bce9393513ddf43dd185ddc602": "e5dfc7677bb272df7cc43a720973ee46",
".git/objects/f9/83067b2296a97073586252f219ccead1e70aa1": "d537d5d3205a94fe6b111107a57b5566",
".git/objects/f0/53b012112a7aee74e96cab640cd8045911e8ed": "74ae1c02eb9cd91ec4455cf58506d7de",
".git/objects/c5/95b416f9ab171ce9ff914cd4d67d067dde9a00": "4cdb2e375674d91a71c33abc3eb2a9d7",
".git/objects/c2/7d48890b1057ea0c378e581e9da9ffdfd392a9": "c950439a99315dfe0e619b46080c3e34",
".git/objects/f6/3164e2b413134a60f7780708239f97360a2f1c": "3c36d19b8adffaae69f63f181d824a75",
".git/objects/f1/9f52054a7206ade257c56625d838a300cedd5d": "2b72ed4d2c9d6417c8561dc08bf754d5",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/f28838e7de0910844b4740163eca63d4578807": "e9339f640ff798ba2c60c3f6f8ac6d8e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/725097c4747fa5447f2f5aff47f94869aaa654": "23ccd4bd7cc4d7a7f938ca0c38090632",
".git/objects/79/ecd2ec9662ee97c343672a5359e039d410cf01": "b3e786958f085bcb888d814b7352525b",
".git/objects/41/91fffb24cecee2f320f9ab115e4b921c5758a6": "63db1211fb1e28c24bce23f422edef28",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/819f7e325d5dfa4ccb6a47b74effa424ff8e63": "115bacde514b062ef798adef48e64a22",
".git/objects/84/4e174341f6fd81d504ad81369dbc1703c53da1": "8b89319c75238521a3558e064ddacee0",
".git/objects/4f/df9480bd00dfb2a0de4b3612efb42d93236c5e": "6aeec28e3544815b6e283beb30d49ff7",
".git/objects/85/5a317ec88b0590b6131eb45f240b590e5c770d": "0e05d43b80d4ee8836ebdecca17bf0c9",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/ba45c48a80e2b9db5a0b2eed9385f6bb23a70c": "966232d951c7af539a02d7298f017bb4",
".git/objects/49/6d4699bb92621e046abf5ea9ab92044be8a9be": "123f5c7455a432724ef1143d1b76746b",
".git/objects/2e/3ee1399607ad077961f7b2208fa8d9aafb9f37": "921afde9f197024b5078646014a74e39",
".git/objects/2b/e89652b96192d68e5d2b696abac5fbfa293dcb": "d02a72a8a2a29a566ae650a3a2f2afa5",
".git/objects/2b/241c0f14e62a2d969e4ca972fee32c1fd97400": "79171a037eaf08357b841d6f27cf6653",
".git/objects/2b/0f8a471d768311fbd99db6d941b7df5884c427": "d4ed474b021066125a5c0dd0c930f1d5",
".git/objects/2b/2c0def3eb76d92fdd750c887840d549a693c63": "cfdc6b9418747cfd3f6c92fb2e55a98c",
".git/objects/47/b77043e2cb913f3aaa61576678bb0379635ed8": "ffecc908f7009167f85dadb345ce4b65",
".git/objects/8b/12eb8a4cca2315c3bfeef9fce0f7c8380f6fc4": "3f525c08f4e860924187aba18c7c1ae8",
".git/objects/13/d3cd3732903c3af78452eb860e81a49e7772c4": "095d249e196991344f99d875c0254a6b",
".git/objects/14/dd461463de175ce9838a12b09a4df1105760cb": "05875440f5147d419de275c00028d4e0",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/9c389945dadc3532795cd9718316eaf5911a39": "64a67d6513ef595586416b66e74612a9",
".git/objects/25/74fb0cd66faf0da0ffeaaee8f6c937f8332582": "07518b54df88d299507ac6ae85cdc28b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "35334c6f4d40581ca2c2b22ce370da09",
".git/logs/refs/heads/master": "35334c6f4d40581ca2c2b22ce370da09",
".git/logs/refs/remotes/origin/master": "96fbb3702cbcf2f0d25bc738ce04e064",
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
".git/refs/heads/master": "00cc3f1e25af06d2d6ec824be73d5e3e",
".git/refs/remotes/origin/master": "00cc3f1e25af06d2d6ec824be73d5e3e",
".git/index": "0ad435194f01a9a63e23cddc806c134d",
".git/COMMIT_EDITMSG": "2205e48de5f93c784733ffcca841d2b5",
"assets/AssetManifest.json": "84f49ee6d3351b7c0c3fcd49863680ef",
"assets/NOTICES": "2d6d2b8250dadb16a9b6f89d90f5b735",
"assets/FontManifest.json": "6b40e4511978ddd52da67e7174cdad62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "353916a3a67180dd94962f2017ed8f06",
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
"assets/assets/images/page4/Rectangle%25201628.png": "7072b921c736aca65a569abf75f8e1b0",
"assets/assets/images/page4/Rectangle%25201629.png": "c9cd249e123c40804f3ed65dacee8943",
"assets/assets/images/page4/Rectangle%25201627.png": "165594af1068b4b803d355ed38baa308",
"assets/assets/images/page4/Rectangle%25201626.png": "e0d53ec6c1e50846c738cf6835e5b5bc",
"assets/assets/images/page4/Rectangle%25201630.png": "2a8cd1cb734511492271b240076e9e88",
"assets/assets/images/page4/Rectangle%25201631.png": "4ebc7376320efb0f796014beeecd74dd",
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
"assets/assets/images/result_page/Rectangle%25201712@2x.png": "a2547e242b7c89f1c39fc87438ba256e",
"assets/assets/images/result_page/Ellipse%252063@2x.png": "23fdf528928e3ca27bbf59bb3b340b43",
"assets/assets/images/result_page/bodylotion.png": "e4b49be2035e8bb6353226aa82d3a63a",
"assets/assets/images/result_page/Rectangle%25201719@2x.png": "02c1e2b535ada2e7da28880302accad7",
"assets/assets/images/result_page/Lichen.png": "ee76bb106a56af4287d097b5b0aadb53",
"assets/assets/images/result_page/buly_logo.png": "290579a333c4612a4cce9044405d2e65",
"assets/assets/images/page8/iPhone%252013%2520_Rectangle%25201624@2x.png": "9bf9a825776e958b26af97118183e974",
"assets/assets/images/page8/iPhone13_Rectangle1621@2x.png": "e393ac52cc8ddf8df4aace4677850103",
"assets/assets/images/page8/iPhone13_Rectangle1691@2x.png": "2d31a9c0e55e97938710b2c0d3f70e12",
"assets/assets/images/page8/iPhone%252013%2520_Rectangle%25201620@2x.png": "673a1035a81efc9cf303112448b3c0ff",
"assets/assets/images/page8/iPhone13_Rectangle1639@2x.png": "84f83a5d5611acd7ec08e7f0b309c81e",
"assets/assets/images/page8/iPhone13_Rectangle1693@2x.png": "53a8e4f3152aafc7e304fab46ac6bc1d",
"assets/assets/images/page8/iPhone%252013%2520_Rectangle%25201693@2x.png": "53a8e4f3152aafc7e304fab46ac6bc1d",
"assets/assets/images/page8/iPhone%252013%2520_Rectangle%25201639@2x.png": "84f83a5d5611acd7ec08e7f0b309c81e",
"assets/assets/images/page8/iPhone13_Rectangle1620@2x.png": "673a1035a81efc9cf303112448b3c0ff",
"assets/assets/images/page8/iPhone%252013%2520_Rectangle%25201691@2x.png": "2d31a9c0e55e97938710b2c0d3f70e12",
"assets/assets/images/page8/iPhone13_Rectangle1624@2x.png": "9bf9a825776e958b26af97118183e974",
"assets/assets/images/page8/iPhone%252013%2520_Rectangle%25201621@2x.png": "e393ac52cc8ddf8df4aace4677850103",
"assets/assets/images/page6/iPhone13_Rectangle1623@2x.png": "875d8ac6f868f1af6b2a2dc8c8dc4f56",
"assets/assets/images/page6/iPhone%252013%2520_Rectangle%25201624@2x.png": "21f6edd94631ca2814c9a3b9c2bc6145",
"assets/assets/images/page6/iPhone13_Rectangle1621@2x.png": "38bb559fe76246e40639052cc93d2d62",
"assets/assets/images/page6/iPhone%252013%2520_Rectangle%25201620@2x.png": "0ab0b122b89b82b2e1e50d7f8317690e",
"assets/assets/images/page6/iPhone13_Rectangle1625@2x.png": "5afd366207f816b271fcb65b0728aca3",
"assets/assets/images/page6/iPhone%252013%2520_Rectangle%25201622@2x.png": "b7c2d2d9f4f21eab3de2a178b9acdd09",
"assets/assets/images/page6/iPhone13_Rectangle1622@2x.png": "b7c2d2d9f4f21eab3de2a178b9acdd09",
"assets/assets/images/page6/iPhone13_Rectangle1620@2x.png": "0ab0b122b89b82b2e1e50d7f8317690e",
"assets/assets/images/page6/iPhone%252013%2520_Rectangle%25201625@2x.png": "5afd366207f816b271fcb65b0728aca3",
"assets/assets/images/page6/iPhone13_Rectangle1624@2x.png": "21f6edd94631ca2814c9a3b9c2bc6145",
"assets/assets/images/page6/iPhone%252013%2520_Rectangle%25201621@2x.png": "38bb559fe76246e40639052cc93d2d62",
"assets/assets/images/page6/iPhone%252013%2520_Rectangle%25201623@2x.png": "875d8ac6f868f1af6b2a2dc8c8dc4f56",
"assets/assets/images/page7/iPhone%252013%2520_Rectangle%25201624@2x.png": "7ab119bf350e13258bfb4a40c2afc167",
"assets/assets/images/page7/iPhone13_Rectangle1621@2x.png": "f065dc02761de3f138b7c917d3adf8bd",
"assets/assets/images/page7/iPhone%252013%2520_Rectangle%25201620@2x.png": "b5ce33359532358bbab69c2c645aaf46",
"assets/assets/images/page7/iPhone13_Rectangle1639@2x.png": "c78d110d5fac31077c4bc02a4f1325bf",
"assets/assets/images/page7/iPhone%252013%2520_Rectangle%25201639@2x.png": "c78d110d5fac31077c4bc02a4f1325bf",
"assets/assets/images/page7/iPhone13_Rectangle1620@2x.png": "b5ce33359532358bbab69c2c645aaf46",
"assets/assets/images/page7/iPhone13_Rectangle1624@2x.png": "7ab119bf350e13258bfb4a40c2afc167",
"assets/assets/images/page7/iPhone%252013%2520_Rectangle%25201621@2x.png": "f065dc02761de3f138b7c917d3adf8bd",
"assets/assets/images/page0/Rectangle%25201712.png": "018c9f737c73f1be124dd8a0a057f6a5",
"assets/assets/images/page0/X.svg": "f48da3173265ea78f815359ea16802bc",
"assets/assets/images/page0/Rectangle%25201712@3x.png": "88c8950da84ecce8c84c45007185b277",
"assets/assets/images/page0/Rectangle%25201712@2x.png": "8ed45dd7397d64088828cdd1f7789b8c",
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
