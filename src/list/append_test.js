/* eslint-env mocha */
import A from 'assert';
import append from './append';
import util from '../../lib/stubs';

describe('list.append(value, list)', () => {
  const array = [2, 3, 4];
  const arrayLike = util.arrayLike(2, 3, 4);

  it('deals with strings', () => {
    A.equal(append('a', 'bc'), 'bca');
  });

  it('deals with arrays', () => {
    A.deepEqual(append(1, array), [2, 3, 4, 1]);
    A.deepEqual(append([1], array), [2, 3, 4, [1]]);
  });

  it('deals with array-like objects', () => {
    A.deepEqual(append(1, arrayLike), [2, 3, 4, 1]);
  });

  it('allows partial application', () => {
    A.equal(append('a')('bc'), 'bca');
    A.deepEqual(append(1)(array), [2, 3, 4, 1]);
  });
});
