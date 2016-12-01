/* eslint-env mocha */
import A from 'assert';
import min from './min';

describe('math.min(x, y)', () => {
  it('returns the smaller of two numbers', () => {
    A.equal(min(1, 2), 1);
    A.equal(min(2, 1), 1);
    A.equal(min(-1, 1), -1);
  });

  it('allows partial application', () => {
    A.equal(min(1)(2), 1);
  });
});
