/* eslint-env mocha */
import A from 'assert';
import plainObject from './plainObject';

describe('is.plainObject(subject)', () => {
  function Foo() { /* */ }

  it('checks if "subject" is a object literal', () => {
    A.equal(plainObject({}), true);
    A.equal(plainObject({ foo: 1 }), true);
    A.equal(plainObject(Object.create(null)), true);
    A.equal(plainObject('foo'), false);
    A.equal(plainObject([]), false);
    A.equal(plainObject(0), false);
    A.equal(plainObject(new String('')), false);
    A.equal(plainObject(new Foo()), false);
    A.equal(plainObject(Object.create({})), false);
    A.equal(plainObject((function () { return arguments; })()), false);
  });
});
