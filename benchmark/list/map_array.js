require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.map() arrays');
const util = require('../../_dev/util');

const map = require('../../src/list/map');
const { map: rmap } = require('ramda');
const { map: lmap } = require('lodash/fp');

const array = util.makeArray(20000);
const fn = util.double;

suite
  .add('Array.prototype.map', () => {
    array.map(fn);
  })
  .add('list.map', () => {
    map(fn, array);
  })
  .add('ramda.map', () => {
    rmap(fn, array);
  })
  .add('lodash.map', () => {
    lmap(fn, array);
  });

module.exports = suite;
