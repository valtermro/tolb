/**
 * Checks whether or not an object is truthy.
 * An object is truthy if it's neither false, null nor undefined.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is truthy, `false` otherwise
 * @example
 *
 *   truthy(0) //=> true
 *   truthy('') //=> true
 *   truthy([]) //=> true
 *   truthy(null) //=> false
 *   truthy(undefined) //=> false
 *   truthy(false) //=> false
 */
export default function truthy(subject) {
  return subject != null && subject !== false
}
