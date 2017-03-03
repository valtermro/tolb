require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.map()');
const util = require('../../build/util');

const map = require('../../src/object/map');
const { map: rmap } = require('ramda');
const { mapValues } = require('lodash/fp');

const obj = util.makeObject(20000);
const fn = util.id;

suite
  .add('object.map', () => {
    map(fn, obj);
  })
  .add('ramda.map', () => {
    rmap(fn, obj);
  })
  .add('lodash.mapValues', () => {
    mapValues(fn, obj);
  });

module.exports = suite;
