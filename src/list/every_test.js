/* eslint-env mocha */
import A from 'assert';
import every from './every';
import util from '../../_dev/util';

describe('every(pred, list)', () => {
  function test(list, wanted) {
    A.equal(every(util.isEven, list), wanted);
  }

  it('checks if "predicate" matches all items in "list"', () => {
    test([2, 4, 6], true);
    test([1, 2, 4], false);
    test([0, 2, 3], false);
  });

  it('returns true if "list" in empty', () => {
    test([], true);
  });

  it('"pred" receives the current index as its second argument', () => {
    let k = 0;
    every((_, i) => A.equal(i, k++), [1, 2, 3, 4]);
  });

  it('allows partial application', () => {
    A.equal(every(util.isEven)([0, 2]), true);
  });
});
