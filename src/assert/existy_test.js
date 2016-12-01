/* eslint-env mocha */
import A from 'assert';
import existy from './existy';

describe('assert.existy(subject)', () => {
  it('checks if "subject" has value', () => {
    const assert = (value, wanted) => A.equal(existy(value), wanted);
    assert(null, false);
    assert(undefined, false);
    assert(false, true);
    assert(true, true);
    assert(0, true);
    assert(-1, true);
    assert('', true);
    assert([], true);
    assert({}, true);
  });
});
