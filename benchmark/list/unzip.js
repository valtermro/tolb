require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('list.unzip()');
const util = require('../../_dev/util');

const unzip = require('../../src/list/unzip');
const { unzip: lunzip } = require('lodash/fp');

const array = util.makeArray(20000).map(x => [x, x]);

suite
  .add('list.unzip', () => {
    unzip(array);
  })
  .add('lodash.unzip', () => {
    lunzip(array);
  });

module.exports = suite;
