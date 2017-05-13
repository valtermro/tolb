/* eslint-env mocha */
import A from 'assert';
import concat from './concat';
import util from '../../lib/util';

describe('list.concat(other, list)', () => {
  it('deals with strings', () => {
    A.equal(concat('ab', 'de'), 'deab');
  });

  it('deals with arrays', () => {
    const other = [1, 2];
    const list = [3, 4];

    A.deepEqual(concat(other, list), [3, 4, 1, 2]);

    // the original value should not be mutated
    A.deepEqual(other, [1, 2]);
    A.deepEqual(list, [3, 4]);
  });

  it('deals with array-like objects', () => {
    A.deepEqual(
      concat(util.arrayLike(1, 2), util.arrayLike(3, 4)),
      [3, 4, 1, 2]);
  });

  it('allows partial application', () => {
    A.deepEqual(concat([2])([1]), [1, 2]);
  });
});
