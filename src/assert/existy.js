/**
 * Checks whether or not a given object has value.
 * An object has value if it's neither null nor undefined.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` has value, `false` otherwise
 * @example
 *
 *   existy('foo') //=> true
 *   existy(0) //=> true
 *   existy('') //=> true
 *   existy([]) //=> true
 *   existy(false) //=> true
 *   existy(null) //=> false
 *   existy(undefined) //=> false
 */
export default function existy(subject) {
  return subject != null
}
