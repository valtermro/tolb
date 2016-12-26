/* eslint-env mocha */
import A from 'assert';
import equals from './equals';

describe('equals(left, right)', () => {
  it('allows partial application', () => {
    A.equal(equals(1)(1), true);
    A.equal(equals({ a: 1 })({ a: 1 }), true);
  });
});
