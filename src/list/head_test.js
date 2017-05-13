/* eslint-env mocha */
import A from 'assert';
import head from './head';
import util from '../../lib/util';

describe('list.head(list)', () => {
  it('deals with strings', () => {
    A.equal(head('abcd'), 'a');
    A.equal(head(''), undefined);
  });

  it('deals with arrays', () => {
    A.equal(head([1, 2, 3, 4]), 1);
    A.equal(head([]), undefined);
  });

  it('deals with array-like objects', () => {
    A.equal(head(util.arrayLike(1, 2, 3, 4)), 1);
    A.equal(head(util.arrayLike()), undefined);
  });
});
