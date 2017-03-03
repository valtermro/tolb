require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.omit()');
const util = require('../../build/util');

const omit = require('../../src/object/omit');
const { omit: romit } = require('ramda');
const { omit: lomit } = require('lodash/fp');

const obj = Object.assign(
  {},
  util.makeObject(10000),
  { id: 10 },
  util.makeObject(10000, 10000),
  { admin: true },
  util.makeObject(10000, 30000)
);

suite
  .add('object.omit', () => {
    omit(['id', 'admin', obj]);
  })
  .add('ramda.omit', () => {
    romit(['id', 'admin', obj]);
  })
  .add('lodash.omit', () => {
    lomit(['id', 'admin', obj]);
  });

module.exports = suite;
