require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('function.curry() arity == 2');
const util = require('../../build/util');

const curry = require('../../src/function/curry');
const { curry: rcurry } = require('ramda');
const { curry: lcurry } = require('lodash/fp');

const fn = util.foo2;

suite
  .add('function.curry', () => {
    curry(fn)(1, 2);
    curry(fn)(1)(2);
  })
  .add('ramda.curry', () => {
    rcurry(fn)(1, 2);
    rcurry(fn)(1)(2);
  })
  .add('lodash.curry', () => {
    lcurry(fn)(1, 2);
    lcurry(fn)(1)(2);
  });

module.exports = suite;
