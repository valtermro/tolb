require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('function.rpartial()')
const util = require('../../_dev/util')

const rpartial = require('../../src/function/rpartial').default
const { partialRight: rpartialRight } = require('ramda')
const { partialRight: lpartialRight } = require('lodash/fp')

const fn = util.foo6

suite
  .add('function.rpartial', () => {
    rpartial(fn, [1, 2, 3])(4, 5, 6)
  })
  .add('ramda.partialRight', () => {
    rpartialRight(fn, [1, 2, 3])(4, 5, 6)
  })
  .add('lodash.partialRight', () => {
    lpartialRight(fn, [1, 2, 3])(4, 5, 6)
  })

module.exports = suite
