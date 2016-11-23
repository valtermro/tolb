import curry2 from '../_internal/curry2'

/**
 * Takes two values (a, b) and tests if `b` is smaller than `a`.
 * Works with any value supported by the less than operator (<).
 *
 * Not that, like the others functions in the lib, `lt` takes the value to
 * operate on as its last argument. So `lt(1, 2)` => `false`.
 *
 * @function
 * @param {*} other - The base value to the comparison
 * @param {*} value - The value to compare against `other`
 * @return {boolean} `value` < `other`
 * @example
 *
 *   lt(2, 1) //=> true
 *   lt(2, 3) //=> false
 *   lt('bc', 'ab') //=> true
 *   lt('bc', 'de') //=> false
 */
export default curry2((other, value) => {
  return value < other
})
