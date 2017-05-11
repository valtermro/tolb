/* eslint-env mocha */
import A from 'assert';
import some from './some';
import util from '../../lib/stubs';

describe('list.some(pred, list)', () => {
  function test(list, wanted) {
    A.equal(some(util.isEven, list), wanted);
  }

  it('checks if "predicate" matches any item in "list"', () => {
    test([1, 3, 4], true);
    test([0, 1, 3], true);
    test([1, 2, 3], true);
    test([1, 3, 5], false);
  });

  it('returns false if "list" in empty', () => {
    test([], false);
  });

  it('"pred" receives the current index as its second argument', () => {
    let k = 0;
    some((_, i) => A.equal(i, k++), [1, 2, 3, 4]);
  });

  it('allows partial application', () => {
    A.equal(some(util.isEven)([1, 2]), true);
  });
});
