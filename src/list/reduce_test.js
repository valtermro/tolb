/* eslint-env mocha */
import A from 'assert';
import reduce from './reduce';
import util from '../../lib/util';

describe('list.reduce(fn, accum, list)', () => {
  const concat = (a, b) => a.concat(b);

  const validLists = [
    ['b', 'c', 'd'],
    util.arrayLike('b', 'c', 'd'),
  ];

  it('uses "fn" to reduce "accum" and the values in "list" to a single value', () => {
    validLists.forEach((list) => {
      A.equal(reduce(concat, 'a', list), 'abcd');
    });
  });

  it('"fn" receives the current index as its third argument', () => {
    validLists.forEach((list) => {
      let k = 0;
      reduce((_, __, i) => A.equal(i, k++), '', list);
    });
  });

  it('allows partial application', () => {
    A.equal(reduce(concat)('a')('b'), 'ab');
    A.equal(reduce(concat)('a', 'b'), 'ab');
    A.equal(reduce(concat, 'a')('b'), 'ab');
  });
});
