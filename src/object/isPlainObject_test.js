/* eslint-env mocha */
import A from 'assert';
import isPlainObject from './isPlainObject';

describe('isPlainObject(subject)', () => {
  function Foo() { /**/ }

  it('checks if "subject" is a object literal', () => {
    const assert = (sub, wanted) => A.equal(isPlainObject(sub), wanted);
    assert({}, true);
    assert({ foo: 1 }, true);
    assert(Object.create(null), true);
    assert('foo', false);
    assert([], false);
    assert(0, false);
    assert(new String(''), false);
    assert(new Foo(), false);
    assert(Object.create({}), false);
    assert((function () { return arguments; })(), false);
  });
});
