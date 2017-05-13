/* eslint-env mocha */
import A from 'assert';
import filter from './filter';
import util from '../../lib/util';

describe('list.filter(pred, list)', () => {
  const hasMatches = [
    ['A', 'b', 'C', 'd'],
    util.arrayLike('A', 'b', 'C', 'd'),
    'AbCd',
  ];

  const noMatches = [
    ['a', 'b', 'c'],
    util.arrayLike('a', 'b', 'c'),
    'abc',
  ];

  it('filter "list" based on "pred"', () => {
    hasMatches.forEach((list) => {
      A.deepEqual(filter(util.isUpper, list), ['A', 'C']);
    });

    noMatches.forEach((list) => {
      A.deepEqual(filter(util.isUpper, list), []);
    });

    // it doesn't matter the index the element is at
    A.deepEqual(filter(util.isUpper, ['A', 'b', 'C', 'd']), ['A', 'C']);
    A.deepEqual(filter(util.isUpper, ['a', 'B', 'c', 'D']), ['B', 'D']);
  });

  it('"pred" receives the current index as its second argument', () => {
    hasMatches.forEach((list) => {
      let k = 0;
      filter((_, i) => A.equal(i, k++), list);
    });
  });

  it('allows partial application', () => {
    A.deepEqual(filter(util.isEven)([1, 2]), [2]);
  });
});
