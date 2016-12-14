require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.each() arrays');
const util = require('../../_dev/util');

const each = require('../../src/list/each').default;
const { forEach } = require('ramda');
const { each: leach } = require('lodash/fp');

const array = util.makeArray(20000);

const fn = util.double;

suite
  .add('Array.prototype.forEach', () => {
    array.forEach(fn);
  })
  .add('list.each', () => {
    each(fn, array);
  })
  .add('ramda.forEach', () => {
    forEach(fn, array);
  })
  .add('loadash.each', () => {
    leach(fn, array);
  });

module.exports = suite;
