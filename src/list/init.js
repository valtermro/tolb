import slice from './slice';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Returns all but the last element in a list.
 *
 * @function
 * @param {List} list - The source list
 * @return {(Array|string)} A copy of `list` excluding its last element
 * @example
 *
 *   init('abcd') //=> 'abc'
 *   init([1, 2, 3, 4]) //=> [1, 2, 3]
 *   init([1]) //=> []
 *   init([]) //=> []
 */
export default function init(list) {
  return slice(0, -1, list);
}
