'use strict';

import test from 'ava';
import DMD from '../../../lib/boards/dmd-board';

test.beforeEach((t) => {
  const ram = new Uint8Array(0x4000);
  const initObject = {
    interruptCallback: {},
    ram,
  };
  const dmd = DMD.getInstance(initObject);
  dmd.reset();
  t.context = dmd;
});

test('dmd, should write to hardwareRam', (t) => {
  const dmd = t.context;
  dmd.write(0x3FBD, 255);
  t.is(dmd.ram[0x3FBD], 0xFF);
});

test('dmd, should read to WPC_DMD_SCANLINE', (t) => {
  const dmd = t.context;
  const result = dmd.read(0x3FBD);
  t.is(result, 0x0);
});
