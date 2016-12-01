require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('object.merge()');
const util = require('../../_dev/util');

const merge = require('../../src/object/merge').default;
const { merge: rmerge } = require('ramda');
const { merge: lmerge } = require('lodash/fp');

const obj1 = util.makeObject(20000);
const obj2 = util.makeObject(18000, 20000);

suite
  .add('Object.assign', () => {
    Object.assign({}, obj1, obj2);
  })
  .add('object.merge', () => {
    merge(obj1, obj2);
  })
  .add('ramda.merge', () => {
    rmerge(obj1, obj2);
  })
  .add('lodash.merge', () => {
    lmerge(obj1, obj2);
  });

module.exports = suite;
