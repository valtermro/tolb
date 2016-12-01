/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Returns the first value in a list.
 *
 * @function
 * @param {List} list - The source list
 * @return {*} The first value in `list`
 * @example
 *
 *   head('abc') //=> 'a'
 *   head([1, 2, 3]) //=> 1
 *   head([]) //=> undefined
 */
export default function head(list) {
  return list[0];
}
