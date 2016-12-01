require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('function.curry() arity == 2');
const util = require('../../_dev/util');

const rcurry = require('../../src/function/rcurry').default;
const { curryRight } = require('lodash/fp');

const fn = util.foo2;

suite
  .add('function.curry', () => {
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
