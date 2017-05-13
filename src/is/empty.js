/**
 * Checks if a given object is empty.
 *
 * Types are tested as follows:
 * - String: is empty if its length is 0.
 * - Array: is empty if its length is 0.
 * - Array-like object: is empty if its length is 0.
 * - Object literal: is empty if it has no own values.
 * - Values of any other type are never empty
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is empty, `false` otherwise
 * @example
 *
 *   empty('foo') //=> false
 *   empty([1]) //=> false
 *   empty(null) //=> false
 *   empty('') //=> true
 *   empty([]) //=> true
 *   empty({}) //=> true
 */
export default function empty(subject) {
  const tof = typeof subject;
  if (subject == null || tof === 'number' || tof === 'function')
    return false;

  if (typeof subject.length === 'number')
    return subject.length === 0;

  if (subject.constructor !== Object)
    return false;

  return Object.keys(subject).length === 0;
}
