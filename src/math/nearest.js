import curry2 from '../_internal/curry2';

/**
 * Takes two numbers (t, v) and rounds `v` to its nearest multiple of `t`.
 *
 * @function
 * @param {number} base - The value whose multiple we are searching for
 * @param {number} value - The value to round
 * @return {number} `value` rounded to its nearest multiple of `base`
 * @example
 *
 *   nearest(4, 3.5) //=> 4
 *   nearest(3, 7.4) //=> 6
 */
export default curry2((base, value) => {
  return Math.round(value / base) * base;
});
