/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Returns the last value in the supplied list.
 *
 * @function
 * @param {List} list - The source list
 * @return {*} The last value in `list`
 * @example
 *
 *   last('abc') //=> 'c'
 *   last([1, 2, 3]) //=> 3
 *   last([]) //=> undefined
 */
export default function last(list) {
  return list[list.length - 1];
}
