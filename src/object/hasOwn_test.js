/* eslint-env mocha */
import A from 'assert';
import hasOwn from './hasOwn';

describe('hasOwn(key, subject)', () => {
  function Foo() { this.foo = 1; }
  Foo.prototype.bar = 2;
  // one can override native methods, which can cause problems.
  Foo.prototype.hasOwnProperty = () => true;

  const literal = { bar: true };
  const prototyped = new Foo();
  prototyped.baz = 3;

  it('checks if "subject" has "key" by its own', () => {
    A.equal(hasOwn('bar', literal), true);
    A.equal(hasOwn('baz', prototyped), true);
    A.equal(hasOwn('foo', prototyped), true);
    A.equal(hasOwn('foo', literal), false);
    A.equal(hasOwn('bar', prototyped), false);
  });

  it('allows partial application', () => {
    A.equal(hasOwn('bar')(literal), true);
  });
});
