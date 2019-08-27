'use strict';

module.exports = {
  name: 'WPC-S: Johnny Mnemonic',
  version: '1.2 R',
  rom: {
    u06: 'john1_2r.rom',
  },
  switchMapping: [
    //TODO
    { id: 11, name: 'BALL LAUNCH' },
    { id: 12, name: 'X HAND HOME' },
    { id: 13, name: 'START BUTTON' },
    { id: 14, name: 'PLUMB BOB TILT' },
    { id: 15, name: 'LEFT OUTLANE' },
    { id: 16, name: 'LEFT FLIP. LANE' },
    { id: 17, name: 'RIGHT FLIP. LANE' },
    { id: 18, name: 'RIGHT OUTLANE' },

    { id: 21, name: 'SLAM TILT' },
    { id: 22, name: 'COIN DOOR CLOSED' },
    { id: 23, name: 'BUY IN BUTTON' },
    { id: 25, name: 'L SLINGSHOT' },
    { id: 26, name: 'R SLINGSHOT' },
    { id: 27, name: 'L STANDUP' },
    { id: 28, name: 'R STANDUP' },

    { id: 31, name: 'TROUGH JAM' },
    { id: 32, name: 'TROUGH BALL 1' },
    { id: 33, name: 'TROUGH BALL 2' },
    { id: 34, name: 'TROUGH BALL 3' },
    { id: 35, name: 'TROUGH BALL 4' },
    { id: 36, name: 'POPPER BALL 1' },
    { id: 37, name: 'Y HAND HOME' },
    { id: 38, name: 'R RUBBER' },

    { id: 41, name: 'LEFT RAMP ENTER' },
    { id: 42, name: 'LEFT RAMP MADE' },
    { id: 43, name: 'DROP TARGET' },
    { id: 44, name: 'LEFT JET' },
    { id: 45, name: 'BOTTOM JET' },
    { id: 46, name: 'RIGHT JET' },
    { id: 47, name: 'CRAZ BOB\'S' },
    { id: 48, name: 'SPINNER' },

    { id: 51, name: 'CYBER MATRIX 11' },
    { id: 52, name: 'CYBER MATRIX 21' },
    { id: 53, name: 'CYBER MATRIX 31' },
    { id: 54, name: 'RIGHT RAMP ENTER' },
    { id: 55, name: 'RIGHT RAMP MADE' },
    { id: 56, name: 'LEFT LOOP' },
    { id: 57, name: 'RIGHT LOOP' },
    { id: 58, name: 'INNER LOOP ENTRY' },

    { id: 61, name: 'CYBER MATRIX 12' },
    { id: 62, name: 'CYBER MATRIX 22' },
    { id: 63, name: 'CYBER MATRIX 32' },
    { id: 64, name: 'LEFT JET LANE' },
    { id: 65, name: 'MIDDLE JET LANE' },
    { id: 66, name: 'RIGHT JET LANE' },
    { id: 67, name: 'R HAND CONTROL' },
    { id: 68, name: 'L HAND CONTROL' },

    { id: 71, name: 'CYBER MATRIX 13' },
    { id: 72, name: 'CYBER MATRIX 23' },
    { id: 73, name: 'CYBER MATRIX 33' },
    { id: 74, name: 'X HAND ENCODER A' },
    { id: 75, name: 'X HAND ENCODER B' },
    { id: 76, name: 'Y HAND ENCODER B' },
    { id: 77, name: 'Y HAND ENCODER A' },
    { id: 78, name: 'SHOOTER LANE' },
  ],
  fliptronicsMapping: [
    { id: 'F1', name: 'R FLIPPER EOS' },
    { id: 'F2', name: 'R FLIPPER BUTTON' },
    { id: 'F3', name: 'L FLIPPER EOS' },
    { id: 'F4', name: 'L FLIPPER BUTTON' },
    { id: 'F5', name: 'BALL IN HAND' },
    { id: 'F6', name: 'UR FLIPPER BUT' },
    { id: 'F7', name: 'UL FLIPPER EOS' },
    { id: 'F8', name: 'UL FLIPPER BUT' },
  ],
  playfield: {
    //size must be 200x400, lamp positions according to image
    image: 'playfield-jm.jpg',
  },
  skipWpcRomCheck: true,
  features: [
    'securityPic',
    'wpcSecure',
  ],
  initialise: {
    closedSwitches: [
      12, 22, 43,
      //OPTO SWITCHES: 31, 32, 33, 34, 35, 36, 74, 75, 76, 77
      31, 36, 76,
      'F2', 'F4', 'F6', 'F8',
    ],
    initialAction: [
      {
        delayMs: 1000,
        source: 'cabinetInput',
        value: 16
      }
    ],
  },

/*
"last_played": {"start": "0x1800", "encoding": "wpc_rtc", "length": 7},
	"last_game": [
		{	"label": "Player 1",
			"start": "0x16A0", "encoding": "bcd", "length": 6
		},
		{	"label": "Player 2",
			"start": "0x16A7", "encoding": "bcd", "length": 6}
		,
		{	"label": "Player 3",
			"start": "0x16AE", "encoding": "bcd", "length": 6
		},
		{	"label": "Player 4",
			"start": "0x16B5", "encoding": "bcd", "length": 6
		}
	],
	"high_scores": [
		{	"label": "Grand Champion", "short_label": "GC",
			"initials": {"start": "0x1C87", "encoding": "ch", "length": 3},
			"score": {"start": "0x1C8A", "encoding": "bcd", "length": 6}
		},
		{	"label": "First Place", "short_label": "1st",
			"initials": {"start": "0x1C61", "encoding": "ch", "length": 3},
			"score": {"start": "0x1C64", "encoding": "bcd", "length": 6}
		},
		{	"label": "Second Place", "short_label": "2nd",
			"initials": {"start": "0x1C6A", "encoding": "ch", "length": 3},
			"score": {"start": "0x1C6D", "encoding": "bcd", "length": 6}
		},
		{	"label": "Third Place", "short_label": "3rd",
			"initials": {"start": "0x1C73", "encoding": "ch", "length": 3},
			"score": {"start": "0x1C76", "encoding": "bcd", "length": 6}
		},
		{	"label": "Fourth Place", "short_label": "4th",
			"initials": {"start": "0x1C7C", "encoding": "ch", "length": 3},
			"score": {"start": "0x1C7F", "encoding": "bcd", "length": 6}
		}
  ],
*/
};
