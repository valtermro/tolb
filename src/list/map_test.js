/* eslint-env mocha */
import A from 'assert';
import map from './map';
import util from '../../lib/util';

describe('list.map(fn, list)', () => {
  const toUpper = s => s.toUpperCase();

  const validLists = [
    ['f', 'o', 'o'],
    util.arrayLike('f', 'o', 'o'),
    'foo',
  ];

  it('transforms "list" by applying "fn" to each of its values', () => {
    validLists.forEach((list) => {
      if (typeof list === 'string')
        // string in, string out
        A.equal(map(toUpper, list), 'FOO');
      else
        // any other data type yield an array
        A.deepEqual(map(toUpper, list), ['F', 'O', 'O']);
    });
  });

  it('does not mutate "list"', () => {
    const list = ['a', 'b'];

    map(toUpper, list);
    A.deepEqual(list, ['a', 'b']);
  });

  it('"fn" receives the current index as its second argument', () => {
    validLists.forEach((list) => {
      let k = 0;
      map((_, i) => A.equal(i, k++), list);
    });
  });

  it('allows partial application', () => {
    A.deepEqual(map(util.id)([1, 2]), [1, 2]);
  });
});
