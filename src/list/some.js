import curry2 from '../_internal/curry2'

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Checks if at least one element in a list matches a given predicate.
 *
 * The predicate receives the current index as its second argument.
 *
 * @function
 * @param {function} pred - The predicate to match
 * @param {List} list - The list to inspect
 * @return {boolean} `true` if any element in `list` matches `pred`, `false` otherwise
 * @example
 *
 *   const pred = x => x < 0
 *
 *   some(pred, [1, 2, 3]) //=> false
 *   some(pred, [1, -2, 3]) //=> true
 */
export default curry2((pred, list) => {
  const length = list.length
  for (let i = 0; i < length; i++) {
    if (pred(list[i], i))
      return true
  }
  return false
})
