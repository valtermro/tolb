/* eslint-env mocha */
import A from 'assert';
import reduce from './reduce';
import util from '../../_dev/util';

describe('reduce(fn, initialValue, list)', () => {
  const array = ['b', 'c', 'd'];

  it('uses "fn" to reduce "initialValue" and the value in "list" to a single value', () => {
    A.equal(reduce(util.concat, 'a', array), 'abcd');
    A.equal(reduce(util.concat, 'a', []), 'a');
  });

  it('deals with array-like objects', () => {
    A.equal(reduce(util.concat, 'a', util.arrayLike('b', 'c', 'd')), 'abcd');
  });

  it('"fn" receives the current index as its third argument', () => {
    let k = 0;
    reduce((_, __, i) => A.equal(i, k++), '', array);
  });

  it('allows partial application', () => {
    A.equal(reduce(util.concat)('a')('b'), 'ab');
    A.equal(reduce(util.concat)('a', 'b'), 'ab');
    A.equal(reduce(util.concat, 'a')('b'), 'ab');
  });
});
