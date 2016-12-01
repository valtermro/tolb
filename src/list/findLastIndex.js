import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Array} List
 */

/**
 * Returns the index of the last element in a list that matches a given predicate.
 * If the predicate matches nothing, returns -1.
 *
 * The current index is passed as the second argument to the predicate.
 * Note that `findLastIndex` iterates the list from right to left.
 *
 * @function
 * @param {function} pred - The predicate to match
 * @param {List} list - The list to inspect
 * @return {(number|undefined)} The index of the last value in `list` that matches `pred`
 * @example
 *
 *   const isEven = x => x % 2 === 0
 *
 *   findLastIndex(isEven, [1, 2, 3, 4, 5]) // => 3
 *   findLastIndex(isEven, [1, 3, 5]) // => undefined
 */
export default curry2((pred, list) => {
  for (let i = list.length - 1; i >= 0; i--) {
    const item = list[i];
    if (pred(item, i))
      return i;
  }
  return -1;
});
