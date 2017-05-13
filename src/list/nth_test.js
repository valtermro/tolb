/* eslint-env mocha */
import A from 'assert';
import nth from './nth';
import util from '../../lib/util';

describe('list.nth(n, list)', () => {
  const validLists = [
    ['a', 'b', 'c', 'd'],
    util.arrayLike('a', 'b', 'c', 'd'),
    'abcd',
  ];

  it('returns the "n"\'th element in "list"', () => {
    validLists.forEach((list) => {
      // go from -1 to list.length + 1 to test indexes out of boundaries
      for (let i = -1; i < list.length + 1; i++)
        A.equal(nth(i, list), list[i]);
    });
  });

  it('allows partial application', () => {
    validLists.forEach((list) => {
      A.equal(nth(1)(list), 'b');
    });
  });
});
