/* eslint-env mocha */
import A from 'assert';
import equals from './equals';

describe('_internal.equals(left, right)', () => {
  it('checks if "left" is equal to "right"', () => {
    A.equal(equals('a', 'a'), true);
    A.equal(equals(1, 1), true);
    A.equal(equals(1, 2), false);
    A.equal(equals('a', 'b'), false);
  });

  it('tests types', () => {
    A.equal(equals(1, 1), true);
    A.equal(equals('1', '1'), true);
    A.equal(equals(1, '1'), false);
    A.equal(equals(null, undefined), false);
    A.equal(equals(null, ''), false);
    A.equal(equals(false, 0), false);
    A.equal(equals(null, 0), false);
    A.equal(equals(false, null), false);
    A.equal(equals(null, ''), false);
    A.equal(equals([], {}), false);
    A.equal(equals({}, []), false);
  });

  it('tests Number values', () => {
    A.equal(equals(1, 1), true);
    A.equal(equals(new Number(0), 0), false);
    A.equal(equals(NaN, NaN), true);
    A.equal(equals(-1, 1), false);
    A.equal(equals(0, -0), false);
    A.equal(equals(-0, 0), false);
    A.equal(equals(-0, -0), true);
  });

  it('compares arrays', () => {
    A.deepEqual(equals([0, NaN, 1], [0, NaN, 1]), true);
    A.deepEqual(equals([-0, NaN, 1], [0, NaN, 1]), false);
    A.deepEqual(equals([0, NaN, 1], [2, NaN, 1]), false);
    A.deepEqual(equals([1, undefined], [1, undefined, undefined]), false);
    A.deepEqual(equals([1, undefined, undefined], [1, undefined]), false);
  });

  it('compares objects', () => {
    A.deepEqual(equals({ a: 1, b: 2 }, { b: 2, a: 1 }), true);
    A.deepEqual(equals({ a: 0, b: NaN, c: 1 }, { a: 0, b: NaN, c: 1 }), true);
    A.deepEqual(equals({ a: 0, b: NaN, c: 1 }, { a: -0, b: NaN, c: 1 }), false);
    A.deepEqual(equals({ a: 1 }, {}), false);
    A.deepEqual(equals({}, { a: 1 }), false);
  });

  it('compares deeply', () => {
    A.deepEqual(
      equals(
        [{ a: 1, b: [NaN, { c: 0 }] }],
        [{ a: 1, b: [NaN, { c: 0 }] }]),
      true);

    A.deepEqual(
      equals(
        [{ a: 1, b: [NaN, { c: 0 }] }],
        [{ a: 1, b: [NaN, { d: 0 }] }]),
      false);
  });
});
