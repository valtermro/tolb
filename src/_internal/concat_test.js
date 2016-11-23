/* eslint-env mocha */
import A from 'assert'
import concat from './concat'

describe('_internal.concat(left, right)', () => {
  it('appends the values in "right" to "left"', () => {
    const left = [1, 2, 3]
    const right = [4, 5]

    A.deepEqual(concat(left, right), [1, 2, 3, 4, 5])
    A.deepEqual(left, [1, 2, 3])
    A.deepEqual(right, [4, 5])
  })
})
