import curry2 from '../_internal/curry2';

/**
 * Checks if an object has a given key.
 *
 * Note that this function inspects the object's prototype chain.
 *
 * @function
 * @param {string} key - The key to search for
 * @param {Object} subject - The object to inspect
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
export default curry2((key, subject) => {
  return key in subject;
});
