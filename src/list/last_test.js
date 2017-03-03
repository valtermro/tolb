/* eslint-env mocha */
import A from 'assert';
import last from './last';
import util from '../../build/util';

describe('last(list)', () => {
  it('deals with strings', () => {
    A.equal(last('abcd'), 'd');
    A.equal(last(''), undefined);
  });

  it('deals with arrays', () => {
    A.equal(last([1, 2, 3, 4]), 4);
    A.equal(last([]), undefined);
  });

  it('deals with array-like objects', () => {
    A.equal(last(util.arrayLike(1, 2, 3, 4)), 4);
    A.equal(last(util.arrayLike()), undefined);
  });
});
