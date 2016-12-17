import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Returns the n'th value in a list.
 *
 * @function
 * @param {number} n - The index to get the value from
 * @param {List} list - The source list
 * @return {*} The value at `index` inside `list`
 * @example
 *
 *   nth(1, [1, 2, 3]) //=> 2
 *   nth(1, 'abc') //=> 'b'
 *   nth(3, [1, 2, 3]) //=> undefined
 */
export default curry2((n, list) => {
  return list[n];
});
