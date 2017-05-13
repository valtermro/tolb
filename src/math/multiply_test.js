/* eslint-env mocha */
import A from 'assert';
import multiply from './multiply';

describe('math.multiply(multiplier, multiplicand)', () => {
  it('multiplies two numbers', () => {
    A.equal(multiply(1, 2), 2 * 1);
    A.equal(multiply(3, 2), 2 * 3);
    A.equal(multiply(3, -2), -2 * 3);
    A.equal(multiply(-3, -2), -2 * -3);
  });

  it('allows partial application', () => {
    A.equal(multiply(2)(3), 3 * 2);
  });
});
