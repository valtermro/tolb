/* eslint-env mocha */
import A from 'assert';
import lerp from './lerp';

describe('math.lerp(min, max, value)', () => {
  it('returns the position of "value" in the range defined by "min" and "max"', () => {
    A.equal(lerp(0, 50, 0.3), 15);
    A.equal(lerp(10, 50, 0.125), 15);
  });

  it('allows partial application', () => {
    A.equal(lerp(0)(50, 0.3), 15);
    A.equal(lerp(0, 50)(0.3), 15);
    A.equal(lerp(0)(50)(0.3), 15);
  });
});
