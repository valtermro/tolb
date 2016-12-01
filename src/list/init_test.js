/* eslint-env mocha */
import A from 'assert';
import init from './init';
import util from '../../_dev/util';

describe('list.init(list)', () => {
  it('deals with strings', () => {
    A.equal(init('abc'), 'ab');
    A.equal(init('a'), '');
    A.equal(init(''), '');
  });

  it('deals with arrays', () => {
    const array = [1, 2, 3];
    A.deepEqual(init(array), [1, 2]);
    A.deepEqual(init([1]), []);
    A.deepEqual(init([]), []);
    A.deepEqual(array, [1, 2, 3]);
  });

  it('deals with array-like objects', () => {
    A.deepEqual(init(util.arrayLike(1, 2, 3)), [1, 2]);
    A.deepEqual(init(util.arrayLike(1)), []);
    A.deepEqual(init(util.arrayLike()), []);
  });
});
