/* eslint-env mocha */
import A from 'assert';
import curry from './curry';
import stub from '../../lib/stub';

describe('function.curry(fn)', () => {
  const curried2 = curry(stub.foo2);
  const curried3 = curry(stub.foo3);
  const curried4 = curry(stub.foo4);
  const curried6 = curry(stub.foo6);

  it('converts "fn" into a function that can be used as a curried function', () => {
    const values = [1, 2, 3, 4, 5, 6];

    // just make sure the optimized curry functions are properly used
    A.deepEqual(curried2(1)(2), [1, 2]);
    A.deepEqual(curried3(1)(2)(3), [1, 2, 3]);
    A.deepEqual(curried4(1)(2)(3)(4), [1, 2, 3, 4]);

    A.deepEqual(curried6(1, 2, 3, 4, 5, 6), values);
    A.deepEqual(curried6(1, 2, 3, 4, 5)(6), values);

    A.deepEqual(curried6(1, 2, 3, 4)(5, 6), values);
    A.deepEqual(curried6(1, 2, 3, 4)(5)(6), values);

    A.deepEqual(curried6(1, 2, 3)(4, 5, 6), values);
    A.deepEqual(curried6(1, 2, 3)(4, 5)(6), values);
    A.deepEqual(curried6(1, 2, 3)(4)(5, 6), values);
    A.deepEqual(curried6(1, 2, 3)(4)(5)(6), values);

    A.deepEqual(curried6(1, 2)(3, 4, 5, 6), values);
    A.deepEqual(curried6(1, 2)(3, 4, 5)(6), values);
    A.deepEqual(curried6(1, 2)(3, 4)(5, 6), values);
    A.deepEqual(curried6(1, 2)(3, 4)(5)(6), values);
    A.deepEqual(curried6(1, 2)(3)(4, 5, 6), values);
    A.deepEqual(curried6(1, 2)(3)(4, 5)(6), values);
    A.deepEqual(curried6(1, 2)(3)(4)(5, 6), values);
    A.deepEqual(curried6(1, 2)(3)(4)(5)(6), values);

    A.deepEqual(curried6(1)(2, 3, 4, 5, 6), values);
    A.deepEqual(curried6(1)(2, 3, 4, 5)(6), values);
    A.deepEqual(curried6(1)(2, 3, 4)(5, 6), values);
    A.deepEqual(curried6(1)(2, 3, 4)(5)(6), values);
    A.deepEqual(curried6(1)(2, 3)(4, 5, 6), values);
    A.deepEqual(curried6(1)(2, 3)(4, 5)(6), values);
    A.deepEqual(curried6(1)(2, 3)(4)(5, 6), values);
    A.deepEqual(curried6(1)(2, 3)(4)(5)(6), values);

    A.deepEqual(curried6(1)(2)(3, 4, 5, 6), values);
    A.deepEqual(curried6(1)(2)(3, 4, 5)(6), values);
    A.deepEqual(curried6(1)(2)(3, 4)(5, 6), values);
    A.deepEqual(curried6(1)(2)(3, 4)(5)(6), values);
    A.deepEqual(curried6(1)(2)(3)(4, 5, 6), values);
    A.deepEqual(curried6(1)(2)(3)(4, 5)(6), values);
    A.deepEqual(curried6(1)(2)(3)(4)(5, 6), values);
    A.deepEqual(curried6(1)(2)(3)(4)(5)(6), values);

    // one may pass an extra argument at some point
    A.deepEqual(curried6(1, 2, 3, 4, 5, 6, 7), values);
    A.deepEqual(curried6(1, 2, 3, 4)(5, 6, 7), values);
    A.deepEqual(curried6(1, 2, 3)(4, 5, 6, 7), values);
    A.deepEqual(curried6(1, 2, 3)(4)(5, 6, 7), values);
    A.deepEqual(curried6(1, 2)(3, 4, 5, 6, 7), values);
    A.deepEqual(curried6(1, 2)(3, 4)(5, 6, 7), values);
    A.deepEqual(curried6(1, 2)(3)(4, 5, 6, 7), values);
    A.deepEqual(curried6(1, 2)(3)(4)(5, 6, 7), values);
    A.deepEqual(curried6(1)(2, 3, 4, 5, 6, 7), values);
    A.deepEqual(curried6(1)(2, 3, 4)(5, 6, 7), values);
    A.deepEqual(curried6(1)(2, 3)(4, 5, 6, 7), values);
    A.deepEqual(curried6(1)(2, 3)(4)(5, 6, 7), values);
    A.deepEqual(curried6(1)(2)(3, 4, 5, 6, 7), values);
    A.deepEqual(curried6(1)(2)(3, 4)(5, 6, 7), values);
    A.deepEqual(curried6(1)(2)(3)(4, 5, 6, 7), values);
    A.deepEqual(curried6(1)(2)(3)(4)(5, 6, 7), values);
  });

  it('each function holds its state', () => {
    const r1 = curried6(1);
    const r2 = r1(2);
    const r3 = r2(3);
    const r4 = r3(4);
    const r5 = r4(5);
    const r6 = r5(6);

    A.deepEqual(r1(3)(4)(5)(6)(7), [1, 3, 4, 5, 6, 7]);
    A.deepEqual(r2(4)(5)(6)(7), [1, 2, 4, 5, 6, 7]);
    A.deepEqual(r3(5)(6)(7), [1, 2, 3, 5, 6, 7]);
    A.deepEqual(r4(6)(7), [1, 2, 3, 4, 6, 7]);
    A.deepEqual(r5(7), [1, 2, 3, 4, 5, 7]);
    A.deepEqual(r6, [1, 2, 3, 4, 5, 6]);
  });

  it('the new functions report their arity', () => {
    A.equal(curried6.length, 6);
    A.equal(curried6(1).length, 5);
    A.equal(curried6(1)(2).length, 4);
    A.equal(curried6(1, 2).length, 4);
    A.equal(curried6(1)(2)(3).length, 3);
    A.equal(curried6(1, 2)(3).length, 3);
    A.equal(curried6(1)(2, 3).length, 3);
    A.equal(curried6(1, 2, 3).length, 3);
    A.equal(curried6(1)(2)(3)(4).length, 2);
    A.equal(curried6(1, 2, 3)(4).length, 2);
    A.equal(curried6(1)(2, 3)(4).length, 2);
    A.equal(curried6(1)(2, 3, 4).length, 2);
    A.equal(curried6(1)(2)(3, 4).length, 2);
    A.equal(curried6(1, 2)(3, 4).length, 2);
    A.equal(curried6(1)(2)(3, 4).length, 2);
    A.equal(curried6(1, 2)(3)(4).length, 2);
    A.equal(curried6(1, 2, 3, 4).length, 2);

    A.equal(curried6(1)(2)(3)(4)(5).length, 1);
    A.equal(curried6(1, 2, 3, 4)(5).length, 1);
    A.equal(curried6(1, 2, 3)(4)(5).length, 1);
    A.equal(curried6(1, 2, 3)(4, 5).length, 1);
    A.equal(curried6(1, 2)(3)(4)(5).length, 1);
    A.equal(curried6(1, 2)(3)(4, 5).length, 1);
    A.equal(curried6(1, 2)(3, 4)(5).length, 1);
    A.equal(curried6(1, 2)(3, 4, 5).length, 1);
    A.equal(curried6(1)(2, 3, 4)(5).length, 1);
    A.equal(curried6(1)(2, 3)(4)(5).length, 1);
    A.equal(curried6(1)(2, 3)(4, 5).length, 1);
    A.equal(curried6(1)(2)(3, 4)(5).length, 1);
    A.equal(curried6(1)(2)(3)(4, 5).length, 1);
    A.equal(curried6(1)(2)(3, 4, 5).length, 1);
    A.equal(curried6(1)(2, 3, 4, 5).length, 1);
    A.equal(curried6(1, 2, 3, 4, 5).length, 1);
  });

  it('counts no argument as argument', () => {
    const r = [undefined, undefined, undefined, undefined, undefined, undefined];
    A.deepEqual(curried6()()()()()(), r);
  });
});
