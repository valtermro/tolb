/* eslint-env mocha */
import A from 'assert';
import rpartial from './rpartial';
import util from '../../_dev/util';

describe('function.rpartial(fn, rightArgs)', () => {
  const fn = util.foo4;

  it('uses "rightArgs" as the right part of the arguments that get applied', () => {
    A.deepEqual(rpartial(fn, [1, 2, 3, 4])(), [1, 2, 3, 4]);
    A.deepEqual(rpartial(fn, [1, 2])(3, 4), [3, 4, 1, 2]);

    A.deepEqual(rpartial(fn, [1, 2, 3, 4, 5])(), [1, 2, 3, 4]);
    A.deepEqual(rpartial(fn, [1, 2])(3, 4, 5), [3, 4, 1, 2]);
  });

  it('reports the arity of the returned function', () => {
    const assert = (args, len) => A.equal(rpartial(fn, args).length, len);
    assert([''], 3);
    assert(['', ''], 2);
    assert(['', '', ''], 1);
    assert(['', '', '', ''], 0);
    assert(['', '', '', '', ''], 0);
  });
});
