/* eslint-env mocha */
import A from 'assert';
import keys from './keys';

describe('object.keys(obj)', () => {
  function Foo() { this.foo = 1; }
  Foo.prototype.bar = 2;

  const f = new Foo();
  f.baz = 3;

  it('returns the list of the own enumerable keys of "obj"', () => {
    A.deepEqual(keys({ foo: 1, bar: 2, baz: 3 }), ['foo', 'bar', 'baz']);
    A.deepEqual(keys(f), ['foo', 'baz']);
  });
});
