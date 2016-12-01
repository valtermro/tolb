import curry3 from '../_internal/curry3';

/**
 * Ensures a number stays within a range.
 *
 * It takes a minimum (min) value, a maximum value (max) and some number (num) and:
 * - if `num` is within the range from `min` to `max`, returns `num`
 * - if `num` is smaller than `min`, returns `min`
 * - if `num` is greater than `max`, returns `max`
 *
 * @function
 * @param {number} min - The minimum accepted value
 * @param {number} max - The maximum accepted value
 * @param {number} num - The value to test
 * @return {number} The safe value between `min` and `max`
 * @example
 *
 *   clamp(10, 20, 30) //=> 20
 *   clamp(10, 20, 5) //=> 10
 *   clamp(10, 20, 15) //=> 15
 */
export default curry3((min, max, num) => {
  if (min > max || max < min)
    throw new Error('Invalid range');

  if (num < min) return min;
  if (num > max) return max;
  return num;
});
