/* eslint-env mocha */
import A from 'assert';
import filter from './filter';
import util from '../../lib/stubs';

describe('list.filter(pred, list)', () => {
  const array0 = util.makeArray(8, false);
  const array1 = util.makeArray(8, true);

  it('filter "list" based on "pred"', () => {
    A.deepEqual(filter(util.isEven, array0), [0, 2, 4, 6]);
    A.deepEqual(filter(util.isEven, array1), [2, 4, 6, 8]);
    A.deepEqual(filter(util.isEven, [1, 3]), []);
    A.deepEqual(array0, util.makeArray(8, false));
    A.deepEqual(array1, util.makeArray(8, true));
  });

  it('"pred" receives the current index as its second argument', () => {
    let k = 0;
    filter((_, i) => A.equal(i, k++), array0);
  });

  it('allows partial application', () => {
    A.deepEqual(filter(util.isEven)(array0), [0, 2, 4, 6]);
  });
});
