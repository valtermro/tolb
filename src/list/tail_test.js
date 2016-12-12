/* eslint-env mocha */
import A from 'assert';
import tail from './tail';
import util from '../../_dev/util';

describe('tail(list)', () => {
  it('deals with strings', () => {
    A.equal(tail('abc'), 'bc');
    A.equal(tail('a'), '');
    A.equal(tail(''), '');
  });

  it('deals with arrays', () => {
    const array = [1, 2, 3];
    A.deepEqual(tail(array), [2, 3]);
    A.deepEqual(tail([1]), []);
    A.deepEqual(tail([]), []);
    A.deepEqual(array, [1, 2, 3]);
  });

  it('deals with array-like objects', () => {
    A.deepEqual(tail(util.arrayLike(1, 2, 3)), [2, 3]);
    A.deepEqual(tail(util.arrayLike(1)), []);
    A.deepEqual(tail(util.arrayLike()), []);
  });
});
