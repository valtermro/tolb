/* eslint-env mocha */
import A from 'assert';
import grep from './grep';

describe('string.grep(pattern, str)', () => {
  const str = 'some little string';

  // it('applies "str".match to "pattern"', () => {
  it('returns an array with all matches for "pattern" in "str"', () => {
    A.deepEqual(grep(/some/, str), ['some']);
    A.deepEqual(grep('some', str), ['some']);

    A.deepEqual(grep(/(s.+)t/, str), ['some little st', 'some little s']);
  });

  it('returns undefined if "str" does not match "pattern"', () => {
    A.deepEqual(grep(/foo/, 'bar'), undefined);
  });

  it('allows partial application', () => {
    A.deepEqual(grep(/some/)(str), ['some']);
  });
});
