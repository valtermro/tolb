/* eslint-env mocha */
import A from 'assert';
import every from './every';
import util from '../../lib/util';

describe('list.every(pred, list)', () => {
  const allUpperCase = [
    'ABC',
    ['A', 'B', 'C'],
    util.arrayLike('A', 'B', 'C'),
  ];

  const mixedCase = [
    'ABc',
    'aBC',
    ['A', 'B', 'c'],
    ['a', 'B', 'C'],
    util.arrayLike('A', 'B', 'c'),
    util.arrayLike('a', 'B', 'C'),
  ];

  const emptyLists = [
    '',
    [],
    util.arrayLike(),
  ];

  it('checks if "predicate" matches all items in "list"', () => {
    allUpperCase.forEach((list) => {
      A.equal(every(util.isUpper, list), true);
    });

    mixedCase.forEach((list) => {
      A.equal(every(util.isUpper, list), false);
    });
  });

  it('returns true if "list" in empty', () => {
    emptyLists.forEach((list) => {
      A.equal(every(util.isUpper, list), true);
    });
  });

  it('"pred" receives the current index as its second argument', () => {
    allUpperCase.forEach((list) => {
      let k = 0;
      every((_, i) => A.equal(i, k++), list);
    });
  });

  it('allows partial application', () => {
    allUpperCase.forEach((list) => {
      A.equal(every(util.isUpper)(list), true);
    });
  });
});
