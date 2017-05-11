/* eslint-env mocha */
import A from 'assert';
import findLast from './findLast';

describe('list.findLast(pred, list)', () => {
  const gt2 = x => x > 2;
  const lt2 = x => x < 2;

  it('returns the last element in "list" that matches "pred"', () => {
    A.equal(findLast(gt2, [2, 3, 4, 2, 3]), 3);
    A.equal(findLast(lt2, [1, 2, 3]), 1);
  });

  it('returns undefined if nothing is found', () => {
    A.equal(findLast(lt2, [2, 3]), undefined);
  });

  it('"pred" receives the current index as its second argument', () => {
    let k = 3;
    findLast((_, i) => A.equal(i, k--), [1, 2, 3, 4]);
  });

  it('allows partial application', () => {
    A.equal(findLast(lt2)([1, 2, 3]), 1);
  });
});
