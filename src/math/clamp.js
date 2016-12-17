import curry3 from '../_internal/curry3';

/**
 * Ensures a number stays within a range.
 *
 * It takes a minimum (min) value, a maximum value (max) and some number (num) and:
 * - if `num` is smaller than `min`, returns `min`; or
 * - if `num` is greater than `max`, returns `max`; or
 * - returns `num`
 *
 * @function
 * @param {number} min - The minimum accepted value
 * @param {number} max - The maximum accepted value
 * @param {number} value - The value to test
 * @return {number} The safe value between `min` and `max`
 * @example
 *
 *   clamp(10, 20, 30) //=> 20
 *   clamp(10, 20, 5) //=> 10
 *   clamp(10, 20, 15) //=> 15
 */
export default curry3((min, max, value) => {
  if (min > max || max < min)
    throw new Error('Invalid range');

  if (value < min) return min;
  if (value > max) return max;
  return value;
});
