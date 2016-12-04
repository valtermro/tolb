/* eslint-env mocha */
import A from 'assert';
import string from './string';
import util from '../../_dev/util';

describe('assert.string(subject)', () => {
  it('checks if "subject" is a string', () => {
    const assert = (sub, wanted) => A.equal(string(sub), wanted);
    assert('', true);
    assert([], false);
    assert(util.arrayLike(1), false);
    assert(0, false);
    assert(null, false);
    assert(undefined, false);
  });
});
