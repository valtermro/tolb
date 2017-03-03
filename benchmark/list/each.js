require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.each()');
const util = require('../../build/util');

const each = require('../../src/list/each');
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
