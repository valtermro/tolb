import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Array.<Object>} List
 */

/**
 * Creates a list with values extracted from a named property of all objects in a
 * given list.
 *
 * @function
 * @param {string} prop - The property to extract the value from
 * @param {List} list - The list with the objects from which to extract the values
 * @return {Array} The list of values extracted from the objects in `list`
 * @example
 *
 *   const list = [
 *     { name: 'Foo', age: 20 },
 *     { name: 'Bar', age: 18 },
 *     { name: 'Baz', age: 22 },
 *   ]
 *
 *   pluck('name', list) //=> ['Foo', 'Bar', 'Baz']
 */
export default curry2((prop, list) => {
  const result = new Array(list.length);
  for (let i = 0; i < list.length; i++)
    result[i] = list[i][prop];
  return result;
});
