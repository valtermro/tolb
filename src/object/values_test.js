/* eslint-env mocha */
import A from 'assert';
import values from './values';

describe('values(obj)', () => {
  function Foo() { /**/ }
  Foo.prototype.bar = 1;

  const f = new Foo();
  f.baz = 2;

  it('returns the list of values in "obj"', () => {
    A.deepEqual(values({ foo: 1, bar: 'foo', baz: undefined }), [1, 'foo', undefined]);
    A.deepEqual(values(f), [2, 1]);
  });
});
