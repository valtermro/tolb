/* eslint-env mocha */
import A from 'assert'
import contains from './contains'
import util from '../../_dev/util'

describe('list.contains(value, list)', () => {
  const str = 'foo bar'
  const array = ['foo', 'bar', 'b']
  const arrayLike = util.arrayLike('foo', 'bar', 'b')

  function test(list) {
    A.equal(contains('foo', list), true)
    A.equal(contains('bar', list), true)
    A.equal(contains('b', list), true)
    A.equal(contains('baz', list), false)
  }

  it('deals with strings', () => {
    test(str)
  })

  it('deals with arrays', () => {
    test(array)
  })

  it('deals with arrays', () => {
    test(arrayLike)
  })

  it('tests equality deeply', () => {
    A.equal(contains([1], [[1]]), true)
    A.equal(contains({ a: 1 }, [{ a: 1 }]), true)
    A.equal(contains({ a: 1 }, [{ a: 2 }]), false)
  })

  it('allows partial application', () => {
    A.equal(contains('foo')(array), true)
  })
})
