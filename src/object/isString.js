/**
 * Checks if a given object is a string.
 *
 * `String` objects are not supported.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is a string literal, `false` otherwise
 * @example
 *
 *   isString('foo') //=> true
 *   isString(new String('foo')) //=> false
 *   isString(10) //=> false
 *   isString([]) //=> false
 */
export default function isString(subject) {
  return typeof subject === 'string';
}
