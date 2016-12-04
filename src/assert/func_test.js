/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback */
import A from 'assert';
import func from './func';

describe('assert.func(subject)', () => {
  it('checks if "subject" is a function', () => {
    const assert = (sub, wanted) => A.equal(func(sub), wanted);
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
