/* eslint-env mocha */
import A from 'assert'
import partial from './partial'
import util from '../../_dev/util'

describe('function.partial(fn, leftArgs)', () => {
  const fn = util.foo4

  it('uses "leftArgs" as the left part of the arguments to "fn"', () => {
    const wanted = [1, 2, 3, 4]
    A.deepEqual(partial(fn, [1, 2, 3, 4])(), wanted)
    A.deepEqual(partial(fn, [1, 2])(3, 4), wanted)
    A.deepEqual(partial(fn, [1, 2])(3, 4, 5, 6), wanted)
    A.deepEqual(partial(fn, [])(1, 2, 3, 4), wanted)
    A.deepEqual(partial(fn, [])(1, 2, 3, 4, 5, 6), wanted)
  })

  it('uses itself as a placeholder for arguments', () => {
    const wanted = [1, 3, 2, 4]
    A.deepEqual(partial(fn, [1, partial, 2])(3, 4), wanted)
    A.deepEqual(partial(fn, [1, partial, 2, partial])(3, 4), wanted)
  })

  it('reports the arity of the returned function', () => {
    const assert = (args, len) => A.equal(partial(fn, args).length, len)
    assert([], 4)
    assert([''], 3)
    assert(['', ''], 2)
    assert(['', '', ''], 1)
    assert(['', '', '', '', ''], 0)
    assert(['', '', '', ''], 0)
    assert(['', partial, ''], 2)
    assert(['', partial, '', partial], 2)
    assert(['', partial, '', partial, '', '', '', ''], 0)
  })
})
