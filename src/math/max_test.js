/* eslint-env mocha */
import A from 'assert';
import max from './max';

describe('math.max(x, y)', () => {
  it('returns the larger of two numbers', () => {
    A.equal(max(1, 2), 2);
    A.equal(max(2, 1), 2);
    A.equal(max(-1, 1), 1);
  });

  it('allows partial application', () => {
    A.equal(max(1)(2), 2);
  });
});
