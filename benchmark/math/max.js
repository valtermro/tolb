require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('math.max()')

const max = require('../../src/math/max').default
const { max: rmax } = require('ramda')
const { max: lmax } = require('lodash/fp')

suite
  .add('Math.max', () => {
    Math.max(1, 2)
  })
  .add('math.max', () => {
    max(1, 2)
  })
  .add('ramda.max', () => {
    rmax(1, 2)
  })
  .add('lodash.max', () => {
    lmax([1, 2])
  })

module.exports = suite
