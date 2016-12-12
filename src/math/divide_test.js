/* eslint-env mocha */
import A from 'assert';
import divide from './divide';

describe('divide(divisor, dividend)', () => {
  it('divides "dividend" by "divisor"', () => {
    A.equal(divide(2, 10), 5);
    A.equal(divide(10, 2), 0.2);
    A.equal(divide(10, -2), -0.2);
    A.equal(divide(-10, -5), 0.5);
  });

  it('allows partial application', () => {
    A.equal(divide(2)(10), 5);
  });
});
