/* eslint-env mocha */
import A from 'assert'
import has from './has'

describe('object.has(key, obj)', () => {
  function Foo() { /**/ }
  Foo.prototype.bar = true

  const obj = { bar: true }

  it('checks if "obj" has "key" by its own or in its prototype chain', () => {
    A.equal(has('bar', obj), true)
    A.equal(has('foo', obj), false)
    A.equal(has('bar', new Foo()), true)
    A.equal(has('foo', new Foo()), false)
  })

  it('allows partial application', () => {
    A.equal(has('bar')(obj), true)
  })
})
