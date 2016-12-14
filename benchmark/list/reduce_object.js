require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.reduce() objects');
const util = require('../../_dev/util');

const reduce = require('../../src/list/reduce').default;
const { reduce: lreduce } = require('lodash/fp');

const obj = util.makeObject(20000);
const fn = util.sum;

suite
  .add('list.reduce', () => {
    reduce(fn, 0, obj);
  })
  .add('lodash.reduce', () => {
    lreduce(fn, 0, obj);
  });

module.exports = suite;
