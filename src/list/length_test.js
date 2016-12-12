/* eslint-env mocha */
import A from 'assert';
import length from './length';
import util from '../../_dev/util';

describe('length(list)', () => {
  it('returns the length of "list"', () => {
    const assert = (list, wanted) => A.equal(length(list), wanted);
    assert('a', 1);
    assert('', 0);
    assert([1, 2], 2);
    assert([], 0);
    assert(util.arrayLike(1, 2, 3, 4), 4);
    assert(util.arrayLike(), 0);
  });
});
