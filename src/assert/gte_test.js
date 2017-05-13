/* eslint-env mocha */
import A from 'assert';
import gte from './gte';

describe('assert.gte(other, value)', () => {
  it('checks if "value" is greater than, or equal to, "other"', () => {
    A.equal(gte(1, 2), true);
    A.equal(gte(2, 2), true);
    A.equal(gte(2, 1), false);
  });

  it('compares strings', () => {
    A.equal(gte('bc', 'bde'), true);
    A.equal(gte('bc', 'ba'), false);
    A.equal(gte('bc', 'ac'), false);
  });

  it('allows partial application', () => {
    A.equal(gte(2)(2), true);
  });
});
