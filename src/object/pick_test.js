/* eslint-env mocha */
import A from 'assert';
import pick from './pick';
import config from '../../config/constants';

describe('object.pick(keys, obj)', () => {
  function Foo() { this.foo = 1; }
  Foo.prototype.bar = 2;
  const prototyped = new Foo();
  const obj = { foo: 1, bar: 2, baz: 3, bleh: null };

  it('returns an object with all pairs with "keys" in "obj"', () => {
    const assert = (keys, values) => {
      A.deepEqual(pick(keys, obj), values);
      A.deepEqual(obj, { foo: 1, bar: 2, baz: 3, bleh: null });
    };
    assert(['foo', 'bleh'], { foo: 1, bleh: null });
    assert(['foo', 'x'], { foo: 1 });
  });

  it('fetches on the object\'s own values', () => {
    A.deepEqual(pick(['foo', 'bar'], prototyped), { foo: 1 });
  });

  it('throws if "keys" is not an array', () => {
    A.throws(() => pick('foo', obj), config.EXPECTED_ARRAY_ERRMSG);
  });

  it('allows partial application', () => {
    A.deepEqual(pick(['foo'])(obj), { foo: 1 });
  });
});
