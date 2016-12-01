import curry3 from '../_internal/curry3';

/**
 * Returns the equivalent of a normalized value (range from 0 to 1) in a specified
 * range.
 *
 * @function
 * @param {number} min - The start of the new range
 * @param {number} max - The end of the new range
 * @param {number} value - The normalized value to convert
 * @return {number} The equivalent of `value` in the range from `min` to `max`
 * @example
 *
 *   lerp(0, 50, 0.3) //=> 15
 *   lerp(10, 50, 0.125) //=> 15
 */
export default curry3((min, max, value) => {
  return (max - min) * value + min;
});
