/* eslint-env mocha */
import A from 'assert';
import hasOwn from './hasOwn';
import util from '../../_dev/util';

describe('assert.hasOwn(prop, subject)', () => {
  function Foo() { /**/ }
  Foo.prototype.bar = true;

  const obj = { bar: true };
  const array = [1, 2];
  const str = 'ab';
  const arrayLike = util.arrayLike(1, 2);

  it('checks if "subject" has "key" by its own', () => {
    A.equal(hasOwn('bar', obj), true);
    A.equal(hasOwn('foo', obj), false);
    A.equal(hasOwn('bar', new Foo()), false);
  });

  it('deals with lists', () => {
    const assert = (list) => {
      A.equal(hasOwn(-1, list), false);
      A.equal(hasOwn(0, list), true);
      A.equal(hasOwn(1, list), true);
      A.equal(hasOwn(2, list), false);
    };
    assert(arrayLike);
    assert(array);
    assert(str);
  });

  it('allows partial application', () => {
    A.equal(hasOwn('bar')(obj), true);
    A.equal(hasOwn(1)(array), true);
  });
});
