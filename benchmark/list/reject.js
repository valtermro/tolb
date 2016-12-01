require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.reject()');
const util = require('../../_dev/util');

const reject = require('../../src/list/reject').default;
const { reject: rreject } = require('ramda');
const { reject: lreject } = require('lodash/fp');

const array = util.makeArray(20000);
const pred = util.isEven;

suite
  .add('list.reject', () => {
    reject(pred, array);
  })
  .add('ramda.reject', () => {
    rreject(pred, array);
  })
  .add('lodash.reject', () => {
    lreject(pred, array);
  });

module.exports = suite;
