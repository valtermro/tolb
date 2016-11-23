/* eslint-env mocha */
import A from 'assert'
import slice from './slice'
import util from '../../_dev/util'

describe('list.slice(start, end, list)', () => {
  function test(src) {
    const T = typeof src === 'string' ? String : Array
    A.deepEqual(slice(0, null, src), T.prototype.slice.call(src, 0))
    A.deepEqual(slice(0, undefined, src), T.prototype.slice.call(src, 0))
    A.deepEqual(slice(0, 0, src), T.prototype.slice.call(src, 0, 0))
    A.deepEqual(slice(0, 4, src), T.prototype.slice.call(src, 0, 4))
    A.deepEqual(slice(0, 3, src), T.prototype.slice.call(src, 0, 3))
    A.deepEqual(slice(1, 3, src), T.prototype.slice.call(src, 1, 3))
    A.deepEqual(slice(2, 3, src), T.prototype.slice.call(src, 2, 3))
    A.deepEqual(slice(3, 3, src), T.prototype.slice.call(src, 3, 3))
    A.deepEqual(slice(1, -1, src), T.prototype.slice.call(src, 1, -1))
    A.deepEqual(slice(1, -2, src), T.prototype.slice.call(src, 1, -2))
    A.deepEqual(slice(2, -2, src), T.prototype.slice.call(src, 2, -2))
    A.deepEqual(slice(1, -3, src), T.prototype.slice.call(src, 1, -3))
    A.deepEqual(slice(-3, 2, src), T.prototype.slice.call(src, -3, 2))
    A.deepEqual(slice(-3, 3, src), T.prototype.slice.call(src, -3, 3))
    A.deepEqual(slice(-3, 4, src), T.prototype.slice.call(src, -3, 4))
    A.deepEqual(slice(-4, 4, src), T.prototype.slice.call(src, -4, 4))
    A.deepEqual(slice(-3, 10, src), T.prototype.slice.call(src, -3, 10))
    A.deepEqual(slice(-10, 10, src), T.prototype.slice.call(src, -10, 10))
    A.deepEqual(slice(-10, -10, src), T.prototype.slice.call(src, -10, -10))
    A.deepEqual(slice(0, 0, src), T.prototype.slice.call(src, 0, 0))
    A.deepEqual(slice(1, 0, src), T.prototype.slice.call(src, 1, 0))
    A.deepEqual(slice(2, 0, src), T.prototype.slice.call(src, 2, 0))
    A.deepEqual(slice(3, 0, src), T.prototype.slice.call(src, 3, 0))
    A.deepEqual(slice(5, 0, src), T.prototype.slice.call(src, 5, 0))
  }

  it('deals with strings', () => {
    test('abcd')
    test('')
  })

  it('deals with arrays', () => {
    const array = [1, 2, 3, 4]
    test(array)
    test([])
    A.deepEqual(array, [1, 2, 3, 4])
  })

  it('deals with array-like objects', () => {
    const arrayLike = util.arrayLike(1, 2, 3, 4)
    test(arrayLike)
    test(util.arrayLike())
    A.deepEqual(arrayLike, util.arrayLike(1, 2, 3, 4))
  })

  it('allows partial application', () => {
    const array = [1, 2, 3, 4]
    A.deepEqual(slice(1)(null)(array), [2, 3, 4])
    A.deepEqual(slice(1)(3, array), [2, 3])
    A.deepEqual(slice(1, -1)(array), [2, 3])
  })
})
