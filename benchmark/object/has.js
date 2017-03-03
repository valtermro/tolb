require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.has()');
const util = require('../../build/util');

const has = require('../../src/object/has');
const { hasIn: rhas } = require('ramda');
const { hasIn: lhas } = require('lodash/fp');

const obj = util.makeObject(60000);

suite
  .add('object.has', () => {
    has('key-19999', obj);
  })
  .add('ramda.has', () => {
    rhas('key-19999', obj);
  })
  .add('lodash.has', () => {
    lhas('key-19999', obj);
  });

module.exports = suite;
