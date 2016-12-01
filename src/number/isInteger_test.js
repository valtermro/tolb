/* eslint-env mocha */
import A from 'assert';
import isInteger from './isInteger';

describe('number.isInteger(subject)', () => {
  it('checks if "subject" is an integer', () => {
    const assert = (sub, wanted) => A.equal(isInteger(sub), wanted);
    assert(1, true);
    assert(0, true);
    assert(-0, true);
    assert(-1, true);
    assert(1.0, true);
    assert(-1.0, true);
    assert(1.8, false);
    assert(-1.8, false);
    assert(Math.PI, false);
    assert(NaN, false);
    assert(Infinity, false);
    assert(-Infinity, false);
    assert(new Number(1), false) // eslint-disable-line
    assert('foo', false);
    assert([], false);
    assert({}, false);
    assert(null, false);
    assert(undefined, false);
  });
});
