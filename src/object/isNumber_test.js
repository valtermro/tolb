/* eslint-env mocha */
import A from 'assert';
import isNumber from './isNumber';

describe('isNumber(subject)', () => {
  it('checks if "subject" is a number', () => {
    const assert = (sub, wanted) => A.equal(isNumber(sub), wanted);
    assert(0, true);
    assert(1, true);
    assert(-1, true);
    assert(Math.PI, true);
    assert(NaN, false);
    assert(Infinity, false);
    assert('foo', false);
    assert(new Number(), false);
    assert([], false);
    assert(undefined, false);
    assert(null, false);
  });
});
