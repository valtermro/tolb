/**
 * Checks if a given object is an array.
 *
 * Checks only if the object is an instance of `Array`, which means that objects
 * of a class that inherits from `Array` (does anyone do such thing??) will pass
 * the test. If that is not what you want, you should use the native Array.isArray().

 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is an array, `false` otherwise
 * @example
 *
 *   function MyArray() {}
 *   MyArray.prototype = new Array()
 *
 *   isArray([]) //=> true
 *   isArray(new Array()) //=> true
 *   isArray('') //=> false
 *   isArray(document.getElmentsByClassName('foo')) //=> false
 *
 *   // BE CAREFUL
 *   isArray(new MyArray()) //=> true
 */
export default function isArray(subject) {
  return subject instanceof Array;
}
