require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('list.zip()')
const util = require('../../_dev/util')

const zip = require('../../src/list/zip').default
const { zip: rzip } = require('ramda')
const { zip: lzip } = require('lodash/fp')

const left = util.makeArray(20000)
const right = util.makeArray(20050)

suite
  .add('list.zip', () => {
    zip(left, right)
  })
  .add('ramda.zip', () => {
    rzip(left, right)
  })
  .add('lodash.zip', () => {
    lzip(left, right)
  })

module.exports = suite
