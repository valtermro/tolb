/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback */
import A from 'assert';
import isFunction from './isFunction';

describe('isFunction(subject)', () => {
  it('checks if "subject" is a function', () => {
    const assert = (sub, wanted) => A.equal(isFunction(sub), wanted);
    assert(function () { /**/ }, true);
    assert(() => { /**/ }, true);
    assert([].map, true);
    assert('', false);
    assert(0, false);
    assert([], false);
    assert({}, false);
    assert(null, false);
    assert(undefined, false);
  });
});
