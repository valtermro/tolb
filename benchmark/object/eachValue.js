require('../../build/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.eachValue()');
const util = require('../../build/util');

const eachValue = require('../../src/object/eachValue');
const { forEachObjIndexed } = require('ramda');
const { forOwn } = require('lodash/fp');

const obj1 = util.makeObject(20000);
const fn = util.id;

suite
  .add('native Object.key(obj).forEach', () => {
    Object.keys(obj1).forEach(fn);
  })
  .add('object.eachValue', () => {
    eachValue(fn, obj1);
  })
  .add('ramda.forEachObjIndexed', () => {
    forEachObjIndexed(fn, obj1);
  })
  .add('lodash.forOwn', () => {
    forOwn(fn, obj1);
  });

module.exports = suite;
