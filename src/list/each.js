import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Applies a given function to each value in a list and returns the list after that.
 *
 * At each iteration, the current index is passed as the second argument to the
 * supplied function.
 *
 * @function
 * @param {function} fn - The iteratee function
 * @param {List} list - The list to iterate over
 * @return {List} The `list` itself
 */
export default curry2((fn, list) => {
  for (let i = 0; i < list.length; i++)
    fn(list[i], i);

  return list;
});
