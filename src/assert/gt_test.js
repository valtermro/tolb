/* eslint-env mocha */
import A from 'assert'
import gt from './gt'

describe('assert.gt(other, value)', () => {
  function test(other, value, wanted) {
    A.equal(gt(other, value), wanted)
  }

  it('checks if "value" is greater than "other"', () => {
    test(1, 2, true)
    test(2, 1, false)
    test(2, 2, false)
  })

  it('compares strings', () => {
    test('bc', 'de', true)
    test('bc', 'd', true)
    test('bc', 'ab', false)
  })

  it('allows partial application', () => {
    A.equal(gt(1)(2), true)
  })
})
