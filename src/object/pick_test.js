/* eslint-env mocha */
import A from 'assert';
import pick from './pick';

describe('object.pick(keys, obj)', () => {
  const obj = { foo: 1, bar: 2, baz: 3, bleh: null };

  it('returns an object with all pairs with "keys" in "obj"', () => {
    const assert = (keys, values) => {
      A.deepEqual(pick(keys, obj), values);
      A.deepEqual(obj, { foo: 1, bar: 2, baz: 3, bleh: null });
    };
    assert(['foo', 'bleh'], { foo: 1, bleh: null });
    assert(['foo', 'x'], { foo: 1 });
  });

  it('allows partial application', () => {
    A.deepEqual(pick(['foo'])(obj), { foo: 1 });
  });
});
