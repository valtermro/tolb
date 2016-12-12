import curry2 from '../_internal/curry2';

/**
 * Checks if an object has a given key.
 * If the object is an indexed list "key" should be a number.
 *
 * This function also searches for the key in the object's prototype chain.
 * Use `assert.hasOwn` if you need to skip keys in the prototype chain.
 *
 * @function
 * @param {string} key - The key to search for
 * @param {Object} subject - The object to search in
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
