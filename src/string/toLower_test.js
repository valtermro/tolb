/* eslint-env mocha */
import A from 'assert'
import toLower from './toLower'

describe('string.toLower(str)', () => {
  it('converts "str" to lower case', () => {
    const assert = str => A.equal(toLower(str), str.toLowerCase())
    assert('Foo')
    assert('FoA')
    assert('FoA BAr')
  })
})
