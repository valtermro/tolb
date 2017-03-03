require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('combinator.compose()');

const compose = require('../../src/combinator/compose');
const { compose: rcompose } = require('ramda');
const { compose: lcompose } = require('lodash/fp');

const add5 = x => x + 5;
const add10 = x => x + 10;
const sum = (x, y) => x + y;

suite
  .add('combinator.compose', () => {
    compose(add5, add10, sum)(10, 5);
  })
  .add('ramda.compose', () => {
    rcompose(add5, add10, sum)(10, 5);
  })
  .add('lodash.compose', () => {
    lcompose(add5, add10, sum)(10, 5);
  });

module.exports = suite;
