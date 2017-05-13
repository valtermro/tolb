import curry2 from '../_internal/curry2';
import _equal from '../_internal/equal';

/**
 * Deeply compares two objects.
 *
 * The values are compared as follows:
 * - Arrays are equals if they have the same length and values in the same order.
 * - Objects are equals if both have the same keys and their values are equals.
 * - Numbers are compared following the spec for the `Number` type in the SameValue
 *   algorithm (http://ecma-international.org/ecma-262/7.0/#sec-samevalue)
 * - Anything else is compared with the strict equalily operator (===).
 *
 * @function
 * @param {*} left - The first value to compare
 * @param {*} right - The second value to compare
 * @return {boolean} `true` if `left` and `right` are equals, `false` otherwise
 * @example
 *
 *   equal('foo', 'foo') //=> true
 *   equal(NaN, NaN) //=> true
 *   equal([1, NaN], [1, NaN]) //=> true
 *   equal({ a: 1 }, { a: 1 }) //=> true
 *   equal(1, '1') //=> false
 *   equal(0, -0) //=> false
 */
export default curry2(_equal);
