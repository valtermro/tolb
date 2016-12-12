/* eslint-env mocha */
import A from 'assert';
import zip from './zip';

describe('zip(left, right)', () => {
  it('returns a list of pairs', () => {
    const left = [1, 2, 3];
    const right = [4, 5, 6];
    A.deepEqual(zip(left, right), [[1, 4], [2, 5], [3, 6]]);
    A.deepEqual(left, [1, 2, 3]);
    A.deepEqual(right, [4, 5, 6]);
  });

  it('ignores extra elements in the larger list', () => {
    A.deepEqual(zip([1, 2], [3, 4, 5]), [[1, 3], [2, 4]]);
    A.deepEqual(zip([1, 2, 3], [4, 5]), [[1, 4], [2, 5]]);
  });

  it('allows partial application', () => {
    A.deepEqual(zip([1, 2])([3, 4]), [[1, 3], [2, 4]]);
  });
});
