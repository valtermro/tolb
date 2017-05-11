/* eslint-env mocha */
import A from 'assert';
import contains from './contains';
import util from '../../lib/stubs';

describe('list.contains(value, subject)', () => {
  const str = 'foo bar';
  const array = ['foo', 'bar', 'b'];
  const arrayLike = util.arrayLike('foo', 'bar', 'b');

  function test(subject) {
    A.equal(contains('foo', subject), true);
    A.equal(contains('bar', subject), true);
    A.equal(contains('b', subject), true);
    A.equal(contains('baz', subject), false);
  }

  it('deals with strings', () => {
    test(str);
  });

  it('deals with arrays', () => {
    test(array);
  });

  it('deals with array like objects', () => {
    test(arrayLike);
  });

  it('tests equality deeply', () => {
    A.equal(contains([1], [[1]]), true);
    A.equal(contains({ a: 1 }, [{ a: 1 }]), true);
    A.equal(contains({ a: 1 }, [{ a: 2 }]), false);
  });

  it('allows partial application', () => {
    A.equal(contains('foo')(array), true);
  });
});
