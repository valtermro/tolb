require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('function.curry() arity == 3');
const util = require('../../build/util');

const curry = require('../../src/function/curry');
const { curry: rcurry } = require('ramda');
const { curry: lcurry } = require('lodash/fp');

const fn = util.foo3;

suite
  .add('function.curry', () => {
    curry(fn)(1, 2, 3);
    curry(fn)(1)(2)(3);
  })
  .add('ramda.curry', () => {
    rcurry(fn)(1, 2, 3);
    rcurry(fn)(1)(2)(3);
  })
  .add('lodash.curry', () => {
    lcurry(fn)(1, 2, 3);
    lcurry(fn)(1)(2)(3);
  });

module.exports = suite;
