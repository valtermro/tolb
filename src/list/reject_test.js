/* eslint-env mocha */
import A from 'assert';
import reject from './reject';
import util from '../../_dev/util';

describe('reject(pred, list)', () => {
  const array0 = util.makeArray(8, false);
  const array1 = util.makeArray(8, true);

  it('removes elements in "list" based on "pred"', () => {
    A.deepEqual(reject(util.isEven, array0), [1, 3, 5, 7]);
    A.deepEqual(reject(util.isEven, array1), [1, 3, 5, 7]);
    A.deepEqual(reject(util.isEven, [0, 2]), []);
    A.deepEqual(array0, util.makeArray(8, false));
    A.deepEqual(array1, util.makeArray(8, true));
  });

  it('"pred" receives the current index as its second argument', () => {
    let k = 0;
    reject((_, i) => A.equal(i, k++), array0);
  });

  it('allows partial application', () => {
    A.deepEqual(reject(util.isEven)(array0), [1, 3, 5, 7]);
  });
});
