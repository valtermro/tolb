import curry2 from '../_internal/curry2'

/**
 * Returns the smaller of two numbers.
 *
 * Unlike `Math.min`, it will not try to convert its arguments to numbers before
 * the operation.
 *
 * @function
 * @param {number} x - The first number to compare
 * @param {number} y - The second number to compare
 * @return {number} The smaller of `x` and `y`
 */
export default curry2((x, y) => {
  return x < y ? x : y
})
