/* eslint-env mocha */
import A from 'assert';
import toSnake from './toSnake';

describe('string.toSnake(str)', () => {
  it('converts "str" to snake_case', () => {
    const assert = (input, wanted) => A.equal(toSnake(input), wanted);
    assert('', '');
    assert('abc', 'abc');
    assert('already_snake_case', 'already_snake_case');
    assert('foo bar', 'foo_bar');
    assert('Foo bar', 'foo_bar');
    assert('abc Def 10abc', 'abc_def_10_abc');
    assert('foo bar_bleh', 'foo_bar_bleh');
    assert('foo-bar-bleh', 'foo_bar_bleh');
    assert('foo-bar_bleh', 'foo_bar_bleh');
    assert('fooBarBleh', 'foo_bar_bleh');
    assert('_foo_bar', 'foo_bar');
    assert('-foo-bar', 'foo_bar');
    assert(' foo bar', 'foo_bar');
    assert('fooBar10Bleh1', 'foo_bar_10_bleh_1');
    assert('foo10 bar1 90', 'foo_10_bar_1_90');
    assert('ABFoo', 'a_b_foo');
    assert('foo__bar', 'foo_bar');
    assert('foo--bar', 'foo_bar');
    assert('foo-_bar', 'foo_bar');
    assert('foo_bar_', 'foo_bar');
    assert('foo-bar-', 'foo_bar');
    assert('Foo_bar', 'foo_bar');
  });
});
