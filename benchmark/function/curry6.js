require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('function.curry() arity == 6');
const util = require('../../build/util');

const curry = require('../../src/function/curry');
const { curry: rcurry } = require('ramda');
const { curry: lcurry } = require('lodash/fp');

const fn = util.foo6;

suite
  .add('function.curry', () => {
    curry(fn)(1, 2, 3, 4, 5, 6);
    curry(fn)(1)(2)(3)(4)(5)(6);
  })
  .add('ramda.curry', () => {
    rcurry(fn)(1, 2, 3, 4, 5, 6);
    rcurry(fn)(1)(2)(3)(4)(5)(6);
  })
  .add('lodash.curry', () => {
    lcurry(fn)(1, 2, 3, 4, 5, 6);
    lcurry(fn)(1)(2)(3)(4)(5)(6);
  });

module.exports = suite;
