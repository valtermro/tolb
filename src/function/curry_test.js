/* eslint-env mocha */
import A from 'assert';
import curry from './curry';
import util from '../../_dev/util';

describe('curry(fn)', () => {
  const curried2 = curry(util.foo2);
  const curried3 = curry(util.foo3);
  const curried4 = curry(util.foo4);
  const curried6 = curry(util.foo6);

  it('converts "fn" into a function that can be used as a curried function', () => {
    const values = [1, 2, 3, 4, 5, 6];
    const assert = v => A.deepEqual(v, values);

    // just make sure the optimized curry functions are used properly
    A.deepEqual(curried2(1)(2), [1, 2]);
    A.deepEqual(curried3(1)(2)(3), [1, 2, 3]);
    A.deepEqual(curried4(1)(2)(3)(4), [1, 2, 3, 4]);

    assert(curried6(1)(2)(3)(4)(5)(6));
    assert(curried6(1)(2, 3, 4, 5, 6));
    assert(curried6(1, 2)(3, 4, 5, 6));
    assert(curried6(1, 2, 3)(4, 5, 6));
    assert(curried6(1, 2, 3, 4)(5, 6));
    assert(curried6(1, 2, 3, 4, 5)(6));
    assert(curried6(1)(2, 3, 4, 5)(6));
    assert(curried6(1, 2)(3, 4, 5)(6));
    assert(curried6(1, 2, 3)(4, 5)(6));
    assert(curried6(1, 2, 3, 4)(5)(6));
    assert(curried6(1)(2, 3, 4)(5)(6));
    assert(curried6(1)(2)(3, 4)(5)(6));
    assert(curried6(1, 2)(3, 4)(5)(6));
    assert(curried6(1, 2, 3)(4)(5)(6));
    assert(curried6(1, 2)(3)(4)(5)(6));
    assert(curried6(1)(2)(3, 4, 5, 6));
    assert(curried6(1)(2, 3)(4)(5)(6));
    assert(curried6(1, 2, 3)(4)(5, 6));
    assert(curried6(1, 2)(3)(4)(5, 6));
    assert(curried6(1, 2)(3)(4, 5, 6));
    assert(curried6(1)(2)(3)(4)(5, 6));
    assert(curried6(1)(2)(3)(4, 5, 6));
    assert(curried6(1)(2)(3)(4, 5)(6));
    assert(curried6(1)(2, 3)(4, 5, 6));
    assert(curried6(1)(2, 3)(4)(5, 6));
    assert(curried6(1, 2)(3, 4)(5, 6));
    assert(curried6(1)(2)(3, 4)(5, 6));
    assert(curried6(1)(2, 3, 4)(5, 6));
    assert(curried6(1, 2, 3, 4, 5, 6));

    // one may pass an extra argument at some point
    assert(curried6(1)(2)(3)(4)(5)(6, 7, 8));
    assert(curried6(1, 2)(3)(4)(5)(6, 7, 8));
    assert(curried6(1, 2, 3)(4)(5)(6, 7, 8));
    assert(curried6(1, 2, 3, 4)(5)(6, 7, 8));
    assert(curried6(1, 2, 3, 4, 5)(6, 7, 8));
    assert(curried6(1)(2)(3)(4)(5, 6, 7, 8));
    assert(curried6(1)(2)(3)(4, 5, 6, 7, 8));
    assert(curried6(1)(2)(3, 4, 5, 6, 7, 8));
    assert(curried6(1)(2, 3, 4, 5, 6, 7, 8));
    assert(curried6(1, 2, 3, 4, 5, 6, 7, 8));
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
    const assert = (f, a) => A.equal(f.length, a);

    assert(curried6, 6);
    assert(curried6(1), 5);
    assert(curried6(1)(2), 4);
    assert(curried6(1, 2), 4);
    assert(curried6(1)(2)(3), 3);
    assert(curried6(1, 2)(3), 3);
    assert(curried6(1)(2, 3), 3);
    assert(curried6(1, 2, 3), 3);
    assert(curried6(1)(2)(3)(4), 2);
    assert(curried6(1, 2, 3)(4), 2);
    assert(curried6(1)(2, 3)(4), 2);
    assert(curried6(1)(2, 3, 4), 2);
    assert(curried6(1)(2)(3, 4), 2);
    assert(curried6(1, 2)(3, 4), 2);
    assert(curried6(1)(2)(3, 4), 2);
    assert(curried6(1, 2)(3)(4), 2);
    assert(curried6(1, 2, 3, 4), 2);

    assert(curried6(1)(2)(3)(4)(5), 1);
    assert(curried6(1, 2, 3, 4)(5), 1);
    assert(curried6(1, 2, 3)(4)(5), 1);
    assert(curried6(1, 2, 3)(4, 5), 1);
    assert(curried6(1, 2)(3)(4)(5), 1);
    assert(curried6(1, 2)(3)(4, 5), 1);
    assert(curried6(1, 2)(3, 4)(5), 1);
    assert(curried6(1, 2)(3, 4, 5), 1);
    assert(curried6(1)(2, 3, 4)(5), 1);
    assert(curried6(1)(2, 3)(4)(5), 1);
    assert(curried6(1)(2, 3)(4, 5), 1);
    assert(curried6(1)(2)(3, 4)(5), 1);
    assert(curried6(1)(2)(3)(4, 5), 1);
    assert(curried6(1)(2)(3, 4, 5), 1);
    assert(curried6(1)(2, 3, 4, 5), 1);
    assert(curried6(1, 2, 3, 4, 5), 1);
  });

  it('counts no argument as argument', () => {
    const r = [undefined, undefined, undefined, undefined, undefined, undefined];
    A.deepEqual(curried6()()()()()(), r);
  });
});
