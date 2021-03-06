/* eslint-env mocha */
import A from 'assert';
import last from './last';
import util from '../../lib/util';

describe('list.last(list)', () => {
  it('deals with strings', () => {
    A.equal(last('abcd'), 'd');
    A.equal(last('a'), 'a');
    A.equal(last(''), undefined);
  });

  it('deals with arrays', () => {
    A.equal(last([1, 2, 3, 4]), 4);
    A.equal(last([1]), 1);
    A.equal(last([]), undefined);
  });

  it('deals with array-like objects', () => {
    A.equal(last(util.arrayLike(1, 2, 3, 4)), 4);
  });
});
