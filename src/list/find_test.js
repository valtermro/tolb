/* eslint-env mocha */
import A from 'assert';
import find from './find';
import util from '../../lib/util';

describe('list.find(pred, list)', () => {
  // a list of lists containing some uppercased letters
  const hasUpper = [
    ['a', 'B', 'c', 'D', 'e', 'f'],
    util.arrayLike('a', 'B', 'c', 'D', 'e', 'f'),
    'aBcDef',
  ];

  // a list of lists without any uppercased letters
  const noUpper = [
    ['a', 'b', 'c', 'd'],
    util.arrayLike('a', 'b', 'c', 'd'),
    'abcd',
  ];

  it('returns the first element in "list" that matches "pred"', () => {
    hasUpper.forEach((list) => {
      A.equal(find(util.isUpper, list), 'B');
    });

    // it doesn't matter the index the element is at
    A.equal(find(util.isUpper, ['a', 'b', 'C']), 'C');
    A.equal(find(util.isUpper, ['A', 'b']), 'A');
    A.equal(find(util.isUpper, ['A']), 'A');
  });

  it('returns undefined if nothing is found', () => {
    noUpper.forEach((list) => {
      A.equal(find(util.isUpper, list), undefined);
    });
  });

  it('"pred" receives the current index as its second argument', () => {
    hasUpper.forEach((list) => {
      let k = 0;
      find((_, i) => A.equal(i, k++), list);
    });
  });

  it('allows partial application', () => {
    hasUpper.forEach((list) => {
      A.equal(find(util.isUpper)(list), 'B');
    });
  });
});
