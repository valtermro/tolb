import curry2 from '../_internal/curry2'
import strRepeat from '../_internal/strRepeat'

/**
 * Returns a list with a given value repeated N times.
 *
 * The resulting list will be a string if the supplied value is a string and an
 * array in any other case.
 *
 * @function
 * @param {number} n - The number of times to repeat the given value
 * @param {*} value - The value to be repeated
 * @return {(Array|string)} A list with `value` repeated `n` times
 * @example
 *
 *   repeat(3, 'a') //=> 'aaa'
 *   repeat(3, 1) //=> [1, 1, 1]
 */
export default curry2((n, value) => {
  if (value === undefined) return
  if (typeof value === 'string')
    return strRepeat(n, value)

  const result = new Array(n)
  for (let i = 0; i < n; i++)
    result[i] = value
  return result
})
