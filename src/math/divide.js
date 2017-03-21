import curry2 from '../_internal/curry2';

/**
 * Divides a number by another.
 * Doesn't try to convert any of its arguments before the operation.
 *
 * Note that, like the other functions in the lib, `divide` takes the value to
 * operate on (dividend) as its last argument. Therefore, `divide(10, 2)` yields
 * `0.5`, not `5`.
 *
 * @function
 * @param {number} divisor - The divisor
 * @param {number} dividend - The dividend
 * @return {number} `dividend` / `divisor`
 */
export default curry2((divisor, dividend) => {
  return dividend / divisor;
});
