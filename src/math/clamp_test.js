/* eslint-env mocha */
import A from 'assert';
import clamp from './clamp';

describe('clamp(min, max, num)', () => {
  it('ensure "num" is within range', () => {
    A.equal(clamp(10, 20, 30), 20);
    A.equal(clamp(10, 20, 5), 10);
    A.equal(clamp(10, 20, 15), 15);
    A.equal(clamp(10, 20, 10), 10);
    A.equal(clamp(10, 20, 20), 20);
  });

  it('throws if the range is invalid', () => {
    const msg = /invalid/i;
    A.throws(() => clamp(30, 10, 5), msg);
    A.throws(() => clamp(-10, -30, 5), msg);
  });

  it('allows partial application', () => {
    A.equal(clamp(10)(20)(15), 15);
    A.equal(clamp(10)(20, 15), 15);
    A.equal(clamp(10, 20)(15), 15);
  });
});
