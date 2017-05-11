/* eslint-env mocha */
import A from 'assert';
import lte from './lte';

describe('assert.lte(other, value)', () => {
  function test(other, value, wanted) {
    A.equal(lte(other, value), wanted);
  }

  it('checks if "value" is smaller than, or equal to, "other"', () => {
    test(2, 1, true);
    test(2, 2, true);
    test(1, 2, false);
  });

  it('compares strings', () => {
    test('bc', 'ac', true);
    test('bc', 'ba', true);
    test('bc', 'bc', true);
    test('bc', 'd', false);
  });

  it('allows partial application', () => {
    A.equal(lte(2)(2), true);
  });
});
