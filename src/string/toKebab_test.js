/* eslint-env mocha */
import A from 'assert';
import toKebab from './toKebab';

describe('string.toKebab(str)', () => {
  it('converts "str" to kebab-case', () => {
    const assert = (input, wanted) => A.equal(toKebab(input), wanted);
    assert('', '');
    assert('abc', 'abc');
    assert('already_dash_case', 'already-dash-case');
    assert('foo bar', 'foo-bar');
    assert('Foo bar', 'foo-bar');
    assert('abc Def 10abc', 'abc-def-10-abc');
    assert('foo bar_bleh', 'foo-bar-bleh');
    assert('foo-bar-bleh', 'foo-bar-bleh');
    assert('foo-bar_bleh', 'foo-bar-bleh');
    assert('fooBarBleh', 'foo-bar-bleh');
    assert('_foo_bar', 'foo-bar');
    assert('-foo-bar', 'foo-bar');
    assert(' foo bar', 'foo-bar');
    assert('fooBar10Bleh1', 'foo-bar-10-bleh-1');
    assert('foo10 bar1 90', 'foo-10-bar-1-90');
    assert('ABFoo', 'a-b-foo');
    assert('foo__bar', 'foo-bar');
    assert('foo--bar', 'foo-bar');
    assert('foo-_bar', 'foo-bar');
    assert('foo_bar_', 'foo-bar');
    assert('foo-bar-', 'foo-bar');
    assert('Foo_bar', 'foo-bar');
  });
});
