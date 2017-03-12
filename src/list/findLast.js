import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Array} List
 */

/**
 * Returns the last value in a list that matches a given predicate.
 *
 * The current index is passed as the second argument to the predicate.
 *
 * Note that `findLast` iterates the list from right to left.
 *
 * @function
 * @param {function} pred - The predicate to match
 * @param {List} list - The list to inspect
 * @return {*} The last value in `list` that matches `pred`
 * @example
 *
 *   const isEven = x => x % 2 === 0
 *
 *   findLast(isEven, [1, 2, 3, 4, 5]) // => 4
 *   findLast(isEven, [1, 3, 5]) // => undefined
 */
export default curry2((pred, list) => {
  for (let i = list.length - 1; i >= 0; i--) {
    if (pred(list[i], i))
      return list[i];
  }
});
