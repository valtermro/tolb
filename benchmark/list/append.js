require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('list.append()')
const util = require('../../_dev/util')

const append = require('../../src/list/append').default
const { append: rappend } = require('ramda')

const array = util.makeArray(20000)

suite
  .add('list.append', () => {
    append(1, array)
  })
  .add('ramda.append', () => {
    rappend(1, array)
  })

module.exports = suite
