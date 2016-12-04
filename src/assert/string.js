/**
 * Checks if a given object is a string literal.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is a string liteal, `false` otherwise
 * @example
 *
 *   string('foo') //=> true
 *   string(new String('foo')) //=> true
 *   string(10) //=> false
 *   string([]) //=> false
 */
export default function string(subject) {
  return typeof subject === 'string';
}
