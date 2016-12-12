/* eslint-env mocha */
import A from 'assert';
import curryArgs from './curryArgs';
import util from '../../../_dev/util';

describe('_internal.curryArgs(input)', () => {
  it('returns "input" if its length is greater than 0', () => {
    const assert = value => A.deepEqual(curryArgs(value), value);
    assert([1]);
    assert(util.arrayLike(1));
  });

  it('returns an array holding "undefined" if "value" is empty', () => {
    const assert = value => A.deepEqual(curryArgs(value), [undefined]);
    assert([]);
    assert(util.arrayLike());
  });
});
