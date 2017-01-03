require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const util = require('../../_dev/util');

const clone = require('../../src/util/clone');
const suite = new Benchmark.Suite('util.clone()');
const { cloneDeep } = require('lodash/fp');

const obj = {
  foo: [1, 2, { bar: 3 }, [[{ foo: { bar: [[1], [2]] } }]]],
  bar: util.makeObject(1000),
};

suite
  .add('util.clone', () => {
    clone(obj);
  })
  .add('lodash.cloneDeep', () => {
    cloneDeep(obj);
  });

module.exports = suite;
