/* eslint-env mocha */
import A from 'assert';
import curry2 from './curry2';
import stub from '../../lib/stub';

describe('_iternal.curry2(fn, reverse)', () => {
  const values = [
    [1, 2],
    [1, 3],
    [1, undefined],
  ];

  describe('"reverse" == false', () => test(false));
  describe('"reverse" == true', () => test(true));

  function test(reverse) {
    const curried = curry2(stub.foo2, reverse);
    const v0 = reverse ? values[0].slice(0).reverse() : values[0];
    const v1 = reverse ? values[1].slice(0).reverse() : values[1];
    const v2 = reverse ? values[2].slice(0).reverse() : values[2];

    it('converts "fn" into a function that can be used as a curried function', () => {
      A.deepEqual(curried(1, 2), v0);
      A.deepEqual(curried(1)(2), v0);
      A.deepEqual(curried(1, 2, 3), v0);
    });

    it('each function holds its state', () => {
      const r1 = curried(1);
      const r2 = r1(2);

      A.deepEqual(r1(3), v1);
      A.deepEqual(r2, v0);
    });

    it('the new functions report their arity', () => {
      A.equal(curried.length, 2);
      A.equal(curried(1).length, 1);
    });

    it('counts no argument as argument', () => {
      A.deepEqual(curried()(), [undefined, undefined]);
      A.deepEqual(curried(1)(), v2);
    });
  }
});
