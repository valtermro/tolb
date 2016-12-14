/* eslint-env mocha */
import A from 'assert';
import repeat from './repeat';

describe('repeat(n, value)', () => {
  it('builds a string if "value" is string', () => {
    A.equal(repeat(3, 'a'), 'aaa');
    A.equal(repeat(3, 'foo'), 'foofoofoo');
    A.equal(repeat(3, ''), '');
  });

  it('builds an array if "value" is not string', () => {
    A.deepEqual(repeat(3, 0), [0, 0, 0]);
    A.deepEqual(repeat(3, null), [null, null, null]);
    A.deepEqual(repeat(3, false), [false, false, false]);
  });

  it('returns undefined if "value" is undefined', () => {
    A.equal(repeat(3, undefined), undefined);
  });

  it('allows partial application', () => {
    A.deepEqual(repeat(3)(1), [1, 1, 1]);
  });
});
