/* eslint-env mocha */
import A from 'assert';
import some from './some';
import util from '../../lib/util';

describe('list.some(pred, list)', () => {
  const hasUpperCase = [
    'aBc',
    'Abc',
    'abC',
    ['A', 'b', 'c'],
    ['a', 'B', 'c'],
    ['A', 'b', 'C'],
    util.arrayLike('A', 'b', 'c'),
    util.arrayLike('a', 'B', 'c'),
    util.arrayLike('a', 'b', 'C'),
  ];

  const noUpperCase = [
    'abc',
    ['a', 'b', 'c'],
    util.arrayLike('a', 'b', 'c'),
  ];

  const emptyLists = [
    '',
    [],
    util.arrayLike(),
  ];

  it('checks if "predicate" matches any item in "list"', () => {
    hasUpperCase.forEach((list) => {
      A.equal(some(util.isUpper, list), true);
    });

    noUpperCase.forEach((list) => {
      A.equal(some(util.isUpper, list), false);
    });
  });

  it('returns false if "list" in empty', () => {
    emptyLists.forEach((list) => {
      A.equal(some(util.isUpper, list), false);
    });
  });

  it('"pred" receives the current index as its second argument', () => {
    hasUpperCase.forEach((list) => {
      let k = 0;
      some((_, i) => A.equal(i, k++), list);
    });
  });

  it('allows partial application', () => {
    hasUpperCase.forEach((list) => {
      A.equal(some(util.isUpper)(list), true);
    });
  });
});
