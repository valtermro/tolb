/* eslint-env mocha */
import A from 'assert';
import append from './append';
import util from '../../lib/util';

describe('list.append(value, list)', () => {
  it('deals with strings', () => {
    A.equal(append('a', 'bc'), 'bca');
  });

  it('deals with arrays', () => {
    const input = [2, 3, 4];

    A.deepEqual(append(1, input), [2, 3, 4, 1]);
    A.deepEqual(append([1], input), [2, 3, 4, [1]]);
  });

  it('deals with array-like objects', () => {
    const input = util.arrayLike(2, 3, 4);

    A.deepEqual(append(1, input), [2, 3, 4, 1]);
    A.deepEqual(append([1], input), [2, 3, 4, [1]]);
  });

  it('allows partial application', () => {
    A.equal(append('a')('bc'), 'bca');
    A.deepEqual(append(1)([2]), [2, 1]);
  });
});
