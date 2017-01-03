require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.join()');
const util = require('../../_dev/util');

const join = require('../../src/list/join');
const { join: rjoin } = require('ramda');
const { join: ljoin } = require('lodash/fp');

const array = util.makeArray(20000);

suite
  .add('Array.join() ', () => {
    array.join(',');
  })
  .add('list.join() ', () => {
    join(',', array);
  })
  .add('ramda.join() ', () => {
    rjoin(',', array);
  })
  .add('lodash.join()', () => {
    ljoin(',', array);
  });

module.exports = suite;
