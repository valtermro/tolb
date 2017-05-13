/* eslint-env mocha */
import A from 'assert';
import equal from './equal';

describe('_internal.equal(left, right)', () => {
  it('checks if "left" is equal to "right"', () => {
    A.equal(equal('a', 'a'), true);
    A.equal(equal(1, 1), true);
    A.equal(equal(1, 2), false);
    A.equal(equal('a', 'b'), false);
  });

  it('tests types', () => {
    A.equal(equal(1, 1), true);
    A.equal(equal('1', '1'), true);
    A.equal(equal(1, '1'), false);
    A.equal(equal(null, undefined), false);
    A.equal(equal(null, ''), false);
    A.equal(equal(false, 0), false);
    A.equal(equal(null, 0), false);
    A.equal(equal(false, null), false);
    A.equal(equal(null, ''), false);
    A.equal(equal([], {}), false);
    A.equal(equal({}, []), false);
  });

  it('tests Number values', () => {
    A.equal(equal(1, 1), true);
    A.equal(equal(new Number(0), 0), false);
    A.equal(equal(NaN, NaN), true);
    A.equal(equal(-1, 1), false);
    A.equal(equal(0, -0), false);
    A.equal(equal(-0, 0), false);
    A.equal(equal(-0, -0), true);
  });

  it('compares arrays', () => {
    A.deepEqual(equal([0, NaN, 1], [0, NaN, 1]), true);
    A.deepEqual(equal([-0, NaN, 1], [0, NaN, 1]), false);
    A.deepEqual(equal([0, NaN, 1], [2, NaN, 1]), false);
    A.deepEqual(equal([1, undefined], [1, undefined, undefined]), false);
    A.deepEqual(equal([1, undefined, undefined], [1, undefined]), false);
  });

  it('compares objects', () => {
    A.deepEqual(equal({ a: 1, b: 2 }, { b: 2, a: 1 }), true);
    A.deepEqual(equal({ a: 0, b: NaN, c: 1 }, { a: 0, b: NaN, c: 1 }), true);
    A.deepEqual(equal({ a: 0, b: NaN, c: 1 }, { a: -0, b: NaN, c: 1 }), false);
    A.deepEqual(equal({ a: 1 }, {}), false);
    A.deepEqual(equal({}, { a: 1 }), false);
  });

  it('compares deeply', () => {
    A.deepEqual(
      equal(
        [{ a: 1, b: [NaN, { c: 0 }] }],
        [{ a: 1, b: [NaN, { c: 0 }] }]),
      true);

    A.deepEqual(
      equal(
        [{ a: 1, b: [NaN, { c: 0 }] }],
        [{ a: 1, b: [NaN, { d: 0 }] }]),
      false);
  });
});
