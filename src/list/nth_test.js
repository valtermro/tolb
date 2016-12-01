/* eslint-env mocha */
import A from 'assert';
import nth from './nth';
import util from '../../_dev/util';

describe('list.nth(n, list)', () => {
  function test(src) {
    for (let i = -1; i < src.length + 1; i++)
      A.equal(nth(i, src), src[i]);
  }

  it('deals with strings', () => {
    test('abcd');
  });

  it('deals with arrays', () => {
    test([1, 2, 3, 4]);
  });

  it('deals with array-like objects', () => {
    test(util.arrayLike(1, 2, 3, 4));
  });

  it('allows partial application', () => {
    A.equal(nth(1)([1, 2, 3, 4]), 2);
  });
});
