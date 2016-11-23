/**
 * Checks whether or not a given object is falsy.
 * An object is falsy if it's either false, null or undefined.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is falsy, `false` otherwise
 * @example
 *
 *   falsy(0) //=> false
 *   falsy('') //=> false
 *   falsy([]) //=> false
 *   falsy(null) //=> true
 *   falsy(undefined) //=> true
 *   falsy(false) //=> true
 */
export default function falsy(subject) {
  return subject == null || subject === false
}
