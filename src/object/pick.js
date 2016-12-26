import curry2 from '../_internal/curry2';
import { hasOwnProp } from '../_internal/object-proto';

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
  const result = {};
  const length = keys.length;
  for (let i = 0; i < length; i++) {
    const key = keys[i];
    if (hasOwnProp.call(obj, key))
      result[key] = obj[key];
  }
  return result;
});
