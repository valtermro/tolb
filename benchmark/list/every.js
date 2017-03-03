require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.every()');
const util = require('../../build/util');

const every = require('../../src/list/every');
const { all } = require('ramda');
const { every: levery } = require('lodash/fp');

const array = util.makeArray(20000);
const pred = x => x < 19999;

suite
  .add('Array.prototype.every', () => {
    array.every(pred);
  })
  .add('list.every', () => {
    every(pred, array);
  })
  .add('ramda.all', () => {
    all(pred, array);
  })
  .add('lodash.every', () => {
    levery(pred, array);
  });

module.exports = suite;
