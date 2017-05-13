/* eslint-env mocha */
import A from 'assert';
import equal from './equal';

describe('is.equal(left, right)', () => {
  it('allows partial application', () => {
    A.equal(equal(1)(1), true);
    A.equal(equal({ a: 1 })({ a: 1 }), true);
  });
});
