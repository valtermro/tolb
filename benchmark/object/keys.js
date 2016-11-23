require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('object.keys()')
const util = require('../../_dev/util')

const keys = require('../../src/object/keys').default
const { keys: rkeys } = require('ramda')
const { keys: lkeys } = require('lodash/fp')

const obj = util.makeObject(20000)

suite
  .add('Object.keys', () => {
    Object.keys(obj)
  })
  .add('object.keys', () => {
    keys(obj)
  })
  .add('ramda.keys', () => {
    rkeys(obj)
  })
  .add('lodash.keys', () => {
    lkeys(obj)
  })

module.exports = suite
