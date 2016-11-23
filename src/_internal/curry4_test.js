/* eslint-env mocha */
import A from 'assert'
import curry4 from './curry4'
import util from '../../_dev/util'

describe('_iternal.curry4(fn, reverse)', () => {
  const values = [
    [1, 2, 3, 4],
    [1, 3, 4, 5],
    [1, 2, 4, 5],
    [1, 2, 3, 5],
    [1, 2, 3, undefined],
    [1, 2, undefined, undefined],
    [1, undefined, undefined, undefined],
  ]

  describe('"reverse" = false', () => test(false))
  describe('"reverse" = true', () => test(true))

  function test(reverse) {
    const curried = curry4(util.foo4, reverse)
    const v0 = reverse ? values[0].slice(0).reverse() : values[0]
    const v1 = reverse ? values[1].slice(0).reverse() : values[1]
    const v2 = reverse ? values[2].slice(0).reverse() : values[2]
    const v3 = reverse ? values[3].slice(0).reverse() : values[3]
    const v4 = reverse ? values[4].slice(0).reverse() : values[4]
    const v5 = reverse ? values[5].slice(0).reverse() : values[5]
    const v6 = reverse ? values[6].slice(0).reverse() : values[6]

    it('converts "fn" into a function that can be used as a curried function', () => {
      const assert = v => A.deepEqual(v, v0)

      assert(curried(1)(2)(3)(4))
      assert(curried(1)(2)(3, 4))
      assert(curried(1)(2, 3)(4))
      assert(curried(1)(2, 3, 4))
      assert(curried(1, 2)(3)(4))
      assert(curried(1, 2)(3, 4))
      assert(curried(1, 2, 3)(4))
      assert(curried(1, 2, 3, 4))

      // one may pass an extra argument at some point
      assert(curried(1)(2)(3)(4, 5))
      assert(curried(1)(2)(3, 4, 5))
      assert(curried(1)(2, 3)(4, 5))
      assert(curried(1)(2, 3, 4, 5))
      assert(curried(1, 2)(3)(4, 5))
      assert(curried(1, 2)(3, 4, 5))
      assert(curried(1, 2, 3)(4, 5))
      assert(curried(1, 2, 3, 4, 5))
    })

    it('each function holds its state', () => {
      const r1 = curried(1)
      const r2 = r1(2)
      const r3 = r2(3)
      const r4 = r3(4)

      A.deepEqual(r1(3)(4)(5), v1)
      A.deepEqual(r2(4)(5), v2)
      A.deepEqual(r3(5), v3)
      A.deepEqual(r4, v0)
    })

    it('the new functions report their arity', () => {
      const assert = (f, a) => A.equal(f.length, a)

      assert(curried, 4)
      assert(curried(1), 3)
      assert(curried(1)(2), 2)
      assert(curried(1, 2), 2)
      assert(curried(1)(2)(3), 1)
      assert(curried(1, 2)(3), 1)
      assert(curried(1)(2, 3), 1)
      assert(curried(1, 2, 3), 1)
    })

    it('counts no argument as argument', () => {
      A.deepEqual(curried()()()(), [undefined, undefined, undefined, undefined])
      A.deepEqual(curried(1)(2)(3)(), v4)
      A.deepEqual(curried(1, 2)(3)(), v4)
      A.deepEqual(curried(1, 2, 3)(), v4)
      A.deepEqual(curried(1, 2)()(), v5)
      A.deepEqual(curried(1)(2)()(), v5)
      A.deepEqual(curried(1)()()(), v6)
    })
  }
})
