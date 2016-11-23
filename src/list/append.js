import curry2 from '../_internal/curry2'

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Inserts a value at the end of a list.
 *
 * @function
 * @param {*} value - The value to insert
 * @param {List} list - The target list
 * @return {(Array|string)} A copy of `list` with `value` appended to it
 * @example
 *
 *   append('c', 'ab'') //=> 'abc'
 *   append(3, [1, 2]) //=> [1, 2, 3]
 *   append([3], [1, 2]) //=> [1, 2, [3]]
 */
export default curry2((value, list) => {
  if (typeof list === 'string')
    return list + value

  const length = list.length
  const result = new Array(length + 1)

  for (let i = 0; i < length; i++)
    result[i] = list[i]
  result[length] = value

  return result
})
