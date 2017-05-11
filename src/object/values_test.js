/* eslint-env mocha */
import A from 'assert';
import values from './values';

describe('object.values(obj)', () => {
  function Foo() { this.foo = 1; }
  Foo.prototype.bar = 2;

  const f = new Foo();
  f.baz = 3;

  it('returns the list of own values in "obj"', () => {
    A.deepEqual(values({ foo: 1, bar: 'foo', baz: undefined }), [1, 'foo', undefined]);
    A.deepEqual(values(f), [1, 3]);
  });
});
