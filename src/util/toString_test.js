/* eslint-env mocha */
/* eslint no-new-wrappers: 0 */
import A from 'assert'
import toString from './toString'

describe('util.toString(obj)', () => {
  function test(input, wanted) {
    A.strictEqual(toString(input), wanted)
  }

  it('string literal', () => {
    test('', '""')
    test('foo', '"foo"')
  })

  it('string object', () => {
    test(new String(), 'String("")')
    test(new String('foo'), 'String("foo")')
  })

  it('number', () => {
    test(1, '1')
  })

  it('number object', () => {
    test(new Number(1), 'Number(1)')
  })

  it('boolean', () => {
    test(false, 'false')
    test(true, 'true')
  })

  it('null', () => {
    test(null, 'null')
  })

  it('undefined', () => {
    test(undefined, 'undefined')
  })

  it('array', () => {
    test([], '[]')
    test([1, 2, 3], '[1,2,3]')
  })

  it('function', () => {
    test(function foo(a, b) { /**/ }, // eslint-disable-line
        'function foo(a, b) {/**/}')
  })

  it('plain object', () => {
    test({}, '{}')

    test({ a: 1, b: false, c: 'ola' },
        '{"a":1,"b":false,"c":"ola"}')

    test({ a: 1, b: [2, false], c: { d: [true, 0] } },
        '{"a":1,"b":[2,false],"c":{"d":[true,0]}}')

    test({ a: 1, b: { c: function foo() { /**/ }, d: [function () { /**/ }] } },
        '{"a":1,"b":{"c":function foo() {/**/},"d":[function () {/**/}]}}')

    test({ foo: [1, 2, 3, { bar: false }] },
        '{"foo":[1,2,3,{"bar":false}]}')
  })
})
