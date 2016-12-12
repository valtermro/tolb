/* eslint-env mocha */
import A from 'assert';
import lt from './lt';

describe('lt(other, value)', () => {
  function test(other, value, wanted) {
    A.equal(lt(other, value), wanted);
  }

  it('checks if "value" is smaller than "other"', () => {
    test(2, 1, true);
    test(2, 2, false);
    test(1, 2, false);
  });

  it('compares strings', () => {
    test('bc', 'ab', true);
    test('bc', 'de', false);
    test('bc', 'd', false);
  });

  it('allows partial application', () => {
    A.equal(lt(2)(1), true);
  });
});
