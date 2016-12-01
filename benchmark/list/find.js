require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.find()');
const util = require('../../_dev/util');

const find = require('../../src/list/find').default;
const { find: rfind } = require('ramda');
const { find: lfind } = require('lodash/fp');

const array = util.makeArray(20000);
const pred = x => x > 19998;

suite
  .add('Array.prototype.find', () => {
    array.find(pred);
  })
  .add('list.find', () => {
    find(pred, array);
  })
  .add('ramda.find', () => {
    rfind(pred, array);
  })
  .add('lodash.find', () => {
    lfind(pred, array);
  });

module.exports = suite;
