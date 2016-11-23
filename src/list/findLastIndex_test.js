/* eslint-env mocha */
import A from 'assert'
import findLastIndex from './findLastIndex'

describe('list.findLastIndex(pred, list)', () => {
  const gt2 = x => x > 2
  const lt2 = x => x < 2

  it('returns the index of the last element in "list" that matches "predicate"', () => {
    A.equal(findLastIndex(gt2, [2, 3, 4, 2, 3]), 4)
    A.equal(findLastIndex(lt2, [1, 2, 3]), 0)
  })

  it('returns -1 if nothing is found', () => {
    A.equal(findLastIndex(lt2, [2, 3]), -1)
  })

  it('"pred" receives the current index as its second argument', () => {
    let k = 3
    findLastIndex((_, i) => A.equal(i, k--), [1, 2, 3, 4])
  })

  it('allows partial application', () => {
    A.equal(findLastIndex(lt2)([1, 2, 3]), 0)
  })
})
