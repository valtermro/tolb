import curry2 from '../_internal/curry2'
import concat from '../_internal/concat'

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Merges two lists together.
 *
 * The target list should be the last to be passed in.
 * Both lists should be of the same type.
 *
 * @function
 * @param {List} other - The source list
 * @param {List} list - The target list
 * @return {List} A new list with values from both `list` and `othen`
 * @example
 *
 *   concat(' bar', 'foo') //=> 'foo bar'
 *   concat([3, 4], [1, 2]) //=> [1, 2, 3, 4]
 */
export default curry2((other, list) => {
  if (typeof other === 'string' && typeof list === 'string')
    return list + other

  return concat(list, other)
})
