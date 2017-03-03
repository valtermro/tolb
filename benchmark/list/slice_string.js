require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.slice() strings');
const util = require('../../build/util');

const slice = require('../../src/list/slice');
const { slice: rslice } = require('ramda');
const { slice: lslice } = require('lodash/fp');

const str = util.makeString(20000);

suite
  .add('String.prototype.slice', () => {
    str.slice(10, -10);
  })
  .add('list.slice', () => {
    slice(10, -10, str);
  })
  .add('ramda.slice', () => {
    rslice(10, -10, str);
  })
  .add('lodash.slice', () => {
    lslice(10, -10, str);
  });

module.exports = suite;
