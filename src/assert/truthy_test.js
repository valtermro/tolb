/* eslint-env mocha */
import A from 'assert';
import truthy from './truthy';

describe('assert.truthy(subject)', () => {
  it('checks if "subject" is truthy', () => {
    const assert = (value, wanted) => A.equal(truthy(value), wanted);
    assert(null, false);
    assert(undefined, false);
    assert(false, false);
    assert(true, true);
    assert(0, true);
    assert(-1, true);
    assert('', true);
    assert('foo', true);
    assert([], true);
    assert({}, true);
  });
});
