import curry2 from '../_internal/curry2';

/**
 * Takes two values (a, b) and tests if `b` is smaller than, or equal to, `a`.
 * Works with any value supported by the less than or equal operator (<=).
 *
 * Note that, like the other functions in the lib, `lt` takes the value to
 * operate on as its last argument. So `lte(1, 2)` => `false`.
 *
 * @function
 * @param {*} other - The base value for the comparison
 * @param {*} value - The value to compare against `other`
 * @return {boolean} `value` <= `false`
 * @example
 *
 *   lte(2, 1) //=> true
 *   lte(2, 2) //=> true
 *   lte(2, 3) //=> false
 *   lte('bc', 'ba') //=> true
 *   lte('bc', 'bde') //=> false
 */
export default curry2((other, value) => {
  return value <= other;
});
