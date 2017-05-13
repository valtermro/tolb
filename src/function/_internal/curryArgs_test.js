/* eslint-env mocha */
import A from 'assert';
import curryArgs from './curryArgs';
import util from '../../../lib/util';

describe('function._internal.curryArgs(input)', () => {
  it('returns "input" if its length is greater than 0', () => {
    [[1, 2], util.arrayLike(1, 2)].forEach((input) => {
      A.deepEqual(curryArgs(input), input);
    });
  });

  it('returns an array holding "undefined" if "value" is empty', () => {
    const assert = value => A.deepEqual(curryArgs(value), [undefined]);
    assert([]);
    assert(util.arrayLike());
  });
});
