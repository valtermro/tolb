/* eslint-env mocha */
import A from 'assert'
import isString from './isString'
import util from '../../_dev/util'

describe('list.isString(subject)', () => {
  it('checks if "subject" is a string', () => {
    const assert = (sub, wanted) => A.equal(isString(sub), wanted)
    assert('', true)
    assert([], false)
    assert(util.arrayLike(1), false)
    assert(0, false)
    assert(null, false)
    assert(undefined, false)
  })
})
