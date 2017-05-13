/* eslint-env mocha */
import A from 'assert';
import match from './match';

describe('string.match(pattern, str)', () => {
  const str = 'some little thing';

  it('applies "str".match to "pattern"', () => {
    [/some/, /(s.+)t/, 'some'].forEach((pattern) => {
      A.deepEqual(match(pattern, str), str.match(pattern));
    });
  });

  it('returns an empty array if "str" does not match "pattern"', () => {
    A.deepEqual(match(/foo/, 'bar'), []);
  });

  it('allows partial application', () => {
    A.deepEqual(match(/l.+t/)(str), str.match(/l.+t/));
  });
});
