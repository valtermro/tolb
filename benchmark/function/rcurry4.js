require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('function.rcurry() arity == 4');
const util = require('../../_dev/util');

const rcurry = require('../../src/function/rcurry');
const { curryRight } = require('lodash/fp');

const fn = util.foo4;

suite
  .add('function.rcurry', () => {
    let f = rcurry(fn);
    for (let i = 0; i < fn.length; i++)
      f = f(i);
  })
  .add('lodash.curryRight', () => {
    let f = curryRight(fn);
    for (let i = 0; i < fn.length; i++)
      f = f(i);
  });

module.exports = suite;
