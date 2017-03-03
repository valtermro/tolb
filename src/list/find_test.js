/* eslint-env mocha */
import A from 'assert';
import find from './find';
import util from '../../build/util';

describe('find(pred, list)', () => {
  const array = util.makeArray(10);
  const gt8 = x => x > 8;
  const lt1 = x => x < 1;

  it('returns the first item in "list" that matches "pred"', () => {
    A.equal(find(gt8, array), 9);
    A.equal(find(lt1, array), 0);
  });

  it('returns undefined if nothing is found', () => {
    A.equal(find(x => x > 9, array), undefined);
  });

  it('"pred" receives the current index as its second argument', () => {
    let k = 0;
    find((_, i) => A.equal(i, k++), array);
  });

  it('allows partial application', () => {
    A.equal(find(gt8)(array), 9);
  });
});
