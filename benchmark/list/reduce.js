require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.reduce()');
const util = require('../../_dev/util');

const reduce = require('../../src/list/reduce');
const { reduce: rreduce } = require('ramda');
const { reduce: lreduce } = require('lodash/fp');

const array = util.makeArray(20000);
const fn = util.sum;

suite
  .add('Array.prototype.reduce', () => {
    array.reduce(fn, 0);
  })
  .add('list.reduce', () => {
    reduce(fn, 0, array);
  })
  .add('ramda.reduce', () => {
    rreduce(fn, 0, array);
  })
  .add('lodash.reduce', () => {
    lreduce(fn, 0, array);
  });

module.exports = suite;
