/* eslint-env mocha */
import A from 'assert';
import prepend from './prepend';
import util from '../../lib/util';

describe('list.prepend(value, list)', () => {
  it('deals with strings', () => {
    A.equal(prepend('a', 'bc'), 'abc');
  });

  it('deals with arrays', () => {
    const input = [2, 3, 4];

    A.deepEqual(prepend(1, input), [1, 2, 3, 4]);
    A.deepEqual(prepend([1], input), [[1], 2, 3, 4]);
  });

  it('deals with array-like objects', () => {
    const input = util.arrayLike(2, 3, 4);

    A.deepEqual(prepend(1, input), [1, 2, 3, 4]);
    A.deepEqual(prepend([1], input), [[1], 2, 3, 4]);
  });

  it('allows partial application', () => {
    A.equal(prepend('a')('bc'), 'abc');
    A.deepEqual(prepend(1)([2, 3]), [1, 2, 3]);
  });
});
