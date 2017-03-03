/* eslint-env mocha */
import A from 'assert';
import compose from './compose';
import util from '../../build/util';

describe('compose(...fns)', () => {
  const divBy5 = x => x / 5;
  const div10 = x => 10 / x;

  it('composes "fns" from right to left', () => {
    const comp = compose(div10, divBy5, util.sum);
    A.equal(comp(20, 30), 1);
  });

  it('reports the arity of the rightmost function', () => {
    const assert = (f, a) => A.equal(f.length, a);
    assert(compose(div10), 1);
    assert(compose(div10, divBy5), 1);
    assert(compose(div10, util.sum), 2);
  });
});
