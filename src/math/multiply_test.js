/* eslint-env mocha */
import A from 'assert'
import multiply from './multiply'

describe('math.multiply(multiplier, multiplicand)', () => {
  it('multiplies two numbers', () => {
    const assert = (x, y) => A.equal(multiply(x, y), x * y)
    assert(1, 2)
    assert(3, 2)
    assert(3, -2)
    assert(-3, -2)
  })

  it('allows partial application', () => {
    A.equal(multiply(2)(3), 6)
  })
})
