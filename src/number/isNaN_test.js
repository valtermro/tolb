/* eslint-env mocha */
import A from 'assert'
import isNaN from './isNaN'

describe('number.isNaN(subject)', () => {
  it('checks if "subject" is NaN', () => {
    const assert = (sub, wanted) => A.equal(isNaN(sub), wanted)
    assert(NaN, true)
    assert(Number.NaN, true)
    assert('foo', false)
    assert(1, false)
    assert('1', false)
    assert([], false)
    assert({}, false)
    assert(undefined, false)
    assert(null, false)
  })
})
