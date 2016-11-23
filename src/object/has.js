import curry2 from '../_internal/curry2'

/**
 * Checks if an object, or its prototype chain, has a given key.
 *
 * @function
 * @param {string} key - The key to search for
 * @param {Object} obj - The object to search in
 * @return {boolean} `true` if `subject` has `key`, `false` otherwise
 * @example
 *
 *   function Foo() {}
 *   Foo.prototype.bar = true
 *
 *   has('bar', { bar: true }) //=> true
 *   has('bar', new Foo()) //=> true
 *   has('baz', { bar: true }) //=> false
 *   has('baz', new Foo()) //=> false
 */
export default curry2((key, obj) => {
  return key in obj
})
