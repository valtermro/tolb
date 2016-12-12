/* eslint-env mocha */
import A from 'assert';
import concat from './concat';
import util from '../../_dev/util';

describe('concat(other, list)', () => {
  it('deals with strings', () => {
    A.equal(concat('ab', 'de'), 'deab');
  });

  it('deals with arrays', () => {
    const other = [1, 2];
    const list = [3, 4];
    A.deepEqual(concat(other, list), [3, 4, 1, 2]);
    A.deepEqual(other, [1, 2]);
    A.deepEqual(list, [3, 4]);
  });

  it('deals with array-like objects', () => {
    const other = util.arrayLike(1, 2);
    const list = util.arrayLike(3, 4);
    A.deepEqual(concat(other, list), [3, 4, 1, 2]);
  });

  it('allows partial application', () => {
    A.deepEqual(concat([2])([1]), [1, 2]);
  });
});
