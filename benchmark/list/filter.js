require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.filter()');
const util = require('../../_dev/util');

const filter = require('../../src/list/filter').default;
const { filter: rfilter } = require('ramda');
const { filter: lfilter } = require('lodash/fp');

const array = util.makeArray(20000);
const pred = util.isEven;

suite
  .add('Array.prototype.filter', () => {
    array.filter(pred);
  })
  .add('list.filter', () => {
    filter(pred, array);
  })
  .add('ramda.filter', () => {
    rfilter(pred, array);
  })
  .add('lodash.filter', () => {
    lfilter(pred, array);
  });

module.exports = suite;
