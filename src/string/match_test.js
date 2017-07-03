/* eslint-env mocha */
import A from 'assert';
import match from './match';

describe('string.match(pattern, str)', () => {
  const str = 'some little thing';

  it('checks if "str" matches "patter"', () => {
    A.deepEqual(match(/some/, str), true);
    A.deepEqual(match(/(s.+)t/, str), true);
    A.deepEqual(match('some', str), true);
    A.deepEqual(match(/foo/, str), false);
  });

  it('allows partial application', () => {
    A.deepEqual(match(/little/)(str), true);
  });
});
