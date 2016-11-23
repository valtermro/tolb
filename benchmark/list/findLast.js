require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('list.findLast()')
const util = require('../../_dev/util')

const findLast = require('../../src/list/findLast').default
const { findLast: rfindLast } = require('ramda')
const { findLast: lfindLast } = require('lodash/fp')

const array = util.makeArray(20000)
const pred = x => x === 100

suite
  .add('list.findLast', () => {
    findLast(pred, array)
  })
  .add('ramda.findLast', () => {
    rfindLast(pred, array)
  })
  .add('lodash.findLast', () => {
    lfindLast(pred, array)
  })

module.exports = suite
