require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('list.reverse() strings')
const util = require('../../_dev/util')

const reverse = require('../../src/list/reverse').default
const { reverse: rreverse } = require('ramda')
const { reverse: lreverse } = require('lodash/fp')

const str = util.makeString(20000)

suite
  .add('list.reverse', () => {
    reverse(str)
  })
  .add('ramda.reverse', () => {
    rreverse(str)
  })
  .add('lodash.reverse', () => {
    lreverse(str)
  })

module.exports = suite
