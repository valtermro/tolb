import curry2 from '../_internal/curry2';

/**
 * Takes two values (a, b) and tests if `b` is greater than `a`.
 * Works with any value supported by the greater than operator (>).
 *
 * Not that, like the others functions in the lib, `gt` takes the value to operate
 * on as its last argument. So `gt(1, 2)` => `true`.
 *
 * @function
 * @param {*} other - The base value to the comparison
 * @param {*} value - The value to compare against `other`
 * @return {boolean} `value` > `other`
 * @example
 *
 *   gt(2, 3) //=> true
 *   gt(2, 2) //=> false
 *   gt('bc', 'de') //=> true
 *   gt('bc', 'ab') //=> false
 */
export default curry2((other, value) => {
  return value > other;
});
