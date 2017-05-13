/* eslint-env mocha */
import A from 'assert';
import omit from './omit';
import config from '../../config/constants';

describe('object.omit(keys, obj)', () => {
  it('returns a copy of "obj" excluding all "keys" in it', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };

    A.deepEqual(omit(['a', 'c'], obj), { b: 2, d: 4 });

    // the original object should not be mutated
    A.deepEqual(obj, { a: 1, b: 2, c: 3, d: 4 });
  });

  it("fetches only the object's own values", () => {
    const prototyped = Object.create({ a: 1 });
    prototyped.b = 2;
    prototyped.c = 3;

    A.deepEqual(omit(['b'], prototyped), { c: 3 });
  });

  it('throws if "keys" is not an array', () => {
    A.throws(() => omit('foo', {}), config.EXPECTED_ARRAY_ERRMSG);
  });

  it('allows partial application', () => {
    A.deepEqual(omit(['a'])({ a: 1, b: 2 }), { b: 2 });
  });
});
