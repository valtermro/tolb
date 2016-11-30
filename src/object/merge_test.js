/* eslint-env mocha */
import A from 'assert'
import merge from './merge'

describe('object.merge(source, target)', () => {
  const obj1 = { foo: 1, bar: 2 }
  const obj2 = { baz: 3 }
  const wanted = { foo: 1, bar: 2, baz: 3 }
  const merged = merge(obj1, obj2)

  it('merges "source" and "target"', () => {
    A.deepEqual(merged, wanted)
  })

  it('does not mutate the original objects', () => {
    A.deepEqual(obj1, { foo: 1, bar: 2 })
    A.deepEqual(obj2, { baz: 3 })
  })

  it('keys in "source" override keys in "target"', () => {
    A.deepEqual(merge({ bar: 10 }, obj1), { bar: 10, foo: 1 })
  })

  it('allows partial application', () => {
    A.deepEqual(merge(obj1)(obj2), wanted)
  })
})
