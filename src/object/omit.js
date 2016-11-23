import curry2 from '../_internal/curry2'

/**
 * Creates a copy of an object excluding a specified list of keys from it.
 *
 * @function
 * @param {Array.<string>} keys - The keys to remove
 * @param {Object} obj - The source object
 * @return {Object} A copy of `obj` excluding `keys`
 * @example
 *
 *   const user = { name: 'Foo', age: 25, admin: true }
 *
 *   omit(['age', 'admin'], user) //=> { name: 'Foo' }
 */
export default curry2((keys, obj) => {
  const result = {}
  for (const k in obj) {
    if (keys.indexOf(k) < 0)
      result[k] = obj[k]
  }
  return result
})
