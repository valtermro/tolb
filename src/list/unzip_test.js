/* eslint-env mocha */
import A from 'assert';
import unzip from './unzip';

describe('unzip(list)', () => {
  it('converts a list of pairs into a pair of lists', () => {
    const array = [[1, 4], [2, 5], [3, 6]];
    A.deepEqual(unzip(array), [[1, 2, 3], [4, 5, 6]]);
    A.deepEqual(array, [[1, 4], [2, 5], [3, 6]]);
  });

  it('ignores extra elements', () => {
    const array = [[1, 5], [2, 6, 9], [3, 7], [4, 8, 10]];
    A.deepEqual(unzip(array), [[1, 2, 3, 4], [5, 6, 7, 8]]);
  });
});
