import curry2 from '../_internal/curry2';

/**
 * Checks if an object has a given key by its own or in it's prototype chain.
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
 *   hasIn('bar', { bar: true }) //=> true
 *   hasIn('foo', { bar: true }) //=> false
 *   hasIn('bar', new Foo()) //=> true
 */
export default curry2((key, subject) => {
  return key in subject;
});
