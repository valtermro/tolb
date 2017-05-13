/**
 * Checks if a given object is `NaN`.
 *
 * Unlike the global `isNaN` it will not try to convert the value to a number,
 * which means that types such as strings and other non-numeric values will fail
 * the test.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is NaN, `false` otherwise
 * @example
 *
 *   nan(1 - 'foo') //=> true
 *   nan(NaN) //=> true
 *   nan(1) //=> false
 *   nan('foo') //=> false
 */
export default function nan(subject) {
  // NaN is the only value that is not equal to itself
  return subject !== subject // eslint-disable-line
}
