import slice from './_internal/slice';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Returns all but the first element in a list.
 *
 * @function
 * @param {List} list - The source list
 * @return {(Array|string)} A copy of `list` excluding its first element
 * @example
 *
 *   tail('abcd') //=> 'bcd'
 *   tail([1, 2, 3, 4]) //=> [2, 3, 4]
 *   tail([1]) //=> []
 *   tail([]) //=> []
 */
export default function tail(list) {
  return slice(1, null, list);
}
