'use strict';

/* global WpcEmu */
/* global c */
/*jshint bitwise: false*/

// HINT enable debug in the browser by entering "localStorage.debug = '*'" in the browser
console.log('hello');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

var wpcSystem, intervalId;

function step() {
  // TODO make adaptive, so we execute 2000 emuState.opMs
  var count = 54*4;

  while (count--) {
    try {
      wpcSystem.executeCycle();
    } catch(error) {
      console.error('ERROR', error.message);
    }
  }

  updateCanvas();
  intervalId = requestAnimationFrame(step);
}

// NOTE: fetch works only in the browser, see https://github.com/matthew-andrews/isomorphic-fetch
function downloadFileFromUrlAsUInt8Array(url) {
  return fetch(url)
  	.then((response) => {
  		if (response.status >= 400) {
  			throw new Error('INVALID_STATUSCODE_' + response.status);
  		}
      return response.arrayBuffer();
    })
    .then((buffer) => {
      return new Uint8Array(buffer);
  	});
}

function irq() {
  console.log('IRQ!');
  wpcSystem.irq();
}

function firq() {
  console.log('FIRQ!');
  wpcSystem.firq();
}

function setCabinetInput(value) {
  console.log('setCabinetInput!',value);
  wpcSystem.setCabinetInput(value);
}

function emuStep() {
  console.log('step');
  wpcSystem.executeCycle();
}

function startEmu() {
  console.log('start emu');
  intervalId = requestAnimationFrame(step);
}

function stopEmu() {
  console.log('stop emu');
  cancelAnimationFrame(intervalId);
  intervalId = false;
  updateCanvas();
}

function resetEmu() {
  cancelAnimationFrame(intervalId);
  intervalId = false;
  console.log('reset emu');
  // HINT: make sure CORS is correct
  downloadFileFromUrlAsUInt8Array('https://s3-eu-west-1.amazonaws.com/foo-temp/hurcnl_2.rom')
    .then((rom) => {
      return WpcEmu.initVMwithRom(rom, 'hurcnl_2.rom');
    })
    .then((_wpcSystem) => {
      wpcSystem = _wpcSystem;
      console.log('WPC System initialised');
      wpcSystem.start();
      startEmu();
    })
    .catch((error) => {
      stopEmu();
      console.log('EXCEPTION!', error.message);
      console.log(error.stack);
    });
}

canvasClear();
resetEmu();

const YPOS_GENERIC_DATA = 20;
const YPOS_WPC_DATA = 170;
const YPOS_DMD_DATA = 320;

const LEFT_X_OFFSET = 20;
const MIDDLE_X_OFFSET = 260 + LEFT_X_OFFSET;
const RIGHT_X_OFFSET = 260 + MIDDLE_X_OFFSET;
const RIGHT_PLUS_X_OFFSET = 130 + RIGHT_X_OFFSET;

function updateCanvas() {
  canvasClear();
  const emuState = wpcSystem.getUiState();
  c.font = '10px Monaco';

  c.fillStyle = 'magenta';
  c.fillText('# GENERIC DATA:', LEFT_X_OFFSET, YPOS_GENERIC_DATA);
  c.fillText('# WPC BOARD DATA:', LEFT_X_OFFSET, YPOS_WPC_DATA);
  c.fillText('# DMD BOARD DATA:', LEFT_X_OFFSET, YPOS_DMD_DATA);

  c.fillStyle = 'yellow';
  c.fillText('ROM: hurcnl_2.rom', LEFT_X_OFFSET, YPOS_GENERIC_DATA + 10);
  c.fillText('CPU TICKS: ' + emuState.ticks, MIDDLE_X_OFFSET, YPOS_GENERIC_DATA + 10);
  c.fillText('CPU TICKS/ms: ' + emuState.opMs, RIGHT_X_OFFSET, YPOS_GENERIC_DATA + 10);
  const cpuState = intervalId ? 'running' : 'paused';
  c.fillText('CPU STATE: ' + cpuState, MIDDLE_X_OFFSET, YPOS_GENERIC_DATA + 20);
  c.fillText('ASIC RAM:', RIGHT_X_OFFSET, YPOS_GENERIC_DATA + 20);

  const diagnosticLed = emuState.asic.wpc.diagnosticLed ? emuState.asic.wpc.diagnosticLed.toString(2) : '00000000';
  const lampRow = emuState.asic.wpc.lampRow;
  const lampColumn = emuState.asic.wpc.lampColumn;
  const switchRow = emuState.asic.wpc.switchRow;
  const switchColumn = emuState.asic.wpc.switchColumn;
  c.fillText('DIAGLED STATE: ' + diagnosticLed, LEFT_X_OFFSET, YPOS_WPC_DATA + 10);
  c.fillText('DIAGLED TOGGLE COUNT: ' + emuState.asic.wpc.diagnosticLedToggleCount, MIDDLE_X_OFFSET, YPOS_WPC_DATA + 10);
  c.fillText('LAMP ROW: ' + lampRow, RIGHT_X_OFFSET, YPOS_WPC_DATA + 10);
  c.fillText('SWITCH ROW: ' + switchRow, RIGHT_PLUS_X_OFFSET, YPOS_WPC_DATA + 10);

  c.fillText('Active ROM Bank: ' + emuState.asic.wpc.activeRomBank, LEFT_X_OFFSET, YPOS_WPC_DATA + 20);
  c.fillText('IRQ enabled: ' + emuState.asic.wpc.irqEnabled, MIDDLE_X_OFFSET, YPOS_WPC_DATA + 20);
  c.fillText('LAMP COL: ' + lampColumn, RIGHT_X_OFFSET, YPOS_WPC_DATA + 20);
  c.fillText('SWITCH COL: ' + switchColumn, RIGHT_PLUS_X_OFFSET, YPOS_WPC_DATA + 20);

  c.fillText('DMD ACTIVE PAGE: ' + emuState.asic.dmd.activepage, LEFT_X_OFFSET, YPOS_DMD_DATA + 10);
  c.fillText('DMD LOW PAGE: ' + emuState.asic.dmd.lowpage, MIDDLE_X_OFFSET, YPOS_DMD_DATA + 10);
  c.fillText('DMD HIGH PAGE: ' + emuState.asic.dmd.highpage, RIGHT_X_OFFSET, YPOS_DMD_DATA + 10);

  c.fillText('DMD SCANLINE: ' + emuState.asic.dmd.scanline, LEFT_X_OFFSET, YPOS_DMD_DATA + 20);

  c.fillText('PAGE 1 RAM:', LEFT_X_OFFSET, YPOS_DMD_DATA + 40);
  c.fillText('PAGE 2 RAM:', MIDDLE_X_OFFSET, YPOS_DMD_DATA + 40);

  //TODO payload is wrong
  drawMatrix(lampRow, lampColumn, RIGHT_X_OFFSET, YPOS_WPC_DATA + 30);
  drawMatrix(switchRow, switchColumn, RIGHT_PLUS_X_OFFSET, YPOS_WPC_DATA + 30);

  drawMemRegion(emuState.asic.ram, RIGHT_X_OFFSET, YPOS_GENERIC_DATA + 20, 128);

  //dmd pages - 8 pixel (on/off) per byte, display is 128x32 pixels
  drawDmd(emuState.asic.dmd.page1, LEFT_X_OFFSET, YPOS_DMD_DATA + 40, 16*8);
  drawDmd(emuState.asic.dmd.page2, MIDDLE_X_OFFSET, YPOS_DMD_DATA + 40, 16*8);
}

function drawMemRegion(data, x, y, width) {
  var offsetX = 0;
  var offsetY = 0;
  for (var i = 0, len = data.length; i < len; i++) {
    const alpha = data[i];
    c.fillStyle = 'rgb(' + alpha + ',' + alpha + ', 64)';
    c.fillRect (x + offsetX, y + offsetY, 1, 1);
    if (offsetX++ === width) {
      offsetX = 0;
      offsetY ++;
    }
  }
}

function drawMatrix(row, column, x, y) {
  const GRIDSIZE = 10;

  [1, 2, 4, 8, 16, 32, 64, 128].forEach((mask, index) => {
    //draw horizontal lines
    if (row === mask) {
      c.strokeStyle = 'yellow';
    } else {
      c.strokeStyle = 'grey';
    }
    var j = y + index * GRIDSIZE;
    c.beginPath();
    c.moveTo(x, j);
    c.lineTo(x + 7 * GRIDSIZE, j);
    c.stroke();

    //draw vertical lines
    if (column === mask) {
      c.strokeStyle = 'yellow';
    } else {
      c.strokeStyle = 'grey';
    }
    var i = x + index * GRIDSIZE;
    c.beginPath();
    c.moveTo(i, y);
    c.lineTo(i, y + 7 * GRIDSIZE);
    c.stroke();

  });
}

const COLOR_LOW = 'rgb(0, 0, 64)';
const COLOR_HIGH = 'rgb(255, 255, 64)';
const SCALE_FACTOR = 2;
function drawDmd(data, x, y, width) {
  var offsetX = 0;
  var offsetY = 0;
  data.forEach((packedByte) => {
    [1, 2, 4, 8, 16, 32, 64, 128].forEach((mask) => {
      if (mask & packedByte) {
        c.fillStyle = COLOR_HIGH;
      } else {
        c.fillStyle = COLOR_LOW;
      }
      c.fillRect(x + offsetX * SCALE_FACTOR, y + offsetY * SCALE_FACTOR, SCALE_FACTOR, SCALE_FACTOR);
      offsetX++;
      if (offsetX === width) {
        offsetX = 0;
        offsetY ++;
      }
    });
  });
}

function canvasClear() {
  c.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  c.fillStyle = '#000';
  c.fill();
}
