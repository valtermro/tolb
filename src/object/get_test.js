/* eslint-env mocha */
import A from 'assert';
import get from './get';

describe('object.get(key, obj)', () => {
  const obj = {
    foo: 1,
    bar: {
      baz: [2, { bleh: 3 }],
    },
    baz: 4,
  };

  it('returns the value at "key" in "obj"', () => {
    A.equal(get('foo', obj), 1);
  });

  it('fetches by path', () => {
    A.equal(get('bar.baz.0', obj), 2);
    A.equal(get('bar.baz.1.bleh', obj), 3);
  });

  it('fetches multiple values if "key" is an array', () => {
    A.deepEqual(get(['foo', 'baz'], obj), [1, 4]);
    A.deepEqual(get(['foo', 'bleh'], obj), [1, undefined]);
    A.deepEqual(get(['foo', 'bar.baz.1.bleh'], obj), [1, 3]);
  });

  it('allows partial application', () => {
    A.equal(get('foo')(obj), 1);
    A.deepEqual(get(['foo', 'baz'])(obj), [1, 4]);
  });
});
