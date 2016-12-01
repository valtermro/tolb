/* eslint-env mocha */
import A from 'assert';
import hasOwn from './hasOwn';

describe('object.hasOwn(prop, obj)', () => {
  function Foo() { /**/ }
  Foo.prototype.bar = true;

  const obj = { bar: true };

  it('checks if "obj" has "key" by its own', () => {
    A.equal(hasOwn('bar', obj), true);
    A.equal(hasOwn('foo', obj), false);
    A.equal(hasOwn('bar', new Foo()), false);
  });

  it('allows partial application', () => {
    A.equal(hasOwn('bar')(obj), true);
  });
});
