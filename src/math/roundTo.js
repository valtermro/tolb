import curry2 from '../_internal/curry2';

/**
 * Rounds a number to a float with a specified number of decimal places.
 *
 * @function
 * @param {number} places - The precision of the resulting number
 * @param {number} value - The value to round
 * @return {number} `value` with `places` decimal places
 * @example
 *
 *   rountTo(2, Math.PI) //=> 3.14
 *   rountTo(4, Math.PI) //=> 3.1416
 *   rountTo(0, Math.PI) //=> 3
 */
export default curry2((places, value) => {
  const mult = Math.pow(10, places);
  return Math.round(value * mult) / mult;
});
