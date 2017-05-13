/* eslint-env mocha */
import A from 'assert';
import gt from './gt';

describe('assert.gt(other, value)', () => {
  it('checks if "value" is greater than "other"', () => {
    A.equal(gt(1, 2), true);
    A.equal(gt(2, 1), false);
    A.equal(gt(2, 2), false);
  });

  it('compares strings', () => {
    A.equal(gt('bc', 'de'), true);
    A.equal(gt('bc', 'd'), true);
    A.equal(gt('bc', 'ab'), false);
  });

  it('allows partial application', () => {
    A.equal(gt(1)(2), true);
  });
});
