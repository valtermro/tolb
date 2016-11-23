/* eslint-env mocha */
import A from 'assert'
import toCamel from './toCamel'

describe('string.toCamel(str)', () => {
  it('converts "str" to camelCase', () => {
    const assert = (input, wanted) => A.equal(toCamel(input), wanted)
    assert('', '')
    assert('abc', 'abc')
    assert('alreadyCamelCase', 'alreadyCamelCase')
    assert('foo bar', 'fooBar')
    assert('foo bar_bleh', 'fooBarBleh')
    assert('abc Def 10abc', 'abcDef10Abc')
    assert('Foo bar', 'fooBar')
    assert('FooBar', 'fooBar')
    assert('foo-bar-bleh', 'fooBarBleh')
    assert('foo_bar_bleh', 'fooBarBleh')
    assert('foo-bar_bleh', 'fooBarBleh')
    assert('_foo-bar', 'fooBar')
    assert('-foo-bar', 'fooBar')
    assert(' foo bar', 'fooBar')
    assert('foo-bar_10_bleh_1', 'fooBar10Bleh1')
    assert('foo-bar10bleh_1', 'fooBar10Bleh1')
    assert('a_b_foo', 'aBFoo')
    assert('foo__bar', 'fooBar')
    assert('foo--bar', 'fooBar')
    assert('foo-_bar', 'fooBar')
    assert('foo_bar_', 'fooBar')
    assert('Foo_bar-', 'fooBar')
  })
})
