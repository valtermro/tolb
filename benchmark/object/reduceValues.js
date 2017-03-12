require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.reduceValues()');
const util = require('../../build/util');

const reduceValues = require('../../src/object/reduceValues');
const { reduce: lreduce } = require('lodash/fp');

const fn = util.sum;
const obj = util.makeObject(20000);

suite
  .add('object.reduceValues', () => {
    reduceValues(fn, 0, obj);
  })
  .add('lodash.reduce', () => {
    lreduce(fn, 0, obj);
  });

module.exports = suite;
