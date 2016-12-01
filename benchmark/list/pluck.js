require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.pluck()');
const util = require('../../_dev/util');

const pluck = require('../../src/list/pluck').default;
const { pluck: rpluck } = require('ramda');
const { pluck: lpluck } = require('lodash/fp');

const array = util.makeArray(20000).map(x => ({ id: x }));

suite
  .add('list.pluck', () => {
    pluck('id', array);
  })
  .add('ramda.pluck', () => {
    rpluck('id', array);
  })
  .add('lodash.pluck', () => {
    lpluck('id', array);
  });

module.exports = suite;
