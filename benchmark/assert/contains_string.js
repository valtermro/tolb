require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('assert.contains() strings');
const util = require('../../_dev/util');

const contains = require('../../src/assert/contains').default;
const { contains: rcontains } = require('ramda');
const { contains: lcontains } = require('lodash/fp');

const str = util.makeString(20000);

suite
  .add('assert.contains', () => {
    contains('z', str);
  })
  .add('ramda.contains', () => {
    rcontains('z', str);
  })
  .add('lodash.contains', () => {
    lcontains('z', str);
  });

module.exports = suite;
