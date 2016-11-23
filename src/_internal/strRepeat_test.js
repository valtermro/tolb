/* eslint-env mocha */
import A from 'assert'
import strRepeat from './strRepeat'
import util from '../../_dev/util'

describe('_iternal.strRepeat(n, char)', () => {
  it('repeats "char" "n" times', () => {
    for (let i = 0; i < 1000; i++) {
      const wanted = util.makeArray(i).map(() => 'a').join('')
      A.equal(strRepeat(i, 'a'), wanted)
    }
  })
})
