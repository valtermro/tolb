/* eslint-env mocha */
import A from 'assert';
import empty from './empty';
import util from '../../_dev/util';

describe('empty(subject)', () => {
  function Foo() { /**/ }

  it('checks if "subject" is empty', () => {
    const assert = (value, wanted) => A.equal(empty(value), wanted);
    assert('', true);
    assert('f', false);
    assert({}, true);
    assert({ a: 1 }, false);
    assert([], true);
    assert([1], false);
    assert(util.arrayLike(), true);
    assert(Foo, false);
    assert(util.arrayLike(1), false);
    assert(new Foo(), false);
    assert(0, false);
    assert(true, false);
    assert(false, false);
    assert(null, false);
    assert(undefined, false);
    assert([null], false);
    assert([undefined], false);
  });
});
