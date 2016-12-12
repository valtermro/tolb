require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('assert.contains() objects');
const util = require('../../_dev/util');

const contains = require('../../src/assert/contains').default;
const { contains: rcontains } = require('ramda');
const { contains: lcontains } = require('lodash/fp');

const obj = util.makeObject(20000);

suite
  .add('assert.contains', () => {
    contains(19999, obj);
    contains([1], obj);
    contains({ a: 1 }, obj);
  })
  .add('ramda.contains', () => {
    rcontains(19999, obj);
    rcontains([1], obj);
    rcontains({ a: 1 }, obj);
  })
  .add('lodash.contains', () => {
    lcontains(19999, obj);
    lcontains([1], obj);
    lcontains({ a: 1 }, obj);
  });

module.exports = suite;
