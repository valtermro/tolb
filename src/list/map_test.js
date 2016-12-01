/* eslint-env mocha */
import A from 'assert';
import map from './map';
import util from '../../_dev/util';

describe('list.map(fn, list)', () => {
  const array = ['f', 'o', 'o'];
  const arrayLike = util.arrayLike('f', 'o', 'o');
  const str = 'foo';

  it('deals with strings', () => {
    A.equal(map(util.toUpper, str), 'FOO');
  });

  it('deals with arrays', () => {
    A.deepEqual(map(util.toUpper, array), ['F', 'O', 'O']);
    A.deepEqual(array, ['f', 'o', 'o']);
  });

  it('deals with array-like objects', () => {
    A.deepEqual(map(util.toUpper, arrayLike), ['F', 'O', 'O']);
  });

  it('"fn" receives the current index as its second argument', () => {
    const assert = (list) => {
      let k = 0;
      map((_, i) => A.equal(i, k++), list);
    };
    assert(str);
    assert(array);
    assert(arrayLike);
  });

  it('allows partial application', () => {
    A.deepEqual(map(util.id)(str), str);
    A.deepEqual(map(util.id)(array), array);
    A.deepEqual(map(util.id)(arrayLike), array);
  });
});
