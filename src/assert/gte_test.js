/* eslint-env mocha */
import A from 'assert'
import gte from './gte'

describe('assert.gte(other, value)', () => {
  function test(other, value, wanted) {
    A.equal(gte(other, value), wanted)
  }

  it('checks if "value" is greater than, or equal to, "other"', () => {
    test(1, 2, true)
    test(2, 2, true)
    test(2, 1, false)
  })

  it('compares strings', () => {
    test('bc', 'bde', true)
    test('bc', 'ba', false)
    test('bc', 'ac', false)
  })

  it('allows partial application', () => {
    A.equal(gte(2)(2), true)
  })
})
