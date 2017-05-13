/* eslint-env mocha */
import A from 'assert';
import partial from './partial';
import stub from '../../lib/stub';
import config from '../../config/constants';

describe('function.partial(fn, leftArgs)', () => {
  const fn = stub.foo4;

  it('uses "leftArgs" as the left part of the arguments to "fn"', () => {
    let part;

    part = partial(fn, [1, 2, 3, 4]);
    A.deepEqual(part(), [1, 2, 3, 4]);

    part = partial(fn, []);
    A.deepEqual(part(1, 2, 3, 4), [1, 2, 3, 4]);

    part = partial(fn, [1, 2]);
    A.deepEqual(part(3, 4), [1, 2, 3, 4]);

    // ignore extra arguments
    A.deepEqual(part(3, 4, 5), [1, 2, 3, 4]);
  });

  it('uses itself as a placeholder for arguments', () => {
    let part;

    part = partial(fn, [1, partial, 2]);
    A.deepEqual(part(3, 4), [1, 3, 2, 4]);

    // trailing placeholders are ignored
    part = partial(fn, [1, partial, 2, partial]);
    A.deepEqual(part(3, 4), [1, 3, 2, 4]);
  });

  it('reports the arity of the returned function', () => {
    const _ = null;

    A.equal(partial(fn, []).length, 4);
    A.equal(partial(fn, [_]).length, 3);
    A.equal(partial(fn, [_, _]).length, 2);
    A.equal(partial(fn, [_, _, _]).length, 1);
    A.equal(partial(fn, [_, _, _, _, _]).length, 0);
    A.equal(partial(fn, [_, _, _, _]).length, 0);
    A.equal(partial(fn, [_, partial, _]).length, 2);
    A.equal(partial(fn, [_, partial, _, partial]).length, 2);
    A.equal(partial(fn, [_, partial, _, partial, _, _, _, _]).length, 0);
  });

  it('throws if "leftArgs" is not an array', () => {
    A.throws(() => partial(fn, 'foo'), config.EXPECTED_ARRAY_ERRMSG);
  });
});
