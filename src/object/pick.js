import curry2 from '../_internal/curry2';

/**
 * Returns a copy of a given object containing only a specified list of keys.
 *
 * @function
 * @param {Array.<string>} keys - The keys to copy
 * @param {Object} obj - The source object
 * @return {Object} The copy of `obj` containing only `keys`
 * @example
 *
 *   const user = { name: 'Foo', age: 25, admin: true }
 *
 *   pick(['name', 'age'], user) //=> { name: 'Foo', age: 25 }
 */
export default curry2((keys, obj) => {
  const result = {};
  const length = keys.length;
  for (let i = 0; i < length; i++) {
    const k = keys[i];
    if (k in obj)
      result[k] = obj[k];
  }
  return result;
});
