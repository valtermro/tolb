/* eslint-env mocha */
import A from 'assert';
import object from './object';

describe('assert.object(subject)', () => {
  function Foo() { /**/ }

  it('checks if "subject" is a object literal', () => {
    const assert = (sub, wanted) => A.equal(object(sub), wanted);
    assert({}, true);
    assert({ foo: 1 }, true);
    assert(Object.create(null), true);
    assert('foo', false);
    assert([], false);
    assert(0, false);
    assert(new String(''), false); // eslint-disable-line
    assert(new Foo(), false);
    assert(Object.create({}), false);
    assert((function () { return arguments; })(), false);
  });
});
