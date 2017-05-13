/* eslint-env mocha */
import A from 'assert';
import zipObject from './zipObject';
import util from '../../lib/util';

describe('list.zipObject(keys, list)', () => {
  it('creates an object by pairing up "keys" with the values in "list"', () => {
    const keys = ['a', 'b', 'c'];
    const valueLists = [
      ['d', 'e', 'f'],
      util.arrayLike('d', 'e', 'f'),
      'def',
    ];

    valueLists.forEach((list) => {
      A.deepEqual(zipObject(keys, list), { a: 'd', b: 'e', c: 'f' });
    });
  });

  it('ignores extra values in both sides', () => {
    // extra keys
    A.deepEqual(zipObject(['a', 'b'], ['c']), { a: 'c' });

    // extra values
    A.deepEqual(zipObject(['a'], ['c', 'd']), { a: 'c' });
  });

  it('allows partial application', () => {
    A.deepEqual(zipObject(['a'])([1]), { a: 1 });
  });
});
