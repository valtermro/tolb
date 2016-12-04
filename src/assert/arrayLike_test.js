/* eslint-env mocha */
import A from 'assert';
import arrayLike from './arrayLike';
import util from '../../_dev/util';

describe('assert.arrayLike(subject)', () => {
  it('checks if "subject" is an array-like object', () => {
    const assert = (sub, wanted) => A.equal(arrayLike(sub), wanted);
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
