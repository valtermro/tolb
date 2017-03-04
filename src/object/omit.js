import curry2 from '../_internal/curry2';

/**
 * Creates a new object literal by copying all but the specified list of own
 * enumerable keys in an object.
 *
 * @function
 * @param {Array.<string>} keys - The keys to exclude
 * @param {Object} obj - The source object
 * @return {Object} A copy of `obj` excluding `keys`
 * @example
 *
 *   const user = { name: 'Foo', age: 25, admin: true }
 *
 *   omit(['age', 'admin'], user) //=> { name: 'Foo' }
 */
export default curry2((keyList, obj) => {
  const keys = Object.keys(obj);

  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (keyList.indexOf(key) < 0)
      result[key] = obj[key];
  }
  return result;
});
