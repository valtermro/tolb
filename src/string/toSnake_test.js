/* eslint-env mocha */
import A from 'assert';
import toSnake from './toSnake';

describe('string.toSnake(str)', () => {
  it('converts "str" to snake_case', () => {
    A.equal(toSnake(''), '');
    A.equal(toSnake('abc'), 'abc');
    A.equal(toSnake('already_snake_case'), 'already_snake_case');
    A.equal(toSnake('foo bar'), 'foo_bar');
    A.equal(toSnake('Foo bar'), 'foo_bar');
    A.equal(toSnake('abc Def 10abc'), 'abc_def_10_abc');
    A.equal(toSnake('foo bar_bleh'), 'foo_bar_bleh');
    A.equal(toSnake('foo-bar-bleh'), 'foo_bar_bleh');
    A.equal(toSnake('foo-bar_bleh'), 'foo_bar_bleh');
    A.equal(toSnake('fooBarBleh'), 'foo_bar_bleh');
    A.equal(toSnake('_foo_bar'), 'foo_bar');
    A.equal(toSnake('-foo-bar'), 'foo_bar');
    A.equal(toSnake(' foo bar'), 'foo_bar');
    A.equal(toSnake('fooBar10Bleh1'), 'foo_bar_10_bleh_1');
    A.equal(toSnake('foo10 bar1 90'), 'foo_10_bar_1_90');
    A.equal(toSnake('ABFoo'), 'a_b_foo');
    A.equal(toSnake('foo__bar'), 'foo_bar');
    A.equal(toSnake('foo--bar'), 'foo_bar');
    A.equal(toSnake('foo-_bar'), 'foo_bar');
    A.equal(toSnake('foo_bar_'), 'foo_bar');
    A.equal(toSnake('foo-bar-'), 'foo_bar');
    A.equal(toSnake('Foo_bar'), 'foo_bar');
  });
});
