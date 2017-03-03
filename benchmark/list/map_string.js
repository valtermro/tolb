require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.map() strings');
const util = require('../../build/util');

const map = require('../../src/list/map');
const { map: rmap } = require('ramda');
const { map: lmap } = require('lodash/fp');

const str = util.makeString(20000);
const fn = util.toUpper;

suite
  .add('list.map', () => {
    map(fn, str);
  })
  .add('ramda.map', () => {
    rmap(fn, str);
  })
  .add('lodash.map', () => {
    lmap(fn, str);
  });

module.exports = suite;
