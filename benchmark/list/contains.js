require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('list.contains() arrays')
const util = require('../../_dev/util')

const contains = require('../../src/list/contains').default
const { contains: rcontains } = require('ramda')
const { contains: lcontains } = require('lodash/fp')

const array = util.makeArray(20000)

suite
  .add('list.contains', () => {
    contains(19999, array)
    contains([1], array)
    contains({ a: 1 }, array)
  })
  .add('ramda.contains', () => {
    rcontains(19999, array)
    rcontains([1], array)
    rcontains({ a: 1 }, array)
  })
  .add('lodash.contains', () => {
    lcontains(19999, array)
    lcontains([1], array)
    lcontains({ a: 1 }, array)
  })

module.exports = suite
