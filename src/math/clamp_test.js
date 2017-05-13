/* eslint-env mocha */
import A from 'assert';
import clamp from './clamp';
import config from '../../config/constants';

describe('math.clamp(min, max, num)', () => {
  it('ensures "num" is within the range defined by "min" and "max"', () => {
    A.equal(clamp(10, 20, 30), 20);
    A.equal(clamp(10, 20, 5), 10);
    A.equal(clamp(10, 20, 15), 15);
    A.equal(clamp(10, 20, 10), 10);
    A.equal(clamp(10, 20, 20), 20);
  });

  it('throws if the range is invalid', () => {
    A.throws(() => clamp(30, 10, 5), config.RANGE_ERRMSG);
    A.throws(() => clamp(-10, -30, 5), config.RANGE_ERRMSG);
  });

  it('allows partial application', () => {
    A.equal(clamp(10)(20)(15), 15);
    A.equal(clamp(10)(20, 15), 15);
    A.equal(clamp(10, 20)(15), 15);
  });
});
