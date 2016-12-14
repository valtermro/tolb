/* eslint-env mocha */
import A from 'assert';
import reduce from './reduce';
import util from '../../_dev/util';

describe('reduce(fn, initialValue, list)', () => {
  const array = ['b', 'c', 'd'];
  const arrayLike = util.arrayLike('b', 'c', 'd');
  const obj = { b: 'b', c: 'c', d: 'd' };

  it('uses "fn" to reduce "initialValue" and the value in "list" to a single value', () => {
    A.equal(reduce(util.concat, 'a', array), 'abcd');
    A.equal(reduce(util.concat, 'a', []), 'a');
  });

  it('deals with array-like objects', () => {
    A.equal(reduce(util.concat, 'a', arrayLike), 'abcd');
  });

  it('deals with objects', () => {
    A.equal(reduce(util.concat, 'a', obj), 'abcd');
  });

  it('"fn" receives the current index as its third argument', () => {
    const assert = (list) => {
      let k = 0;
      const keys = Object.keys(list);
      reduce((_, __, i) => {
        A.equal(i, keys[k++]);
      }, '', list);
    };
    assert(array);
    assert(arrayLike);
    assert(obj);
  });

  it('allows partial application', () => {
    A.equal(reduce(util.concat)('a')('b'), 'ab');
    A.equal(reduce(util.concat)('a', 'b'), 'ab');
    A.equal(reduce(util.concat, 'a')('b'), 'ab');
  });
});
