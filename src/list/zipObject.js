import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Builds an object by pairing up a given list of keys and the values in a list
 * of value.
 * If the lengths of the list of keys and the list from which to extract the value
 * don't match, the extra elements in the longer list will be ignored.
 *
 * @function
 * @param {Array} keys - The keys to use in the resulting object
 * @param {List} list - The values for the object
 * @return {Object} An object with key-value pairs matching `keys` and the values in `list`
 * @example
 *
 *   zipObject(['foo', 'bar'], [1, 2]) //=> { foo: 1, bar: 2 }
 *   zipObject(['foo'], [1, 2]) //=> { foo: 1 }
 *   zipObject(['foo', 'bar', 'baz'], [1, 2]) //=> { foo: 1, bar: 2 }
 */
export default curry2((keys, list) => {
  const length = Math.min(list.length, keys.length);
  const result = {};
  for (let i = 0; i < length; i++)
    result[keys[i]] = list[i];
  return result;
});
