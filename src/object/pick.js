import curry2 from '../_internal/curry2';
import hasOwnProp from '../_internal/hasOwnProp';

/**
 * Creates a new object literal by copying a specified list of own keys of an object.
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
  if (!(keys instanceof Array))
    throw new TypeError('Expected: array');

  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (hasOwnProp.call(obj, keys[i]))
      result[keys[i]] = obj[keys[i]];
  }
  return result;
});
