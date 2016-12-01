import curry3 from '../_internal/curry3';

/**
 * Converts a value within a given range to its equivalent in a range from 0 to 1.
 *
 * @function
 * @param {number} min - The start of the original range
 * @param {number} max - The end of the original range
 * @param {number} value - The value to be converted
 * @return {number} A number, between 0 and 1, equivalent to `value` in the range from `min` to `max`
 * @example
 *
 *   norm(0, 50, 15) //=> 0.3
 *   norm(10, 50, 15) //=> 0.125
 */
export default curry3((min, max, value) => {
  return (value - min) / (max - min);
});
