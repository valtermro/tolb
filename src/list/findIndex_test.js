/* eslint-env mocha */
import A from 'assert';
import findIndex from './findIndex';
import util from '../../build/util';

describe('findIndex(pred, list)', () => {
  const array = util.makeArray(10);
  const gt8 = x => x > 8;
  const gt0 = x => x > 0;

  it('returns the index of the first item in "list" that matches "pred"', () => {
    A.equal(findIndex(gt8, array), 9);
    A.equal(findIndex(gt0, array), 1);
  });

  it('returns -1 if nothing is found', () => {
    A.equal(findIndex(x => x > 9, array), -1);
  });

  it('"pred" receives the current index as its second argument', () => {
    let k = 0;
    findIndex((_, i) => A.equal(i, k++), array);
  });

  it('allows partial application', () => {
    A.equal(findIndex(gt8)(array), 9);
  });
});
