/* eslint-env mocha */
import A from 'assert';
import zipObject from './zipObject';
import util from '../../lib/stubs';

describe('list.zipObject(keys, list)', () => {
  it('creates an object by pairing up "keys" with the values in "list"', () => {
    const keys = ['foo', 'bar', 'baz'];
    const wanted = { foo: 'a', bar: 'b', baz: 'c' };
    const assert = list => A.deepEqual(zipObject(keys, list), wanted);

    assert(['a', 'b', 'c']);
    assert(util.arrayLike('a', 'b', 'c'));
    assert('abc');
  });

  it('ignores extra values in both sides', () => {
    const assert = (keys, wanted) => {
      A.deepEqual(zipObject(keys, ['a', 'b', 'c']), wanted);
    };
    assert(['foo', 'bar'], { foo: 'a', bar: 'b' });
    assert(['foo', 'bar', 'baz', 'bleh'], { foo: 'a', bar: 'b', baz: 'c' });
  });

  it('allows partial application', () => {
    A.deepEqual(zipObject(['foo'])([1]), { foo: 1 });
  });
});
