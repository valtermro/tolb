require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.reverse() arrays');
const util = require('../../_dev/util');

const reverse = require('../../src/list/reverse').default;
const { reverse: rreverse } = require('ramda');
const { reverse: lreverse } = require('lodash/fp');

const array = util.makeArray(30000);

suite
  .add('list.reverse', () => {
    reverse(array);
  })
  .add('ramda.reverse', () => {
    rreverse(array);
  })
  .add('lodash.reverse', () => {
    lreverse(array);
  });

module.exports = suite;
