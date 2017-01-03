import curry2 from '../_internal/curry2';
import { hasOwnProp } from '../_internal/object-proto';

/**
 * Checks if an object has a given key by its own.
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
 *   hasOwn('bar', { bar: true }) //=> true
 *   hasOwn('baz', { bar: true }) //=> false
 *   hasOwn('bar', new Foo()) //=> false
 */
export default curry2((key, subject) => {
  return hasOwnProp.call(subject, key);
});
