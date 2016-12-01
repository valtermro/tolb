/* eslint-env mocha */
import A from 'assert';
import reverse from './reverse';
import util from '../../_dev/util';

describe('list.reverse(list)', () => {
  it('reverses strings', () => {
    A.deepEqual(reverse('abcde'), 'edcba');
  });

  it('reverses arrays', () => {
    const array = util.makeArray(100);
    A.deepEqual(reverse(array), array.slice(0).reverse());
    A.deepEqual(array, util.makeArray(100));
  });

  it('reverses array-like objects', () => {
    A.deepEqual(reverse(util.arrayLike(1, 2, 3)), [3, 2, 1]);
  });
});
