/* eslint-env mocha */
import A from 'assert';
import array from './array';
import util from '../../_dev/util';

describe('array(subject)', () => {
  it('checks if "subject" is an array', () => {
    const assert = (sub, wanted) => A.equal(array(sub), wanted);
    assert([], true);
    assert(new Array(), true);
    assert('', false);
    assert(util.arrayLike(1), false);
    assert(0, false);
    assert(null, false);
    assert(undefined, false);
  });
});
