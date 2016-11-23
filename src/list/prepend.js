import curry2 from '../_internal/curry2'

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Inserts a value at the beginning of a list.
 *
 * @function
 * @param {*} value - The value to insert
 * @param {List} list - The target list
 * @return {(Array|string)} A copy of `list` with `value` prepended to it
 * @example
 *
 *   prepend('c', 'ab'') //=> 'cab'
 *   prepend(3, [1, 2]) //=> [3, 1, 2]
 *   prepend([3], [1, 2]) //=> [[3], 1, 2]
 */
export default curry2((value, list) => {
  if (typeof list === 'string')
    return value + list

  const length = list.length + 1
  const result = new Array(length)

  result[0] = value
  for (let i = 1; i < length; i++)
    result[i] = list[i - 1]

  return result
})
