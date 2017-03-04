import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 * @typedef {Array} List
 */

/**
 * Returns the first value in a list that matches a given predicate.
 *
 * The current index is passed as the second argument to the predicate.
 *
 * @function
 * @param {function} pred - The predicate to match
 * @param {List} list - The list to inspect
 * @return {*} The first value in `list` that matches `pred`
 * @example
 *
 *   const isEven = x => x % 2 === 0
 *
 *   find(isEven, [1, 2, 3, 4, 5]) // => 2
 *   find(isEven, [1, 3, 5]) // => undefined
 */
export default curry2((pred, list) => {
  for (let i = 0; i < list.length; i++) {
    if (pred(list[i], i))
      return list[i];
  }
});
