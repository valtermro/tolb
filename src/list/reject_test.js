/* eslint-env mocha */
import A from 'assert';
import reject from './reject';
import util from '../../lib/util';

describe('list.reject(pred, list)', () => {
  const lists = [
    ['A', 'b', 'C', 'd'],
    util.arrayLike('A', 'b', 'C', 'd'),
    'AbCd',
  ];

  const noMatches = [
    ['A', 'B', 'C'],
    util.arrayLike('A', 'B', 'C'),
    'ABC',
  ];

  it('removes elements in "list" based on "pred"', () => {
    lists.forEach((list) => {
      A.deepEqual(reject(util.isUpper, list), ['b', 'd']);
    });

    noMatches.forEach((list) => {
      A.deepEqual(reject(util.isUpper, list), []);
    });

    // it doesn't matter the index the element is at
    A.deepEqual(reject(util.isUpper, ['A', 'b', 'C', 'd']), ['b', 'd']);
    A.deepEqual(reject(util.isUpper, ['a', 'B', 'c', 'D']), ['a', 'c']);
  });

  it('"pred" receives the current index as its second argument', () => {
    lists.forEach((list) => {
      let k = 0;
      reject((_, i) => A.equal(i, k++), list);
    });
  });

  it('allows partial application', () => {
    A.deepEqual(reject(util.isUpper)(['A']), []);
  });
});
