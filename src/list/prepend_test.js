/* eslint-env mocha */
import A from 'assert'
import prepend from './prepend'

describe('list.prepend(value, list)', () => {
  const array = [2, 3, 4]
  const arrayLike = (function () { return arguments })(2, 3, 4)

  it('deals with strings', () => {
    A.equal(prepend('a', 'bc'), 'abc')
  })

  it('deals with arrays', () => {
    A.deepEqual(prepend(1, array), [1, 2, 3, 4])
    A.deepEqual(prepend([1], array), [[1], 2, 3, 4])
  })

  it('deals with array-like objects', () => {
    A.deepEqual(prepend(1, arrayLike), [1, 2, 3, 4])
  })

  it('allows partial application', () => {
    A.equal(prepend('a')('bc'), 'abc')
    A.deepEqual(prepend(1)(array), [1, 2, 3, 4])
  })
})
