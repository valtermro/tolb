import curry2 from '../_internal/curry2';

/**
 * Returns a random number within a given range.
 *
 * @function
 * @param {number} min - The minimum allowed value
 * @param {number} max - The maximum allowed value
 * @return {number} A random number between `min` and `max`
 */
export default curry2((min, max) => {
  return min + Math.random() * (max - min);
});
