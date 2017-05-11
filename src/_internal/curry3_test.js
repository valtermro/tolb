/* eslint-env mocha */
import A from 'assert';
import curry3 from './curry3';
import util from '../../lib/stubs';

describe('_iternal.curry3(fn, reverse)', () => {
  const values = [
    [1, 2, 3],
    [1, 3, 4],
    [1, 2, 4],
    [1, undefined, undefined],
    [1, 2, undefined],
  ];

  describe('"reverse" = false', () => test(false));
  describe('"reverse" = true', () => test(true));

  function test(reverse) {
    const curried = curry3(util.foo3, reverse);
    const v0 = reverse ? values[0].slice(0).reverse() : values[0];
    const v1 = reverse ? values[1].slice(0).reverse() : values[1];
    const v2 = reverse ? values[2].slice(0).reverse() : values[2];
    const v3 = reverse ? values[3].slice(0).reverse() : values[3];
    const v4 = reverse ? values[4].slice(0).reverse() : values[4];

    it('converts "fn" into a function that can be used as a curried function', () => {
      const assert = v => A.deepEqual(v, v0);

      assert(curried(1, 2, 3));
      assert(curried(1, 2)(3));
      assert(curried(1)(2, 3));
      assert(curried(1)(2)(3));

      // one may pass an extra argument at some point
      assert(curried(1, 2, 3, 4));
      assert(curried(1)(2, 3, 4));
    });

    it('each function holds its state', () => {
      const r1 = curried(1);
      const r2 = r1(2);
      const r3 = r2(3);

      A.deepEqual(r1(3)(4), v1);
      A.deepEqual(r2(4), v2);
      A.deepEqual(r3, v0);
    });

    it('the new functions report their arity', () => {
      const assert = (f, a) => A.equal(f.length, a);

      assert(curried, 3);
      assert(curried(1), 2);
      assert(curried(1)(2), 1);
      assert(curried(1, 2), 1);
    });

    it('counts no argument as argument', () => {
      A.deepEqual(curried()()(), [undefined, undefined, undefined]);

      A.deepEqual(curried(1)()(), v3);
      A.deepEqual(curried(1)(2)(), v4);
      A.deepEqual(curried(1, 2)(), v4);
    });
  }
});
