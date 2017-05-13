/* eslint-env mocha */
import A from 'assert';
import has from './has';

describe('object.has(key, subject)', () => {
  function Foo() { this.foo = 1; }
  Foo.prototype.bar = 2;
  // one can override native methods, which can cause problems.
  Foo.prototype.hasOwnProperty = () => true;

  const literal = { bar: true };
  const prototyped = new Foo();
  prototyped.baz = 3;

  it('checks if "subject" has "key" by its own', () => {
    A.equal(has('bar', literal), true);
    A.equal(has('baz', prototyped), true);
    A.equal(has('foo', prototyped), true);
    A.equal(has('foo', literal), false);
    A.equal(has('bar', prototyped), false);
  });

  it('allows partial application', () => {
    A.equal(has('bar')(literal), true);
  });
});
