require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.slice() arrays');
const util = require('../../build/util');

const slice = require('../../src/list/slice');
const { slice: rslice } = require('ramda');
const { slice: lslice } = require('lodash/fp');

const array = util.makeArray(20000);

suite
  .add('Array.prototype.slice', () => {
    array.slice(10, 19990);
  })
  .add('list.slice', () => {
    slice(10, 19990, array);
  })
  .add('ramda.slice', () => {
    rslice(10, 19990, array);
  })
  .add('lodash.slice', () => {
    lslice(10, 19990, array);
  });

module.exports = suite;
