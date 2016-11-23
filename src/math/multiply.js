import curry2 from '../_internal/curry2'

/**
 * Multiplies two numbers.
 * Doesn't try to convert any of its arguments before the operation.
 *
 * Technically, it takes the multiplicand as its last argument but, like our
 * teachers used to tell us: "Changing the order of the factors does not change
 * the product".
 *
 * @function
 * @param {number} multiplier - The multiplier factor
 * @param {number} multiplicand - The multiplicand factor
 * @return {number} `x` * `y`
 * @example
 *
 *   multiply(2, 3) //=> 6
 *   multiply(-4, 3) //=> -12
 */
export default curry2((multiplier, multiplicand) => {
  return multiplicand * multiplier
})
