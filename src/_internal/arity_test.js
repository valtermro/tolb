/* eslint-env mocha */
import A from 'assert';
import arity from './arity';
import config from '../../config/constants';
import util from '../../lib/util';

describe('_internal.arity(n, fn)', () => {
  const MAX = config.MAX_ARITY;
  const fn = function () { return Array.prototype.slice.call(arguments); };

  it('wraps "fn" in a function that reports an arity of "n"', () => {
    // A.equal(arity(0, fn).length, 0);
    // A.equal(arity(1, fn).length, 1);
    // ...
    // A.equal(arity(MAX, fn).length, MAX);
    for (let newArity = 0; newArity <= MAX; newArity++)
      A.equal(arity(newArity, fn).length, newArity);
  });

  it('applies "fn" to all arguments that the wrapper function receives', () => {
    const args = util.makeArray(20);

    for (let newArity = 0; newArity <= MAX; newArity++) {
      // given a function with arity N
      const f = arity(newArity, fn);

      // applied to 20 arguments
      const result = f.apply(undefined, args);

      // all arguments should be used
      A.deepEqual(result, args);
    }
  });

  it('throws if "n" is too high', () => {
    A.throws(() => arity(MAX + 1, fn), new RegExp(`allowed.*${MAX}`));
  });
});
