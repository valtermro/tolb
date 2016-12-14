/* eslint-env mocha */
import A from 'assert';
import map from './map';
import util from '../../_dev/util';

describe('map(fn, list)', () => {
  const array = ['f', 'o', 'o'];
  const arrayLike = util.arrayLike('f', 'o', 'o');
  const str = 'foo';
  const obj = { a: 'a', b: 'b' };

  it('deals with strings', () => {
    A.equal(map(util.toUpper, str), 'FOO');
  });

  it('deals with arrays', () => {
    A.deepEqual(map(util.toUpper, array), ['F', 'O', 'O']);
    A.deepEqual(array, ['f', 'o', 'o']);
  });

  it('deals with array-like objects', () => {
    A.deepEqual(map(util.toUpper, arrayLike), ['F', 'O', 'O']);
    A.deepEqual(arrayLike, util.arrayLike('f', 'o', 'o'));
  });

  it('deals with objects', () => {
    A.deepEqual(map(util.toUpper, obj), { a: 'A', b: 'B' });
    A.deepEqual(obj, { a: 'a', b: 'b' });
  });

  it('"fn" receives the current index as its second argument', () => {
    const assert = (list) => {
      let k = 0;
      const keys = Object.keys(list);
      map((_, i) => A.equal(i, keys[k++]), list);
    };
    assert(str);
    assert(array);
    assert(arrayLike);
    assert(obj);
  });

  it('allows partial application', () => {
    A.deepEqual(map(util.id)(str), str);
    A.deepEqual(map(util.id)(array), array);
    A.deepEqual(map(util.id)(arrayLike), array);
  });
});
