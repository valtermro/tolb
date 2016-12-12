/* eslint-env mocha */
import A from 'assert';
import pipe from './pipe';
import util from '../../_dev/util';

describe('pipe(...fns)', () => {
  const divBy5 = x => x / 5;
  const div10 = x => 10 / x;

  it('composes "fns" from left to right', () => {
    const comp = pipe(util.sum, divBy5, div10);
    A.equal(comp(20, 30), 1);
  });

  it('reports the arity of the piped function', () => {
    const assert = (f, a) => A.equal(f.length, a);
    assert(pipe(div10), 1);
    assert(pipe(divBy5, div10), 1);
    assert(pipe(util.sum, div10), 2);
  });
});
