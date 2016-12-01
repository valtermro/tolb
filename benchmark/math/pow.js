require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('math.pow()');

const pow = require('../../src/math/pow').default;

suite
  .add('math.pow', () => {
    pow(1000, 2);
  })
  .add('Math.pow', () => {
    Math.pow(2, 1000);
  });

module.exports = suite;
