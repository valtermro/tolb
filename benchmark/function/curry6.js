require('../../_dev/babel.register')
const Benchmark = require('Benchmark')
const suite = new Benchmark.Suite('function.curry() arity == 6')
const util = require('../../_dev/util')

const curry = require('../../src/function/curry').default
const { curry: rcurry } = require('ramda')
const { curry: lcurry } = require('lodash/fp')

const fn = util.foo6

suite
  .add('function.curry', () => {
    let f = curry(fn)
    for (let i = 0; i < fn.length; i++)
      f = f(i)
  })
  .add('ramda.curry', () => {
    let f = rcurry(fn)
    for (let i = 0; i < fn.length; i++)
      f = f(i)
  })
  .add('lodash.curry', () => {
    let f = lcurry(fn)
    for (let i = 0; i < fn.length; i++)
      f = f(i)
  })

module.exports = suite
