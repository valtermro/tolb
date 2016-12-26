/* eslint-env mocha */
import A from 'assert';
import keys from './keys';

describe('keys(obj)', () => {
  function Foo() { /**/ }
  Foo.prototype.bar = 1;

  const f = new Foo();
  f.baz = 2;

  it('returns the list of keys of "obj"', () => {
    A.deepEqual(keys({ foo: 1, bar: 2, baz: 3 }), ['foo', 'bar', 'baz']);
    A.deepEqual(keys(f), ['baz', 'bar']);
  });
});
