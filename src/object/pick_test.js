/* eslint-env mocha */
import A from 'assert';
import pick from './pick';
import config from '../../config/constants';

describe('object.pick(keys, obj)', () => {
  it('returns an object with all "keys" of "obj"', () => {
    // the original object doesn't have a "d" key, so does the resulting new one.
    // "e" does exit and, even though it doesn't have a value, it's fetched.
    A.deepEqual(
      pick(['a', 'c', 'd', 'e'], { a: 1, b: 2, c: 3, e: null }),
      { a: 1, c: 3, e: null });
  });

  it("fetches only the object's own values", () => {
    const prototyped = Object.create({ a: 1 });
    prototyped.b = 2;
    prototyped.c = 3;

    A.deepEqual(pick(['a', 'c'], prototyped), { c: 3 });
  });

  it('throws if "keys" is not an array', () => {
    A.throws(() => pick('foo', {}), config.EXPECTED_ARRAY_ERRMSG);
  });

  it('allows partial application', () => {
    A.deepEqual(pick(['a'])({}), {});
  });
});
