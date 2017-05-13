/* eslint-env mocha */
import A from 'assert';
import rpartial from './rpartial';
import stub from '../../lib/stub';
import config from '../../config/constants';

describe('function.rpartial(fn, rightArgs)', () => {
  const fn = stub.foo4;

  it('uses "rightArgs" as the right part of the arguments that get applied', () => {
    let part;

    part = rpartial(fn, [1, 2, 3, 4]);
    A.deepEqual(part(), [1, 2, 3, 4]);

    part = rpartial(fn, [1, 2]);
    A.deepEqual(part(3, 4), [3, 4, 1, 2]);

    // ignore extra arguments
    A.deepEqual(part(3, 4, 5), [3, 4, 1, 2]);
  });

  it('reports the arity of the returned function', () => {
    const _ = null;

    A.equal(rpartial(fn, [_]).length, 3);
    A.equal(rpartial(fn, [_, _]).length, 2);
    A.equal(rpartial(fn, [_, _, _]).length, 1);
    A.equal(rpartial(fn, [_, _, _, _]).length, 0);
    A.equal(rpartial(fn, [_, _, _, _, _]).length, 0);
  });

  it('throws if "rightArgs" is not an array', () => {
    A.throws(() => rpartial(fn, 'foo'), config.EXPECTED_ARRAY_ERRMSG);
  });
});
