/* eslint-env mocha */
import A from 'assert';
import findLastIndex from './findLastIndex';
import util from '../../lib/util';

describe('list.findLastIndex(pred, list)', () => {
  // a list of lists with uppercased letters from index 1 to index 3
  const hasUpper = [
    ['a', 'A', 'A', 'A', 'a', 'a'],
    util.arrayLike('a', 'A', 'A', 'A', 'a', 'a'),
    'aAAAaa',
  ];

  // a list of lists without any uppercased letters
  const noUpper = [
    ['a', 'a', 'a', 'a', 'a'],
    util.arrayLike('a', 'a', 'a', 'a', 'a'),
    'aaaaa',
  ];

  it('returns the index of the last element in "list" that matches "pred"', () => {
    hasUpper.forEach((list) => {
      A.equal(findLastIndex(util.isUpper, list), 3);
    });

    // it doesn't matter the index the element is at
    A.equal(findLastIndex(util.isUpper, ['a', 'a', 'A']), 2);
    A.equal(findLastIndex(util.isUpper, ['A', 'a']), 0);
    A.equal(findLastIndex(util.isUpper, ['A']), 0);
  });

  it('returns -1 if nothing is found', () => {
    noUpper.forEach((list) => {
      A.equal(findLastIndex(util.isUpper, list), -1);
    });
  });

  it('"pred" receives the current index as its second argument', () => {
    hasUpper.forEach((list) => {
      let k = list.length - 1;
      findLastIndex((_, i) => A.equal(i, k--), list);
    });
  });

  it('allows partial application', () => {
    hasUpper.forEach((list) => {
      A.equal(findLastIndex(util.isUpper)(list), 3);
    });
  });
});
