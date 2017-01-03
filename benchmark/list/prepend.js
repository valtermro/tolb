require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.prepend()');
const util = require('../../_dev/util');

const prepend = require('../../src/list/prepend');
const { prepend: rprepend } = require('ramda');

const array = util.makeArray(20000);

suite
  .add('list.prepend', () => {
    prepend(1, array);
  })
  .add('ramda.prepend', () => {
    rprepend(1, array);
  });

module.exports = suite;
