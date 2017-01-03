require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.hasOwn()');
const util = require('../../_dev/util');

const hasOwn = require('../../src/object/hasOwn');
const { hasIn: rhas } = require('ramda');
const { hasIn: lhas } = require('lodash/fp');

const obj = util.makeObject(60000);

suite
  .add('object.has', () => {
    hasOwn('key-19999', obj);
  })
  .add('ramda.has', () => {
    rhas('key-19999', obj);
  })
  .add('lodash.has', () => {
    lhas('key-19999', obj);
  });

module.exports = suite;
