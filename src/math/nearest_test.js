/* eslint-env mocha */
import A from 'assert';
import nearest from './nearest';

describe('math.nearest(base, value)', () => {
  it('rounds "value" to its nearest multiple of "base"', () => {
    A.equal(nearest(4, 3.5), 4);
    A.equal(nearest(3, 7.4), 6);
  });

  it('allows partial application', () => {
    A.equal(nearest(4)(3.5), 4);
  });
});
