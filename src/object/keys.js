/**
 * Returns an array with all enumerable keys of a given object.
 *
 * Note that this function will fetch ALL keys, even those in the prototype chain.
 * If this behavior is not what you want, you can use the native `Object.keys`
 * method.
 *
 * @function
 * @param {Object} obj - The source object
 * @return {Array.<string>} The list of keys in `obj`
 * @example
 *
 *   keys({ foo: 1, bar: 2 }) //=> ['foo', 'bar']
 */
export default function keys(obj) {
  const result = []
  for (const k in obj)
    result[result.length] = k
  return result
}
