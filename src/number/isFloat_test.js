/* eslint-env mocha */
import A from 'assert';
import isFloat from './isFloat';

describe('isFloat(subject)', () => {
  it('checks if "subject" is a floating point number', () => {
    const assert = (sub, wanted) => A.equal(isFloat(sub), wanted);
    assert(1.8, true);
    assert(-1.8, true);
    assert(Math.PI, true);
    assert(1, false);
    assert(1.0, false);
    assert(-1.0, false);
    assert(new Number(1), false) // eslint-disable-line
    assert(NaN, false);
    assert(Infinity, false);
    assert(-Infinity, false);
    assert('foo', false);
    assert([], false);
    assert({}, false);
    assert(null, false);
    assert(undefined, false);
  });
});
