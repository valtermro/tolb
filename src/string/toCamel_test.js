/* eslint-env mocha */
import A from 'assert';
import toCamel from './toCamel';

describe('string.toCamel(str)', () => {
  it('converts "str" to camelCase', () => {
    A.equal(toCamel(''), '');
    A.equal(toCamel('abc'), 'abc');
    A.equal(toCamel('alreadyCamelCase'), 'alreadyCamelCase');
    A.equal(toCamel('foo bar'), 'fooBar');
    A.equal(toCamel('foo bar_bleh'), 'fooBarBleh');
    A.equal(toCamel('abc Def 10abc'), 'abcDef10Abc');
    A.equal(toCamel('Foo bar'), 'fooBar');
    A.equal(toCamel('FooBar'), 'fooBar');
    A.equal(toCamel('foo-bar-bleh'), 'fooBarBleh');
    A.equal(toCamel('foo_bar_bleh'), 'fooBarBleh');
    A.equal(toCamel('foo-bar_bleh'), 'fooBarBleh');
    A.equal(toCamel('_foo-bar'), 'fooBar');
    A.equal(toCamel('-foo-bar'), 'fooBar');
    A.equal(toCamel(' foo bar'), 'fooBar');
    A.equal(toCamel('foo-bar_10_bleh_1'), 'fooBar10Bleh1');
    A.equal(toCamel('foo-bar10bleh_1'), 'fooBar10Bleh1');
    A.equal(toCamel('a_b_foo'), 'aBFoo');
    A.equal(toCamel('foo__bar'), 'fooBar');
    A.equal(toCamel('foo--bar'), 'fooBar');
    A.equal(toCamel('foo-_bar'), 'fooBar');
    A.equal(toCamel('foo_bar_'), 'fooBar');
    A.equal(toCamel('Foo_bar-'), 'fooBar');
  });
});
