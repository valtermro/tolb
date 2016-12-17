import curry2 from '../_internal/curry2';

/**
 * Raises a value to a given power.
 * Behaves like `Math.pow` but it takes the base after the power.
 *
 * @function
 * @param {number} power - The power to raise the value to
 * @param {number} base - The value to raise
 * @return {number} `base` raised to `power`
 * @example
 *
 *   pow(10, 2) //=> 1024
 *   pow(2, 10) //=> 100
 */
export default curry2(function pow(power, base) {
  return Math.pow(base, power);
});
