require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.values()');
const util = require('../../_dev/util');

const values = require('../../src/object/values').default;
const { values: rvalues } = require('ramda');
const { values: lvalues } = require('lodash/fp');

const obj = util.makeObject(60000);

suite
  .add('object.values', () => {
    values(obj);
  })
  .add('ramda.values', () => {
    rvalues(obj);
  })
  .add('lodash.values', () => {
    lvalues(obj);
  });

module.exports = suite;
