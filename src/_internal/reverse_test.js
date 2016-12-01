/* eslint-env mocha */
import A from 'assert';
import reverse from './reverse';
import util from '../../_dev/util';

describe('_internal.reverse(list)', () => {
  const array = util.makeArray(100);
  const arrayLike = util.arrayLike(1, 2, 3, 4, 5);

  it('reverses the order of "list"', () => {
    A.deepEqual(reverse(array), array.slice(0).reverse());
    A.deepEqual(array, util.makeArray(100));
  });

  it('deals with array-like objects', () => {
    A.deepEqual(reverse(arrayLike), [5, 4, 3, 2, 1]);
  });
});
