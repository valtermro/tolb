/* eslint-env mocha */
import A from 'assert';
import hasIn from './hasIn';

describe('hasIn(key, subject)', () => {
  function Foo() { this.foo = 1; }
  Foo.prototype.bar = 2;

  const literal = { bar: true };
  const prototyped = new Foo();
  prototyped.baz = 3;

  it('checks if "subject" has "key" by its own or in it\'s prototype chain', () => {
    A.equal(hasIn('bar', literal), true);
    A.equal(hasIn('baz', prototyped), true);
    A.equal(hasIn('foo', prototyped), true);
    A.equal(hasIn('foo', literal), false);
    A.equal(hasIn('bar', prototyped), true);
    A.equal(hasIn('bleh', prototyped), false);
  });

  it('allows partial application', () => {
    A.equal(hasIn('bar')(literal), true);
  });
});
