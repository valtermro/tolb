import curry2 from '../_internal/curry2'

/**
 * Subtract one number from another.
 * Doesn't try to convert any of its arguments before the operation.
 *
 * Note that, like the others functions in the lib, `subtract` takes the
 * value to operate on (minuend) as its last argument. Therefore, unlike one may
 * expect, `subtract(10, 2)` yields `-8` and not `8`.
 *
 * @function
 * @param {number} subtrahend - The subtrahend
 * @param {number} minuend - The minuend
 * @return {number} `y` - `x`
 * @example
 *
 *   subtract(2, 10) //=> 8
 *   subtract(10, 2) //=> -8
 */
export default curry2((subtrahend, minuend) => {
  return minuend - subtrahend
})
