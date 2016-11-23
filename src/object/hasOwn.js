import curry2 from '../_internal/curry2'

/**
 * Checks if an object has a given key by its own (i.e. not in its prototype chain).
 *
 * @function
 * @param {string} key - The key to search for
 * @param {Object} obj - The object to inspect
 * @return {boolean} `true` if `subject` has `key`, `false` otherwise
 * @example
 *
 *   function Foo() {}
 *   Foo.prototype.bar = true
 *
 *   hasOwn('bar', { bar: true }) //=> true
 *   hasOwn('bar', new Foo()) //=> false
 */
export default curry2((key, obj) => {
  return obj.hasOwnProperty(key)
})
