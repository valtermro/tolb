require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.each() objects');
const util = require('../../_dev/util');

const each = require('../../src/list/each').default;
const { each: leach } = require('lodash/fp');

const obj = util.makeObject(10);

const fn = util.double;

suite
  .add('list.each', () => {
    each(fn, obj);
  })
  .add('loadash.each', () => {
    leach(fn, obj);
  });

module.exports = suite;
