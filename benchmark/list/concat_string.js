require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('list.concat() strings')
const util = require('../../_dev/util')

const concat = require('../../src/list/concat').default
const { concat: rconcat } = require('ramda')
const { concat: lconcat } = require('lodash/fp')

const list = util.makeString(30000)
const other = util.makeString(29000)

suite
  .add('String.prototype.concat', () => {
    list.concat(other)
  })
  .add('list.concat', () => {
    concat(other, list)
  })
  .add('ramda.concat', () => {
    rconcat(other, list)
  })
  .add('lodash.concat', () => {
    lconcat(other, list)
  })

module.exports = suite
