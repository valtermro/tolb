require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.contains() strings');
const util = require('../../build/util');

const contains = require('../../src/list/contains');
const { contains: rcontains } = require('ramda');
const { contains: lcontains } = require('lodash/fp');

const str = util.makeString(20000);

suite
  .add('list.contains', () => {
    contains('z', str);
  })
  .add('ramda.contains', () => {
    rcontains('z', str);
  })
  .add('lodash.contains', () => {
    lcontains('z', str);
  });

module.exports = suite;
