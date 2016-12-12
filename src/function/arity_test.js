/* eslint-env mocha */
import A from 'assert';
import arity from './arity';
import util from '../../_dev/util';
import config from '../../_dev/constants.config';

describe('arity(n, fn)', () => {
  const fn = function () { return Array.prototype.slice.call(arguments); };
  const MAX = config.MAX_ARITY;

  it('wraps "fn" in a function that reports an arity of "n"', () => {
    for (let i = 0; i < MAX; i++)
      A.equal(arity(i, fn).length, i);
  });

  it('"fn" receives only "n" arguments', () => {
    const args = util.makeArray(100);

    for (let i = 0; i < MAX; i++) {
      const wanted = util.makeArray(i);
      A.deepEqual(arity(i, fn).apply(undefined, args), wanted);
    }
  });

  it('throws if "n" is too high', () => {
    A.throws(() => arity(MAX + 1, fn), new RegExp(`allowed.*${MAX}`));
  });

  it('allows partial application', () => {
    A.deepEqual(arity(2)(fn)(1, 2, 3), [1, 2]);
  });
});
