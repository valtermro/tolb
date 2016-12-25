import curry2 from '../_internal/curry2';

/**
 * Checks if an object has a given key.
 *
 * Works with any value that is an object and has some kind of key, which means
 * it can be used with indexed lists.
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
 *   has(1, ['foo', 'bar']) //=> true
 */
export default curry2((key, subject) => {
  if (typeof subject.length === 'number')
    return key > -1 && key < subject.length;
  return key in subject;
});
