/**
 * Checks if a given object is empty.
 *
 * Types are tested as follow:
 * - String: is empty if its length is 0.
 * - Array: is empty if its length is 0.
 * - Array-like object: is empty if its length is 0.
 * - Object literal: is empty if it has no values in it.
 * - Any other value is never empty
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is empty, `false` otherwise
 * @example
 *
 *   isEmpty('foo') //=> false
 *   isEmpty([1]) //=> false
 *   isEmpty(null) //=> false
 *   isEmpty('') //=> true
 *   isEmpty([]) //=> true
 *   isEmpty({}) //=> true
 */
export default function isEmpty(subject) {
  const tof = typeof subject;
  if (subject == null || tof === 'number' || tof === 'function')
    return false;

  if (typeof subject.length === 'number')
    return subject.length === 0;

  if (subject.constructor !== Object)
    return false;

  return Object.keys(subject).length === 0;
}
