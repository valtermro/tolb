/* eslint-env mocha */
import A from 'assert';
import divide from './divide';

describe('math.divide(divisor, dividend)', () => {
  it('divides "dividend" by "divisor"', () => {
    A.equal(divide(2, 10), 10 / 2);
    A.equal(divide(10, 2), 2 / 10);
    A.equal(divide(10, -2), -2 / 10);
    A.equal(divide(-10, -5), -5 / -10);
  });

  it('allows partial application', () => {
    A.equal(divide(2)(10), 10 / 2);
  });
});
