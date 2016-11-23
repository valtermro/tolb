/* eslint-env mocha */
import A from 'assert'
import join from './join'
import util from '../../_dev/util'

describe('list.join(glue, list)', () => {
  const array = util.makeArray(1000)

  it('joins the values in "list" using "glue" as the separator', () => {
    A.equal(join(',', array), array.join(','))
  })

  it('deals with array-like objects', () => {
    const arrayLike = util.arrayLike.apply(undefined, array)
    A.equal(join(', ', arrayLike), array.join(', '))
  })

  it('allows partial application', () => {
    A.equal(join('-')(array), array.join('-'))
  })
})
