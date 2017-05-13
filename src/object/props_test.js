/* eslint-env mocha */
import A from 'assert';
import props from './props';
import config from '../../config/constants';

describe('object.props(keys, obj)', () => {
  const obj = {
    foo: 1,
    bar: {
      baz: [2, { bleh: 3 }],
    },
    baz: 4,
  };

  it('returns the values at "keys" in "obj"', () => {
    A.deepEqual(props(['foo', 'baz'], obj), [1, 4]);
    A.deepEqual(props(['foo', 'bleh'], obj), [1, undefined]);
  });

  it('fetches by path', () => {
    A.deepEqual(props(['bar.baz.1.bleh'], obj), [3]);
  });

  it('throws if "keys" is not an array', () => {
    A.throws(() => props('foo', obj), config.EXPECTED_ARRAY_ERRMSG);
  });

  it('allows partial application', () => {
    A.deepEqual(props(['foo', 'baz'])(obj), [1, 4]);
  });
});
