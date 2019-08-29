'use strict';

import test from 'ava';
import UI from '../../../lib/boards/ui';

test.beforeEach((t) => {
  const memoryPosition = [
    { offset: 0, description: 'valid1', type: 'string' },
    { offset: 1, description: 'valid2', type: 'uint8' },
    { offset: 2, description: 'valid3', type: 'bcd' },
    { offset: 0x3AD, description: 'invalid1', type: 'foo' },
    { description: 'invalid2', type: 'uint8' },
  ];

  const dummyState = {
    dmd: {
      dmdShadedBuffer: [],
      videoRam: [],
    },
    wpc: {
      lampState: [],
      solenoidState: [],
      inputState: [],
    },
    ram: new Uint8Array([ 11, 22, 0x65 ]),
  };

  const dummyStateString = {
    dmd: {
      dmdShadedBuffer: [],
      videoRam: [],
    },
    wpc: {
      lampState: [],
      solenoidState: [],
      inputState: [],
    },
    ram: new Uint8Array([ 65, 65, 65, 0, 65, 65 ]),
  };
  const ui = UI.getInstance(memoryPosition);
  t.context = {
    ui,
    dummyState,
    dummyStateString,
  };
});

test('UI: should filter out invalid memoryPosition entries', (t) => {
  const ui = t.context.ui;
  t.is(ui.memoryPosition.length, 3);
});

test('UI: should fetch data from ram', (t) => {
  const ui = t.context.ui;
  const result = ui.getChangedState(t.context.dummyState);

  t.is(result.memoryPosition.length, 3);
  t.is(result.memoryPosition[0].value, '');
  t.is(result.memoryPosition[1].value, 22);
  t.is(result.memoryPosition[2].value, 65);
});

test('UI: should fetch data from ram (string)', (t) => {
  const ui = t.context.ui;
  const result = ui.getChangedState(t.context.dummyStateString);
  t.is(result.memoryPosition[0].value, 'AAA');
});

test('UI: should cap very long string', (t) => {
  const ui = t.context.ui;
  const data = t.context.dummyStateString;
  data.ram = new Uint8Array(500).fill(65);
  const result = ui.getChangedState(data);
  console.log(result.memoryPosition[0]);
  t.is(result.memoryPosition[0].value.length, 32);
});