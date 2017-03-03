require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.some()');
const util = require('../../build/util');

const some = require('../../src/list/some');
const { any } = require('ramda');
const { some: lsome } = require('lodash/fp');

const array = util.makeArray(20000);
const pred = x => x > 19999;

suite
  .add('Array.prototype.some', () => {
    array.some(pred);
  })
  .add('list.some', () => {
    some(pred, array);
  })
  .add('ramda.any', () => {
    any(pred, array);
  })
  .add('lodash.some', () => {
    lsome(pred, array);
  });

module.exports = suite;
