import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Array} List
 */

/**
 * Returns the index of the first element in a list that matches a given predicate.
 * If the predicate matches nothing, returns -1.
 *
 * The current index is passed as the second argument to the predicate.
 *
 * @function
 * @param {function} pred - The predicate to match
 * @param {List} list - The list to inspect
 * @return {(number)} The index of the first value in `list` that matches `pred`
 * @example
 *
 *   const isEven = x => x % 2 === 0
 *
 *   findIndex(isEven, [1, 2, 3, 4, 5]) // => 1
 *   findIndex(isEven, [1, 3, 5]) // => undefined
 */
export default curry2((pred, list) => {
  const length = list.length;
  for (let i = 0; i < length; i++) {
    if (pred(list[i], i))
      return i;
  }
  return -1;
});
