import curry2 from '../_internal/curry2';

/**
 * Takes two values (a, b) and tests if `b` is greater than, or equal to, `a`.
 * Works with any value supported by the greater than or equal operator (>=).
 *
 * Not that, like the others functions in the lib, `gte` takes the value to
 * operate on as its last argument. So `gte(1, 2)` => `true`.
 *
 * @function
 * @param {*} other - The base value to the comparison
 * @param {*} value - The value to compare against `other`
 * @return {boolean} `value` >= `other`
 * @example
 *
 *   gte(2, 3) //=> true
 *   gte(2, 2) //=> true
 *   gte(2, 1) //=> false
 *   gte('bc', 'bde') //=> true
 *   gte('bc', 'ba') //=> false
 */
export default curry2((other, value) => {
  return value >= other;
});
