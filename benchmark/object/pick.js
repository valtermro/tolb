require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.pick()');
const util = require('../../build/util');

const pick = require('../../src/object/pick');
const { pick: rpick } = require('ramda');
const { pick: lpick } = require('lodash/fp');

const obj = Object.assign(
  {},
  util.makeObject(10000),
  { id: 10 },
  util.makeObject(10000, 10000),
  { admin: true },
  util.makeObject(10000, 30000),
  { name: 'foo' }
);

suite
  .add('object.pick', () => {
    pick(['id', 'admin', obj]);
  })
  .add('ramda.pick', () => {
    rpick(['id', 'admin', obj]);
  })
  .add('lodash.pick', () => {
    lpick(['id', 'admin', obj]);
  });

module.exports = suite;
