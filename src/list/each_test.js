/* eslint-env mocha */
import A from 'assert';
import each from './each';
import util from '../../lib/util';

describe('list.each(fn, list)', () => {
  const validLists = [
    ['a', 'b', 'c', 'd'],
    util.arrayLike('a', 'b', 'c', 'd'),
    'abcd',
  ];

  it('applies "fn" to each item in "list"', () => {
    validLists.forEach((list) => {
      const result = [];
      each(v => result.push(v), list);
      A.deepEqual(result, ['a', 'b', 'c', 'd']);
    });
  });

  it('returns "list"', () => {
    validLists.forEach((list) => {
      A.deepStrictEqual(each(util.id, list), list);
    });
  });

  it('"fn" receives the current index as its second argument', () => {
    validLists.forEach((list) => {
      let k = 0;
      each((_, i) => A.equal(i, k++), list);
    });
  });

  it('allows partial application', () => {
    validLists.forEach((list) => {
      const result = [];
      each(v => result.push(v))(list);
      A.deepEqual(result, ['a', 'b', 'c', 'd']);
    });
  });
});
