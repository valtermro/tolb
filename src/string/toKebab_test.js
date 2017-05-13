/* eslint-env mocha */
import A from 'assert';
import toKebab from './toKebab';

describe('string.toKebab(str)', () => {
  it('converts "str" to kebab-case', () => {
    A.equal(toKebab(''), '');
    A.equal(toKebab('abc'), 'abc');
    A.equal(toKebab('already_dash_case'), 'already-dash-case');
    A.equal(toKebab('foo bar'), 'foo-bar');
    A.equal(toKebab('Foo bar'), 'foo-bar');
    A.equal(toKebab('abc Def 10abc'), 'abc-def-10-abc');
    A.equal(toKebab('foo bar_bleh'), 'foo-bar-bleh');
    A.equal(toKebab('foo-bar-bleh'), 'foo-bar-bleh');
    A.equal(toKebab('foo-bar_bleh'), 'foo-bar-bleh');
    A.equal(toKebab('fooBarBleh'), 'foo-bar-bleh');
    A.equal(toKebab('_foo_bar'), 'foo-bar');
    A.equal(toKebab('-foo-bar'), 'foo-bar');
    A.equal(toKebab(' foo bar'), 'foo-bar');
    A.equal(toKebab('fooBar10Bleh1'), 'foo-bar-10-bleh-1');
    A.equal(toKebab('foo10 bar1 90'), 'foo-10-bar-1-90');
    A.equal(toKebab('ABFoo'), 'a-b-foo');
    A.equal(toKebab('foo__bar'), 'foo-bar');
    A.equal(toKebab('foo--bar'), 'foo-bar');
    A.equal(toKebab('foo-_bar'), 'foo-bar');
    A.equal(toKebab('foo_bar_'), 'foo-bar');
    A.equal(toKebab('foo-bar-'), 'foo-bar');
    A.equal(toKebab('Foo_bar'), 'foo-bar');
  });
});
