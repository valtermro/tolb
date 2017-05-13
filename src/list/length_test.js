/* eslint-env mocha */
import A from 'assert';
import length from './length';
import util from '../../lib/util';

describe('list.length(list)', () => {
  it('returns the length of "list"', () => {
    A.equal(length('a'), 1);
    A.equal(length(''), 0);
    A.equal(length([1, 2]), 2);
    A.equal(length([]), 0);
    A.equal(length(util.arrayLike(1, 2, 3, 4)), 4);
    A.equal(length(util.arrayLike()), 0);
  });
});
