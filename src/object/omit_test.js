/* eslint-env mocha */
import A from 'assert'
import omit from './omit'

describe('object.omit(keys, obj)', () => {
  const obj = { foo: 1, bar: 2, baz: 3, bleh: null }

  it('returns a copy of "obj" excluding all "keys" in it', () => {
    A.deepEqual(omit(['baz', 'foo'], obj), { bar: 2, bleh: null })
    A.deepEqual(obj, { foo: 1, bar: 2, baz: 3, bleh: null })
  })

  it('allows partial application', () => {
    A.deepEqual(omit(['baz', 'foo', 'bleh'])(obj), { bar: 2 })
  })
})
