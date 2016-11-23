require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('list.isString()')

const isString = require('../../src/list/isString').default
const { isString: lisString } = require('lodash/fp')

suite
  .add('typeof x === "string"', () => {
    typeof '' === 'string' // eslint-disable-line
    typeof 0 === 'string' // eslint-disable-line
  })
  .add('list.isString', () => {
    isString('')
    isString(0)
  })
  .add('lodash.isString', () => {
    lisString('')
    lisString(0)
  })

module.exports = suite
