require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const clone = require('../../src/util/clone').default;
const suite = new Benchmark.Suite('util.clone()');
const { cloneDeep } = require('lodash/fp');

const obj = {
  foo: [1, 2, { bar: 3 }, [[{ foo: { bar: [[1], [2]] } }]]],
  bar: { baz: 1 },
};

suite
  .add('util.clone', () => {
    clone(obj);
  })
  .add('lodash.cloneDeep', () => {
    cloneDeep(obj);
  });

module.exports = suite;
