/* eslint-env mocha */
import A from 'assert';
import words from './words';

describe('string._internal.words(str)', () => {
  it('returns a list of the words in "str"', () => {
    const assert = (str, wanted) => A.deepEqual(words(str), wanted);
    assert('foo bar', ['foo', 'bar']);
    assert('foo_bar', ['foo', 'bar']);
    assert('foo-bar', ['foo', 'bar']);
    assert('fooBar', ['foo', 'Bar']);
    assert('foo0bar', ['foo', '0', 'bar']);
    assert('foo01bar10', ['foo', '01', 'bar', '10']);
    assert('ABFoo', ['A', 'B', 'Foo']);
  });
});
