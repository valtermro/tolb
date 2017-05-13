/* eslint-env mocha */
import A from 'assert';
import lte from './lte';

describe('is.lte(other, value)', () => {
  it('checks if "value" is smaller than, or equal to, "other"', () => {
    A.equal(lte(2, 1), true);
    A.equal(lte(2, 2), true);
    A.equal(lte(1, 2), false);
  });

  it('compares strings', () => {
    A.equal(lte('bc', 'ac'), true);
    A.equal(lte('bc', 'ba'), true);
    A.equal(lte('bc', 'bc'), true);
    A.equal(lte('bc', 'd'), false);
  });

  it('allows partial application', () => {
    A.equal(lte(2)(2), true);
  });
});
