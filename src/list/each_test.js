/* eslint-env mocha */
import A from 'assert';
import each from './each';
import util from '../../_dev/util';

describe('each(fn, list)', () => {
  const array = ['a', 'b', 'c', 'd'];
  const arrayLike = util.arrayLike('a', 'b', 'c', 'd');
  const str = 'abcd';

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

  it('returns "list"', () => {
    const fn = () => null;
    const assert = list => A.deepStrictEqual(each(fn, list), list);
    assert(array);
    assert(arrayLike);
    assert(str);
  });

  it('"fn" receives the current index as its second argument', () => {
    const assert = (list) => {
      let k = 0;
      each((_, i) => A.equal(i, k++), list);
    };
    assert(array);
    assert(arrayLike);
    assert(str);
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
  });
});
