import curry2 from '../_internal/curry2';

/**
 * Checks if all elements in a list match a given predicate.
 *
 * The current index is passed as the second argument to the predicate.
 *
 * @function
 * @param {function} pred - The predicate to match
 * @param {Array} list - The list to inspect
 * @return {boolean} `true` if all elements in `list` match `pred`, `false` otherwise
 * @example
 *
 *   const isEven = x => x % 2 === 0
 *
 *   every(isEven, [0, 2, 4]) //=> true
 *   every(isEven, [0, 1, 2]) //=> false
 */
export default curry2((pred, list) => {
  for (let i = 0; i < list.length; i++) {
    if (!pred(list[i], i))
      return false;
  }
  return true;
});
