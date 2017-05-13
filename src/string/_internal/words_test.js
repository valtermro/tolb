/* eslint-env mocha */
import A from 'assert';
import words from './words';

describe('string._internal.words(str)', () => {
  it('returns a list of the words in "str"', () => {
    A.deepEqual(words('foo bar'), ['foo', 'bar']);
    A.deepEqual(words('foo_bar'), ['foo', 'bar']);
    A.deepEqual(words('foo-bar'), ['foo', 'bar']);
    A.deepEqual(words('fooBar'), ['foo', 'Bar']);
    A.deepEqual(words('foo0bar'), ['foo', '0', 'bar']);
    A.deepEqual(words('foo01bar10'), ['foo', '01', 'bar', '10']);
    A.deepEqual(words('ABFoo'), ['A', 'B', 'Foo']);
  });
});
