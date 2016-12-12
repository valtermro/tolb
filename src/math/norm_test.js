/* eslint-env mocha */
import A from 'assert';
import norm from './norm';

describe('norm(min, max, value)', () => {
  it('normalizes "value" based on the range from "min" to "max"', () => {
    A.equal(norm(0, 50, 15), 0.3);
    A.equal(norm(10, 50, 15), 0.125);
  });

  it('allows partial application', () => {
    A.equal(norm(0)(50, 15), 0.3);
    A.equal(norm(0, 50)(15), 0.3);
    A.equal(norm(0)(50)(15), 0.3);
  });
});
