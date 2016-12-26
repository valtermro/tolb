/**
 * Checks if a given object is a function.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is a function, `false` otherwise
 * @example
 *
 *   isFunction(function () {}) //=> true
 *   isFunction(() => null) //=> true
 *   isFunction([].map) //=> true
 *   isFunction()'foo') //=> false
 */
export default function isFunction(subject) {
  return typeof subject === 'function';
}
