require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.each()');
const util = require('../../_dev/util');

const each = require('../../src/object/each');
const { forEachObjIndexed } = require('ramda');
const { forOwn } = require('lodash/fp');

const obj1 = util.makeObject(20000);
const obj2 = util.arrayLike.apply(undefined, util.makeArray(20000));
const fn = util.id;

suite
  .add('native Object.key(obj).forEach', () => {
    Object.keys(obj1).forEach(fn);
    Object.keys(obj2).forEach(fn);
  })
  .add('object.each', () => {
    each(fn, obj1);
    each(fn, obj2);
  })
  .add('ramda.forEachObjIndexed', () => {
    forEachObjIndexed(fn, obj1);
    forEachObjIndexed(fn, obj2);
  })
  .add('lodash.forOwn', () => {
    forOwn(fn, obj1);
    forOwn(fn, obj2);
  });

module.exports = suite;
