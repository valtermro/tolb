/* eslint-env mocha */
import A from 'assert';
import flatten from './flatten';
import util from '../../lib/util';

describe('list.flatten(list)', () => {
  it('flattens "list" one level', () => {
    A.deepEqual(flatten([[1, 2, 3], [4, [5]]]), [1, 2, 3, 4, [5]]);
    A.deepEqual(flatten([[1, 2], [3, [4]]]), [1, 2, 3, [4]]);
  });

  it('preserves non-list values', () => {
    A.deepEqual(flatten([[1, 2], 3, [4], 5]), [1, 2, 3, 4, 5]);
    A.deepEqual(flatten([[1], { a: 1, b: [2] }]), [1, { a: 1, b: [2] }]);

    // `flatten` doesn't take strings as lists
    const stro = new String('foo');
    A.deepEqual(flatten(['foo', [5]]), ['foo', 5]);
    A.deepEqual(flatten([stro, [5]]), [stro, 5]);
  });

  it('deals with array-like objects', () => {
    const a = util.arrayLike(1, 2);
    const b = util.arrayLike(3, 4);
    A.deepEqual(flatten([a, b]), [1, 2, 3, 4]);
    A.deepEqual(flatten(util.arrayLike(a, b, 5)), [1, 2, 3, 4, 5]);
  });

  it('does not mutate "list"', () => {
    const arr = [1, 2];
    const obj = { a: 1 };

    const list = [arr, [3], obj];
    flatten(list);
    A.deepEqual(arr, [1, 2]);
    A.deepEqual(obj, { a: 1 });
    A.deepEqual(list, [[1, 2], [3], { a: 1 }]);
  });
});
