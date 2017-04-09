/* eslint-env mocha */
import A from 'assert';
import prop from './prop';

describe('prop(key, obj)', () => {
  const obj = {
    foo: 1,
    bar: {
      baz: [2, { bleh: 3 }],
    },
    baz: 4,
  };

  it('returns the value at "key" in "obj"', () => {
    A.equal(prop('foo', obj), 1);
  });

  it('fetches by path', () => {
    A.equal(prop('bar.baz.0', obj), 2);
    A.equal(prop('bar.baz.1.bleh', obj), 3);
  });

  it('allows partial application', () => {
    A.equal(prop('foo')(obj), 1);
  });
});
