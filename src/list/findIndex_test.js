/* eslint-env mocha */
import A from 'assert';
import findIndex from './findIndex';
import util from '../../lib/util';

describe('list.findIndex(pred, list)', () => {
  // a list of lists with one uppercased letter, at index 2
  const hasUpper = [
    ['a', 'a', 'A', 'A', 'A'],
    util.arrayLike('a', 'a', 'A', 'A', 'A'),
    'aaAAA',
  ];

  // a list of lists without any uppercased letters
  const noUpper = [
    ['a', 'a', 'a', 'a', 'a'],
    util.arrayLike('a', 'a', 'a', 'a', 'a'),
    'aaaaa',
  ];

  it('returns the index of the first item in "list" that matches "pred"', () => {
    hasUpper.forEach((list) => {
      A.equal(findIndex(util.isUpper, list), 2);
    });
  });

  it('returns -1 if nothing is found', () => {
    noUpper.forEach((list) => {
      A.equal(findIndex(util.isUpper, list), -1);
    });
  });

  it('"pred" receives the current index as its second argument', () => {
    hasUpper.forEach((list) => {
      let k = 0;
      findIndex((_, i) => A.equal(i, k++), list);
    });
  });

  it('allows partial application', () => {
    hasUpper.forEach((list) => {
      A.equal(findIndex(util.isUpper)(list), 2);
    });
  });
});
