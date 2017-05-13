/* eslint-env mocha */
import A from 'assert';
import isPlainObject from './isPlainObject';

describe('object.isPlainObject(subject)', () => {
  function Foo() { /**/ }

  it('checks if "subject" is a object literal', () => {
    A.equal(isPlainObject({}), true);
    A.equal(isPlainObject({ foo: 1 }), true);
    A.equal(isPlainObject(Object.create(null)), true);
    A.equal(isPlainObject('foo'), false);
    A.equal(isPlainObject([]), false);
    A.equal(isPlainObject(0), false);
    A.equal(isPlainObject(new String('')), false);
    A.equal(isPlainObject(new Foo()), false);
    A.equal(isPlainObject(Object.create({})), false);
    A.equal(isPlainObject((function () { return arguments; })()), false);
  });
});
