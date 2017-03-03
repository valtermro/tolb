require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('function.partial()');
const util = require('../../build/util');

const partial = require('../../src/function/partial');
const { partial: rpartial } = require('ramda');
const { partial: lpartial } = require('lodash/fp');

const fn = util.foo6;

suite
  .add('function.partial', () => {
    partial(fn, [1, 2, 3])(4, 5, 6);
  })
  .add('ramda.partial', () => {
    rpartial(fn, [1, 2, 3])(4, 5, 6);
  })
  .add('lodash.partial', () => {
    lpartial(fn, [1, 2, 3])(4, 5, 6);
  });

module.exports = suite;
