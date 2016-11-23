/* eslint-env mocha */
import A from 'assert'
import range from './range'

describe('list.range(start, end)', () => {
  it('returns an array of numbers from "start" to "end"', () => {
    A.deepEqual(range(0, 0), [])
    A.deepEqual(range(0, 1), [0])
    A.deepEqual(range(0, 5), [0, 1, 2, 3, 4])
    A.deepEqual(range(1, 5), [1, 2, 3, 4])
    A.deepEqual(range(3, 5), [3, 4])
    A.deepEqual(range(3, 3), [])
    A.deepEqual(range(4, 3), [])
  })

  it('allows partial application', () => {
    A.deepEqual(range(1)(5), [1, 2, 3, 4])
  })
})
