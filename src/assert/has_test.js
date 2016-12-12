/* eslint-env mocha */
import A from 'assert';
import has from './has';
import util from '../../_dev/util';

describe('assert.has(key, subject)', () => {
  function Foo() { /**/ }
  Foo.prototype.bar = true;

  const obj = { bar: true };
  const array = [1, 2];
  const str = 'ab';
  const arrayLike = util.arrayLike(1, 2);

  it('checks if "subject" has "key" by its own or in its prototype chain', () => {
    A.equal(has('bar', obj), true);
    A.equal(has('foo', obj), false);
    A.equal(has('bar', new Foo()), true);
    A.equal(has('foo', new Foo()), false);
  });

  it('deals with lists', () => {
    const assert = (list) => {
      A.equal(has(-1, list), false);
      A.equal(has(0, list), true);
      A.equal(has(1, list), true);
      A.equal(has(2, list), false);
    };
    assert(arrayLike);
    assert(array);
    assert(str);
  });

  it('allows partial application', () => {
    A.equal(has('bar')(obj), true);
    A.equal(has(1)(array), true);
  });
});
