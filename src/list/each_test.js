/* eslint-env mocha */
import A from 'assert';
import each from './each';
import util from '../../_dev/util';

describe('each(fn, list)', () => {
  const array = ['a', 'b', 'c', 'd'];
  const arrayLike = util.arrayLike('a', 'b', 'c', 'd');
  const str = 'abcd';
  const obj = { a: 'a', b: 'b', c: 'c', d: 'd' };

  function test(list) {
    const result = [];
    each(v => result.push(v), list);
    A.deepEqual(result, ['a', 'b', 'c', 'd']);
  }

  it('deals with arrays', () => {
    test(array);
  });

  it('deals with array-like objects', () => {
    test(arrayLike);
  });

  it('deals with strings', () => {
    test(str);
  });

  it('deals with objects', () => {
    test(obj);
  });

  it('returns "list"', () => {
    const fn = () => null;
    const assert = list => A.deepStrictEqual(each(fn, list), list);
    assert(array);
    assert(arrayLike);
    assert(str);
    assert(obj);
  });

  it('"fn" receives the current index as its second argument', () => {
    const assert = (list) => {
      const keys = Object.keys(list);
      let k = 0;
      each((_, i) => A.equal(i, keys[k++]), list);
    };
    assert(array);
    assert(arrayLike);
    assert(str);
    assert(obj);
  });

  it('allows partial application', () => {
    const assert = (list) => {
      const result = [];
      each(v => result.push(v))(list);
      A.deepEqual(result, ['a', 'b', 'c', 'd']);
    };
    assert(array);
    assert(arrayLike);
    assert(str);
    assert(obj);
  });
});
