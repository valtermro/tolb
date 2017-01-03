require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('function.partial() with placeholders');
const util = require('../../_dev/util');

const partial = require('../../src/function/partial');
const _ = require('lodash/fp');
const { partial: lpartial } = _;

const fn = util.foo6;

suite
  .add('function.partial', () => {
    partial(fn, [1, partial, 3, partial, 4])(4, 5, 6);
  })
  .add('lodash.partial', () => {
    lpartial(fn, [1, _, 3, _, 4])(4, 5, 6);
  });

module.exports = suite;
