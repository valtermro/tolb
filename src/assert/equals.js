import curry2 from '../_internal/curry2';
import _equals from '../_internal/equals';

/**
 * Deeply compares two object.
 *
 * The values are compared as follow:
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
 *   equals('foo', 'foo') //=> true
 *   equals(NaN, NaN) //=> true
 *   equals([1, NaN], [1, NaN]) //=> true
 *   equals({ a: 1 }, { a: 1 }) //=> true
 *   equals(1, '1') //=> false
 *   equals(0, -0) //=> false
 */
export default curry2(_equals);
