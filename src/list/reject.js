import curry2 from '../_internal/curry2'

/**
 * The `List` type definition for this method.
 *
 * @typedef {Array} List
 */

/**
 * Removes all elements in a list that match a given predicate.
 *
 * The predicate receives the current index as its second argument.
 *
 * @function
 * @param {function} pred - The predicate to match
 * @param {List} list - The source list
 * @return {Array} A copy of `list` excluding the elements that match `pred`
 * @example
 *
 *   const isEven = x => x % 2 === 0
 *
 *   reject(isEven, [1, 2, 3, 4, 5, 6]) //=> [1, 3, 5]
 */
export default curry2((pred, list) => {
  const result = []
  const length = list.length
  for (let i = 0; i < length; i++) {
    if (!pred(list[i], i))
      result[result.length] = list[i]
  }
  return result
})
