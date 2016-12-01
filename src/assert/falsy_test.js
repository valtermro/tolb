/* eslint-env mocha */
import A from 'assert';
import falsy from './falsy';

describe('assert.falsy(subject)', () => {
  it('checks if "subject" is falsy', () => {
    const assert = (value, wanted) => A.equal(falsy(value), wanted);
    assert(null, true);
    assert(undefined, true);
    assert(false, true);
    assert(true, false);
    assert(0, false);
    assert(-1, false);
    assert('', false);
    assert('foo', false);
    assert([], false);
    assert({}, false);
  });
});
