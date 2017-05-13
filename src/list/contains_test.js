/* eslint-env mocha */
import A from 'assert';
import contains from './contains';
import util from '../../lib/util';

describe('list.contains(value, subject)', () => {
  it('deals with strings', () => {
    A.equal(contains('fo', 'foo'), true);
    A.equal(contains('r', 'bar'), true);
    A.equal(contains('foo', 'foo bar'), true);
    A.equal(contains('bar', 'foo bar baz'), true);
    A.equal(contains('bar', 'foo'), false);
    A.equal(contains('z', 'foo'), false);
  });

  it('deals with arrays', () => {
    A.equal(contains(1, [1, 2]), true);
    A.equal(contains(1, [2]), false);
  });

  it('deals with array like objects', () => {
    A.equal(contains(1, util.arrayLike(1, 2)), true);
    A.equal(contains(1, util.arrayLike(2)), false);
  });

  it('tests equality deeply', () => {
    A.equal(contains([1], [[1]]), true);
    A.equal(contains({ a: 1 }, [{ a: 1 }]), true);
    A.equal(contains({ a: 1 }, [{ a: 2 }]), false);
  });

  it('allows partial application', () => {
    A.equal(contains('foo')(['foo']), true);
  });
});
