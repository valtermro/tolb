/* eslint-env mocha */
import A from 'assert'
import keys from './keys'

describe('object.keys(obj)', () => {
  it('returns the list of keys of "obj"', () => {
    A.deepEqual(keys({ foo: 1, bar: 2, baz: 3 }), ['foo', 'bar', 'baz'])
  })
})
