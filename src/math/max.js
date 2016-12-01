import curry2 from '../_internal/curry2';

/**
 * Returns the larger of two numbers.
 *
 * Unlike `Math.max`, it will not try to convert its arguments to numbers before
 * the operation.
 *
 * @function
 * @param {number} x - The first number to compare
 * @param {number} y - The second number to compare
 * @return {number} The larger of `x` and `y`
 */
export default curry2((x, y) => {
  return x > y ? x : y;
});
