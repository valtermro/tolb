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
export default curry2((keys, obj) => {
  if (!(keys instanceof Array))
    throw new TypeError('Expected: array');

  const objKeys = Object.keys(obj);
  const result = {};
  for (let i = 0; i < objKeys.length; i++) {
    if (keys.indexOf(objKeys[i]) < 0)
      result[objKeys[i]] = obj[objKeys[i]];
  }
  return result;
});
