require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.isArray()');

const isArray = require('../../src/list/isArray').default;
const { isArray: lisArray } = require('lodash/fp');

suite
  .add('Array.isArray', () => {
    Array.isArray([]);
    Array.isArray(new Array());
    Array.isArray('');
  })
  .add('list.isArray', () => {
    isArray([]);
    isArray(new Array());
    isArray('');
  })
  .add('lodash.isArray', () => {
    lisArray([]);
    lisArray(new Array());
    lisArray('');
  });

module.exports = suite;
