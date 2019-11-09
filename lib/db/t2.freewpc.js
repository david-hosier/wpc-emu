'use strict';

module.exports = {
  name: 'WPC-DMD: Terminator 2 (FreeWPC)',
  version: '1.00',
  pinmame: {
    knownNames: [ 't2_f19', 't2_f20', 't2_f32' ],
    gameName: 'Terminator 2: Judgement Day (FreeWPC)',
    id: 't2F',
  },
  rom: {
    u06: 'ft20_32.rom',
  },
  playfield: {
    //size must be 200x400, lamp positions according to image
    image: 'playfield-t2.jpg',
    lamps: [
      [{ x: 61, y: 309, color: 'GREEN' }],
      [{ x: 74, y: 303, color: 'GREEN' }],
      [{ x: 89, y: 301, color: 'ORANGE' }],
      [{ x: 102, y: 303, color: 'GREEN' }],
      [{ x: 115, y: 309, color: 'GREEN' }],
      [{ x: 88, y: 353, color: 'YELLOW' }],
      [{ x: 89, y: 283, color: 'WHITE' }],
      [{ x: 0, y: 0, color: 'BLACK' }], //#17 NOT USED

      [{ x: 18, y: 310, color: 'ORANGE' }], //#21
      [{ x: 18, y: 291, color: 'RED' }, { x: 160, y: 291, color: 'RED' }],
      [{ x: 30, y: 279, color: 'WHITE' }],
      [{ x: 147, y: 279, color: 'ORANGE' }],
      [{ x: 77, y: 160, color: 'YELLOW' }],
      [{ x: 74, y: 141, color: 'GREEN' }], //#26
      [{ x: 71, y: 121, color: 'ORANGE' }],
      [{ x: 68, y: 100, color: 'LPURPLE' }],

      [{ x: 53, y: 146, color: 'YELLOW' }], //#31
      [{ x: 55, y: 156, color: 'YELLOW' }],
      [{ x: 58, y: 165, color: 'YELLOW' }],
      [{ x: 60, y: 174, color: 'YELLOW' }],
      [{ x: 62, y: 183, color: 'YELLOW' }],
      [{ x: 89, y: 154, color: 'RED' }],
      [{ x: 98, y: 160, color: 'RED' }],
      [{ x: 105, y: 167, color: 'RED' }],

      [{ x: 34, y: 184, color: 'GREEN' }], //#41
      [{ x: 40, y: 204, color: 'ORANGE' }],
      [{ x: 47, y: 219, color: 'RED' }],
      [{ x: 50, y: 233, color: 'RED' }],
      [{ x: 55, y: 246, color: 'RED' }],
      [{ x: 59, y: 260, color: 'RED' }],
      [{ x: 62, y: 272, color: 'RED' }],
      [{ x: 67, y: 286, color: 'RED' }],

      [{ x: 84, y: 268, color: 'RED' }, { x: 94, y: 268, color: 'RED' }], //#51
      [{ x: 53, y: 64, color: 'RED' }, { x: 69, y: 64, color: 'RED' }],
      [{ x: 136, y: 220, color: 'RED' }],
      [{ x: 133, y: 234, color: 'RED' }],
      [{ x: 126, y: 247, color: 'RED' }],
      [{ x: 120, y: 260, color: 'RED' }],
      [{ x: 115, y: 272, color: 'RED' }],
      [{ x: 111, y: 286, color: 'RED' }],

      [{ x: 66, y: 196, color: 'ORANGE' }], //#61
      [{ x: 68, y: 209, color: 'ORANGE' }],
      [{ x: 71, y: 221, color: 'ORANGE' }],
      [{ x: 74, y: 233, color: 'ORANGE' }],
      [{ x: 77, y: 244, color: 'ORANGE' }],
      [{ x: 30, y: 237, color: 'GREEN' }],
      [{ x: 39, y: 255, color: 'ORANGE' }],
      [{ x: 50, y: 130, color: 'RED' }],

      [{ x: 125, y: 198, color: 'ORANGE' }], //#71
      [{ x: 120, y: 210, color: 'ORANGE' }],
      [{ x: 115, y: 221, color: 'ORANGE' }],
      [{ x: 111, y: 233, color: 'ORANGE' }],
      [{ x: 107, y: 244, color: 'ORANGE' }],
      [{ x: 146, y: 241, color: 'YELLOW' }],
      [{ x: 146, y: 250, color: 'YELLOW' }],
      [{ x: 146, y: 259, color: 'YELLOW' }],

      [{ x: 151, y: 189, color: 'RED' }], //#81
      [{ x: 129, y: 187, color: 'RED' }],
      [{ x: 144, y: 205, color: 'WHITE' }],
      [{ x: 41, y: 379, color: 'YELLOW' }],
      [{ x: 64, y: 80, color: 'WHITE' }],
      [{ x: 98, y: 29, color: 'GREEN' }],
      [{ x: 118, y: 33, color: 'GREEN' }],
      [{ x: 139, y: 38, color: 'GREEN' }],
    ],
    flashlamps: [
      { id: 17, x: 87, y: 326, },
      { id: 18, x: 143, y: 327, },
      { id: 19, x: 35, y: 327, },
      { id: 20, x: 28, y: 161, },
      { id: 21, x: 179, y: 228, },
      { id: 22, x: 155, y: 131, },
      { id: 23, x: 28, y: 60, },
      { id: 25, x: 13, y: 144, }, { id: 25, x: 13, y: 160, },
      { id: 26, x: 37, y: 44, }, { id: 26, x: 46, y: 69, },
      { id: 27, x: 77, y: 65, }, { id: 27, x: 80, y: 55, },
      { id: 28, x: 63, y: 71, },
    ],
  },
  switchMapping: [
    { id: 11, name: 'RIGHT FLIPPER' },
    { id: 12, name: 'LEFT FLIPPER' },
    { id: 13, name: 'START BUTTON' },
    { id: 14, name: 'PLUMB BOB TILT' },
    { id: 15, name: 'TROUGH LEFT' },
    { id: 16, name: 'TROUGH CENTER' },
    { id: 17, name: 'TROUGH RIGHT' },
    { id: 18, name: 'OUTHOLE' },
    { id: 21, name: 'SLAM TILT' },
    { id: 22, name: 'COIN DOOR CLOSED' },
    { id: 23, name: 'TICKED OPTQ' },
    { id: 25, name: 'LEFT OUT LANE' },
    { id: 26, name: 'LEFT RET. LANE' },
    { id: 27, name: 'RIGHT RET. LANE' },
    { id: 28, name: 'RIGHT OUT LANE' },
    { id: 31, name: 'GUN LOADED' },
    { id: 32, name: 'GUN MARK' },
    { id: 33, name: 'GUN HOME' },
    { id: 34, name: 'GRIP TRIGGER' },
    { id: 36, name: 'STAND MID LEFT' },
    { id: 37, name: 'STAND MID CENTER' },
    { id: 38, name: 'STAND MID RIGHT' },
    { id: 41, name: 'LEFT JET' },
    { id: 42, name: 'RIGHT JET' },
    { id: 43, name: 'BOTTOM JET' },
    { id: 44, name: 'LEFT SLING' },
    { id: 45, name: 'RIGHT SLING' },
    { id: 46, name: 'STAND RIGHT TOP' },
    { id: 47, name: 'STAND RIGHT MID' },
    { id: 48, name: 'STAND RIGHT BOT' },
    { id: 51, name: 'LEFT LOCK' },
    { id: 53, name: 'LO ESCAPE ROUTE' },
    { id: 54, name: 'HI ESCAPE ROUTE' },
    { id: 55, name: 'TOP LOCK' },
    { id: 56, name: 'TOP LANE LEFT' },
    { id: 57, name: 'TOP LANE CENTER' },
    { id: 58, name: 'TOP LANE RIGHT' },
    { id: 61, name: 'LEFT RAMP ENTRY' },
    { id: 62, name: 'LEFT RAMP MADE' },
    { id: 63, name: 'RIGHT RAMP ENTRY' },
    { id: 64, name: 'RIGHT RAMP MADE' },
    { id: 65, name: 'LO CHASE LOOP' },
    { id: 66, name: 'HI CHASE LOOP' },
    { id: 71, name: 'TARGET 1 HI' },
    { id: 72, name: 'TARGET 2' },
    { id: 73, name: 'TARGET 3' },
    { id: 74, name: 'TARGET 4' },
    { id: 75, name: 'TARGET 5 LOW' },
    { id: 76, name: 'BALL POPPER' },
    { id: 77, name: 'DROP TARGET' },
    { id: 78, name: 'SHOOTER' },
  ],
  skipWpcRomCheck: false,
  features: [
    'wpcDmd',
  ],
  initialise: {
    //OPTO Switches: 23
    closedSwitches: [ 15, 16, 17, 23 ],
  },
  audio: {
    url: 'sound/t2.mp3',
    // Options:
    // - channel: 0 (background music), 1 (music snippet), undefined (sound fx). If channel is defined, the previous sample will be stopped
    // - loop: true (loop sample, used for background music), false (default, play once)
    // - gain: increase or reduce volume of this sample. Range 0-1. 0.5 as normal
    // - TODO duck: reduce volume of the background music. Range 0-100 in percent
    // - TODO stop: stop playback of background music
    sample: {
      2: { channel: 0, loop: true, gain: 0.4 },
      3: { channel: 0, loop: true, gain: 0.4 },
      4: { channel: 0, loop: true, gain: 0.4 },
      5: { channel: 0, loop: true, gain: 0.4 },
      6: { channel: 0, loop: true, gain: 0.4 },
      7: { channel: 0, loop: true, gain: 0.4 },
      8: { channel: 0, loop: true, gain: 0.4 },
      9: { channel: 0, loop: true, gain: 0.4 },
      10: { channel: 0, loop: true, gain: 0.4 },
      11: { channel: 0, loop: true, gain: 0.4 },
      12: { channel: 0, loop: true, gain: 0.4 },
      13: { channel: 0, loop: true, gain: 0.4 },
      14: { channel: 0, loop: true, gain: 0.4 },
      15: { channel: 0, loop: true, gain: 0.4 },
      17: { channel: 0, loop: true, gain: 0.4 },
      18: { channel: 0, loop: true, gain: 0.4 },
      19: { channel: 0, loop: true, gain: 0.4 },
      20: { channel: 0, loop: true, gain: 0.4 },

      // music snippets
      80: { channel: 1 },
      81: { channel: 1 },
      83: { channel: 1 },
      84: { channel: 1 },
      87: { channel: 1 },
      88: { channel: 1 },
      136: { channel: 1 },
      137: { channel: 1 },
      161: { channel: 1 },
      162: { channel: 1 },
      163: { channel: 1 },
      164: { channel: 1 },
      165: { channel: 1 },
      178: { channel: 1 },
      185: { channel: 1 },
    },
    sprite: {
      snd80: [
        0,
        610.9750566893424
      ],
      snd81: [
        4000,
        750.2947845804986
      ],
      snd83: [
        10000,
        831.5646258503407
      ],
      snd84: [
        15000,
        1278.5487528344675
      ],
      snd87: [
        21000,
        1438.185941043084
      ],
      snd88: [
        30000,
        1159.546485260769
      ],
      snd136: [
        33000,
        1621.0430839002256
      ],
      snd137: [
        52000,
        2436.643990929703
      ],
      snd161: [
        56000,
        2663.0385487528374
      ],
      snd162: [
        60000,
        1798.095238095236
      ],
      snd163: [
        63000,
        3144.8526077097513
      ],
      snd164: [
        68000,
        1371.4285714285666
      ],
      snd165: [
        81000,
        3498.9569160997717
      ],
      snd178: [
        86000,
        6044.444444444452
      ],
      snd185: [
        94000,
        2425.0340136054406
      ],
      snd2: [
        98000,
        24775.69160997733
      ],
      snd3: [
        124000,
        120778.59410430842
      ],
      snd4: [
        246000,
        120064.58049886624
      ],
      snd5: [
        368000,
        120105.21541950112
      ],
      snd6: [
        490000,
        120012.33560090703
      ],
      snd7: [
        612000,
        118717.82312925166
      ],
      snd8: [
        732000,
        119999.27437641725
      ],
      snd9: [
        853000,
        120032.65306122444
      ],
      snd10: [
        975000,
        120032.65306122444
      ],
      snd11: [
        1097000,
        120035.55555555568
      ],
      snd12: [
        1219000,
        95227.93650793642
      ],
      snd13: [
        1316000,
        118712.01814058963
      ],
      snd14: [
        1436000,
        120032.65306122444
      ],
      snd15: [
        1558000,
        120042.8117913832
      ],
      snd17: [
        1680000,
        120778.59410430846
      ],
      snd18: [
        1802000,
        120064.58049886624
      ],
      snd19: [
        1924000,
        120012.33560090713
      ],
      snd20: [
        2046000,
        120000.72562358264
      ],
      snd21: [
        2168000,
        9495.510204081711
      ],
      snd48: [
        2179000,
        4445.170068027437
      ],
      snd49: [
        2185000,
        1951.9274376416433
      ],
      snd82: [
        2188000,
        1133.4240362812125
      ],
      snd85: [
        2191000,
        988.2993197279575
      ],
      snd86: [
        2193000,
        988.2993197279575
      ],
      snd89: [
        2195000,
        1327.891156462556
      ],
      snd128: [
        2198000,
        4413.242630385412
      ],
      snd129: [
        2204000,
        3185.4875283447655
      ],
      snd130: [
        2209000,
        1356.916099773116
      ],
      snd131: [
        2212000,
        16403.446712018194
      ],
      snd132: [
        2230000,
        1153.741496598741
      ],
      snd133: [
        2233000,
        994.1043083899785
      ],
      snd134: [
        2235000,
        1205.98639455784
      ],
      snd135: [
        2238000,
        1110.2040816326735
      ],
      snd138: [
        2241000,
        814.1496598641424
      ],
      snd139: [
        2243000,
        875.1020408162731
      ],
      snd140: [
        2245000,
        1908.390022675576
      ],
      snd141: [
        2248000,
        2131.882086167934
      ],
      snd142: [
        2252000,
        1533.9682539683963
      ],
      snd143: [
        2255000,
        1356.916099773116
      ],
      snd144: [
        2258000,
        1307.5736961450275
      ],
      snd145: [
        2261000,
        1391.7460317461519
      ],
      snd146: [
        2270000,
        4227.4829931971
      ],
      snd147: [
        2276000,
        111.74603174595177
      ],
      snd148: [
        2278000,
        1208.8888888888505
      ],
      snd150: [
        2281000,
        3037.4603174605
      ],
      snd151: [
        2286000,
        2030.294784580292
      ],
      snd152: [
        2290000,
        2024.4897959182708
      ],
      snd153: [
        2294000,
        2012.8798185942287
      ],
      snd155: [
        2298000,
        1606.5306122450238
      ],
      snd156: [
        2301000,
        2416.326530612423
      ],
      snd157: [
        2305000,
        2070.929705215349
      ],
      snd158: [
        2309000,
        3379.954648526109
      ],
      snd159: [
        2314000,
        1356.916099773116
      ],
      snd160: [
        2317000,
        1937.4149659865907
      ],
      snd167: [
        2320000,
        602.267573696281
      ],
      snd168: [
        2322000,
        866.3945578232415
      ],
      snd169: [
        2324000,
        1684.8979591836724
      ],
      snd170: [
        2327000,
        875.1020408162731
      ],
      snd171: [
        2329000,
        875.1020408162731
      ],
      snd172: [
        2331000,
        860.5895691612204
      ],
      snd173: [
        2333000,
        854.7845804987446
      ],
      snd174: [
        2335000,
        872.1995464852625
      ],
      snd175: [
        2337000,
        869.297052154252
      ],
      snd176: [
        2339000,
        872.1995464852625
      ],
      snd179: [
        2341000,
        3908.20861678003
      ],
      snd181: [
        2346000,
        1072.471655328627
      ],
      snd182: [
        2349000,
        1359.8185941041265
      ],
      snd183: [
        2352000,
        2416.326530612423
      ],
      snd184: [
        2356000,
        3861.768707482952
      ],
      snd186: [
        2361000,
        1473.015873015811
      ],
      snd187: [
        2364000,
        1473.015873015811
      ],
      snd188: [
        2367000,
        1473.015873015811
      ],
      snd189: [
        2370000,
        1475.9183673468215
      ],
      snd190: [
        2373000,
        2021.5873015872603
      ],
      snd191: [
        2377000,
        2018.6848072562498
      ],
      snd192: [
        2381000,
        1856.1451247164769
      ],
      snd193: [
        2389000,
        3243.5374149658855
      ],
      snd195: [
        2394000,
        7727.891156462647
      ],
      snd196: [
        2403000,
        1568.7981859409774
      ],
      snd197: [
        2406000,
        1496.23582766435
      ],
      snd198: [
        2409000,
        1403.356009070194
      ],
      snd199: [
        2412000,
        3345.124716553073
      ],
      snd200: [
        2417000,
        4001.088435374186
      ],
      snd201: [
        2423000,
        1908.390022675576
      ],
      snd202: [
        2426000,
        2753.015873016011
      ],
      snd203: [
        2430000,
        6096.689342403806
      ],
      snd204: [
        2438000,
        2378.5941043083767
      ],
      snd205: [
        2442000,
        1298.866213151996
      ],
      snd206: [
        2445000,
        2184.126984127033
      ],
      snd207: [
        2455000,
        686.4399092969506
      ],
      snd208: [
        2457000,
        750.2947845805465
      ],
      snd31232: [
        2459000,
        4445.170068027437
      ],
      snd31233: [
        2465000,
        1278.5487528344675
      ],
      snd31234: [
        2468000,
        1536.8707482994068
      ],
      snd31235: [
        2471000,
        1780.6802721088388
      ],
      snd31236: [
        2474000,
        2889.4331065757797
      ],
      snd31237: [
        2478000,
        6743.945578231433
      ],
      snd31238: [
        2486000,
        2123.174603174448
      ],
      snd31239: [
        2490000,
        7452.15419501119
      ],
      snd31240: [
        2499000,
        5658.412698412576
      ],
      snd31241: [
        2506000,
        1812.6077097504094
      ],
      snd31242: [
        2516000,
        5751.292517006732
      ],
      snd31244: [
        2523000,
        1554.2857142859248
      ],
      snd31245: [
        2526000,
        750.2947845805465
      ],
      snd31246: [
        2528000,
        1452.6984126982825
      ],
      snd31247: [
        2531000,
        1069.5691609976166
      ],
      snd31248: [
        2534000,
        457.14285714302605
      ],
      snd31249: [
        2536000,
        2433.7414965984863
      ],
      snd31259: [
        2540000,
        1121.8140589567156
      ],
      snd31260: [
        2543000,
        959.2743764173974
      ],
      snd31297: [
        2545000,
        1951.9274376416433
      ],
      snd16: [
        2548000,
        4360.997732426313
      ],
      snd166: [
        2564000,
        8978.866213151832
      ],
      snd177: [
        2574000,
        3818.2312925168844
      ],
      snd180: [
        2579000,
        2213.1519274375933
      ],
      snd194: [
        2639000,
        5249.160997732361
      ],
      snd31262: [
        2658000,
        1589.1156462585059
      ],
      snd149: [
        2664000,
        1745.8503401362577
      ],
      snd154: [
        2677000,
        3211.609977324315
      ],
      snd31243: [
        2689000,
        5478.45804988674
      ],
      snd31250: [
        2724000,
        2009.9773242632182
      ],
      snd31251: [
        2763000,
        3487.3469387753175
      ],
      snd31252: [
        2798000,
        1629.7505668935628
      ],
      snd31253: [
        2805000,
        973.7868480724501
      ],
      snd31254: [
        2819000,
        2332.1541950112987
      ],
      snd31255: [
        2838000,
        3072.290249433081
      ],
      snd31256: [
        2851000,
        2918.4580498867945
      ],
      snd31258: [
        2875000,
        2120.2721088434373
      ],
      snd31261: [
        2891000,
        1110.2040816326735
      ],
      snd31263: [
        2906000,
        2218.9569160996143
      ],
      snd31264: [
        2916000,
        1879.3650793650158
      ],
      snd31265: [
        2924000,
        3194.195011337797
      ],
      snd31266: [
        2939000,
        3095.51020408162
      ],
      snd31267: [
        2949000,
        3855.963718820931
      ],
      snd31268: [
        2959000,
        3080.9977324261126
      ],
      snd31269: [
        2973000,
        1300.3174603172738
      ],
      snd31270: [
        2982000,
        1124.7165532881809
      ],
      snd31271: [
        2991000,
        1737.1428571427714
      ],
      snd31272: [
        3002000,
        2131.882086167934
      ],
      snd31273: [
        3018000,
        1992.5623582767003
      ],
      snd31274: [
        3037000,
        2030.294784580292
      ],
      snd31275: [
        3056000,
        1809.7052154193989
      ],
      snd31276: [
        3071000,
        2073.8321995463593
      ],
      snd31277: [
        3090000,
        1879.3650793650158
      ],
      snd31278: [
        3109000,
        2932.970521541847
      ],
      snd31279: [
        3145000,
        2619.501133786798
      ],
      snd31280: [
        3164000,
        1896.7800453515338
      ],
      snd31281: [
        3179000,
        2416.326530612423
      ],
      snd31282: [
        3189000,
        1609.4331065760343
      ],
      snd31283: [
        3200000,
        2837.1882086166806
      ],
      snd31284: [
        3222000,
        1914.1950113380517
      ],
      snd31285: [
        3233000,
        2613.696145124777
      ],
      snd31286: [
        3261000,
        2326.3492063492777
      ],
      snd31287: [
        3273000,
        2099.954648525909
      ],
      snd31288: [
        3283000,
        1949.0249433106328
      ],
      snd31289: [
        3295000,
        1571.700680271988
      ],
      snd31290: [
        3314000,
        2181.2244897960227
      ],
      snd31291: [
        3330000,
        1658.7755102041228
      ],
      snd31292: [
        3349000,
        2590.476190476238
      ],
      snd31293: [
        3362000,
        1446.8934240362614
      ],
      snd31294: [
        3377000,
        2456.9614512470253
      ],
      snd31296: [
        3390000,
        1629.7505668935628
      ],
      snd31298: [
        3401000,
        2018.6848072562498
      ],
      snd31299: [
        3411000,
        1635.5555555555839
      ],
      snd31300: [
        3420000,
        1473.015873015811
      ],
      snd31301: [
        3426000,
        1374.331065759634
      ],
      snd31302: [
        3457000,
        2131.882086167934
      ],
      snd31303: [
        3464000,
        1557.1882086169353
      ],
      snd31304: [
        3479000,
        1763.265306122321
      ],
      snd31305: [
        3494000,
        1812.6077097504094
      ],
      snd31306: [
        3521000,
        4906.666666666752
      ],
      snd31307: [
        3533000,
        1861.950113378498
      ],
      snd31308: [
        3548000,
        1859.0476190474874
      ],
      snd31309: [
        3563000,
        1693.605442176704
      ],
      snd31310: [
        3578000,
        2874.920634920727
      ],
      snd31311: [
        3594000,
        2909.750566893308
      ],
      snd31312: [
        3606000,
        2578.8662131517412
      ],
      snd31313: [
        3614000,
        2265.3968253966923
      ],
      snd31314: [
        3634000,
        2753.015873016011
      ],
      snd31315: [
        3647000,
        1673.2879818596302
      ]
    },
  },
};