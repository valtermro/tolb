/* eslint-env mocha */
import A from 'assert';
import arity from './arity';
import config from '../../_dev/constants.config';
import util from '../../_dev/util';

describe('_internal.arity(n, fn)', () => {
  function fn() { return Array.prototype.slice.call(arguments); }
  const MAX = config.MAX_ARITY;

  it('wraps "fn" in a function that reports an arity of "n"', () => {
    for (let i = 0; i <= MAX; i++)
      A.equal(arity(i, fn).length, i);
  });

  it('applies "fn" to all arguments that the wrapper function receives', () => {
    const args = util.makeArray(100);

    for (let i = 0; i < MAX; i++)
      A.deepEqual(arity(i, fn).apply(undefined, args), args);
  });

  it('throws if "n" is too high', () => {
    A.throws(() => arity(MAX + 1, fn), new RegExp(`allowed.*${MAX}`));
  });
});
