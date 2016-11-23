/* eslint-env mocha */
import A from 'assert'
import equals from './equals'

describe('assert.equals(left, right)', () => {
  function test(left, right, wanted) {
    A.equal(equals(left, right), wanted)
  }

  it('checks if "left" is equal to "right"', () => {
    test('a', 'a', true)
    test(1, 1, true)
    test(1, 2, false)
    test('a', 'b', false)
  })

  it('tests types', () => {
    test(1, 1, true)
    test('1', '1', true)
    test(1, '1', false)
    test(null, undefined, false)
    test(null, '', false)
    test(false, 0, false)
    test(null, 0, false)
    test(false, null, false)
    test(null, '', false)
    test([], {}, false)
    test({}, [], false)
  })

  it('tests Number values', () => {
    test(1, 1, true)
    test(new Number(0), 0, false) // eslint-disable-line
    test(NaN, NaN, true)
    test(-1, 1, false)
    test(0, -0, false)
    test(-0, 0, false)
    test(-0, -0, true)
  })

  it('compares arrays', () => {
    test([0, NaN, 1], [0, NaN, 1], true)
    test([-0, NaN, 1], [0, NaN, 1], false)
    test([0, NaN, 1], [2, NaN, 1], false)
    test([1, undefined], [1, undefined, undefined], false)
    test([1, undefined, undefined], [1, undefined], false)
  })

  it('compares objects', () => {
    test({ a: 1, b: 2 }, { b: 2, a: 1 }, true)
    test({ a: 0, b: NaN, c: 1 }, { a: 0, b: NaN, c: 1 }, true)
    test({ a: 0, b: NaN, c: 1 }, { a: -0, b: NaN, c: 1 }, false)
    test({ a: 1 }, {}, false)
    test({}, { a: 1 }, false)
  })

  it('compares deeply', () => {
    test([{ a: 1, b: [NaN, { c: 0 }] }], [{ a: 1, b: [NaN, { c: 0 }] }], true)
    test([{ a: 1, b: [NaN, { c: 0 }] }], [{ a: 1, b: [NaN, { d: 0 }] }], false)
  })

  it('allows partial application', () => {
    A.equal(equals(1)(1), true)
  })
})
