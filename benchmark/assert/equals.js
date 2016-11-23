require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('assert.equals()')
const util = require('../../_dev/util')

const equals = require('../../src/assert/equals').default
const { equals: requals } = require('ramda')
const { equals: lequals } = require('lodash/fp')

const obj1 = util.makeArray(100)
const obj2 = util.makeArray(100)
obj1[100] = util.makeObject(100)
obj2[100] = util.makeObject(100)
obj1[100]['key-10'] = util.makeArray(100)
obj2[100]['key-10'] = util.makeArray(100)

suite
  .add('assert.equals', () => {
    equals(obj1, obj2)
  })
  .add('ramda.equals', () => {
    requals(obj1, obj2)
  })
  .add('lodash.equals', () => {
    lequals(obj1, obj2)
  })

module.exports = suite
