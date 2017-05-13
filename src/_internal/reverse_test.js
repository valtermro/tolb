/* eslint-env mocha */
import A from 'assert';
import reverse from './reverse';
import util from '../../lib/util';

describe('_internal.reverse(array)', () => {
  it('reverses "array"', () => {
    const input = [1, 2, 3, 4];

    A.deepEqual(reverse(input), [4, 3, 2, 1]);

    // the original array should not be mutated
    A.deepEqual(input, [1, 2, 3, 4]);
  });

  it('deals with array-like objects', () => {
    const input = util.arrayLike(1, 2, 3, 4);

    A.deepEqual(reverse(input), [4, 3, 2, 1]);
    A.deepEqual(input, util.arrayLike(1, 2, 3, 4));
  });
});
