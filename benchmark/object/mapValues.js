require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.mapValues()');
const util = require('../../build/util');

const mapValues = require('../../src/object/mapValues');
const { map: rmap } = require('ramda');
const { mapValues: lmapValues } = require('lodash/fp');

const obj = util.makeObject(20000);
const fn = util.id;

suite
  .add('object.mapValues', () => {
    mapValues(fn, obj);
  })
  .add('ramda.map', () => {
    rmap(fn, obj);
  })
  .add('lodash.mapValues', () => {
    lmapValues(fn, obj);
  });

module.exports = suite;
