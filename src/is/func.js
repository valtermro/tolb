/**
 * Checks if a given object is a function.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is a function, `false` otherwise
 * @example
 *
 *   func(function () {}) //=> true
 *   func(() => null) //=> true
 *   func([].map) //=> true
 *   func()'foo') //=> false
 */
export default function func(subject) {
  return typeof subject === 'function';
}
