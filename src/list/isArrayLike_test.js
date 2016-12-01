/* eslint-env mocha */
import A from 'assert';
import isArrayLike from './isArrayLike';
import util from '../../_dev/util';

describe('list.isArrayLike(subject)', () => {
  it('checks if "subject" is an array-like object', () => {
    const assert = (sub, wanted) => A.equal(isArrayLike(sub), wanted);
    assert(util.arrayLike(), true);
    assert(util.arrayLike(1), true);
    assert([], false);
    assert(function () {}, false) // eslint-disable-line
    assert('', false);
    assert({ length: -1, '0': 'foo' }, false);
    assert({ length: Infinity, '0': 'foo' }, false);
    assert({ length: NaN, '0': 'foo' }, false);
  });
});
