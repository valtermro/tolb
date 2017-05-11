/* eslint-env mocha */
import A from 'assert';
import omit from './omit';
import config from '../../config/constants';

describe('object.omit(keys, obj)', () => {
  function Foo() { this.foo = 1; }
  Foo.prototype.bar = 2;
  const prototyped = new Foo();
  prototyped.baz = 2;
  const obj = { foo: 1, bar: 2, baz: 3, bleh: null };

  it('returns a copy of "obj" excluding all "keys" in it', () => {
    A.deepEqual(omit(['baz', 'foo'], obj), { bar: 2, bleh: null });
    A.deepEqual(obj, { foo: 1, bar: 2, baz: 3, bleh: null });
  });

  it('fetches only the object\'s own values', () => {
    A.deepEqual(omit(['baz'], prototyped), { foo: 1 });
  });

  it('throws if "keys" is not an array', () => {
    A.throws(() => omit('foo', obj), config.EXPECTED_ARRAY_ERRMSG);
  });

  it('allows partial application', () => {
    A.deepEqual(omit(['baz', 'foo', 'bleh'])(obj), { bar: 2 });
  });
});
