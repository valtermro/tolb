/* eslint-env mocha */
import A from 'assert';
import values from './values';

describe('values(obj)', () => {
  it('returns the list of values in "obj"', () => {
    A.deepEqual(values({ foo: 1, bar: 'foo', baz: undefined }), [1, 'foo', undefined]);
  });
});
