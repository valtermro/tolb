/**
 * Checks if a given object is a string literal.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is a string liteal, `false` otherwise
 * @example
 *
 *   isString('foo') //=> true
 *   isString(new String('foo')) //=> true
 *   isString(10) //=> false
 *   isString([]) //=> false
 */
export default function isString(subject) {
  return typeof subject === 'string'
}
