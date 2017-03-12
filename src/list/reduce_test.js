/* eslint-env mocha */
import A from 'assert';
import reduce from './reduce';
import util from '../../build/util';

describe('reduce(fn, accum, list)', () => {
  const array = ['b', 'c', 'd'];
  const arrayLike = util.arrayLike('b', 'c', 'd');

  it('uses "fn" to reduce "accum" and the values in "list" to a single value', () => {
    A.equal(reduce(util.concat, 'a', array), 'abcd');
    A.equal(reduce(util.concat, 'a', []), 'a');
  });

  it('deals with array-like objects', () => {
    A.equal(reduce(util.concat, 'a', arrayLike), 'abcd');
  });

  it('"fn" receives the current index as its third argument', () => {
    const assert = (list) => {
      let k = 0;
      reduce((_, __, i) => A.equal(i, k++), '', list);
    };
    assert(array);
    assert(arrayLike);
  });

  it('allows partial application', () => {
    A.equal(reduce(util.concat)('a')('b'), 'ab');
    A.equal(reduce(util.concat)('a', 'b'), 'ab');
    A.equal(reduce(util.concat, 'a')('b'), 'ab');
  });
});
