require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.map() objects');
const util = require('../../_dev/util');

const map = require('../../src/list/map').default;
const { map: rmap } = require('ramda');
const { map: lmap } = require('lodash/fp');

const obj = util.makeObject(20000);
const fn = util.double;

suite
  .add('list.map', () => {
    map(fn, obj);
  })
  .add('ramda.map', () => {
    rmap(fn, obj);
  })
  .add('lodash.map', () => {
    lmap(fn, obj);
  });

module.exports = suite;
