import curry2 from '../_internal/curry2'

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
export default curry2(function equals(left, right) {
  // Primitive values??
  //------------------------------
  if (left == null || right == null)
    // null === null || undefined === undefined
    return left === right

  if (left === right)
    // +0 !== -0
    return left !== 0 || 1 / left === 1 / right

  if (left !== left && right !== right) // eslint-disable-line
    // Both NaN
    return true

  if (typeof left !== 'object')
    // primitive values can be compared directly
    return left === right

  // Indexed lists??
  //--------------------------------
  const leftLen = left.length
  const rightLen = right.length
  if (typeof leftLen === 'number' && typeof rightLen === 'number') {
    if (leftLen !== rightLen)
      return false
    for (let i = 0; i < leftLen; i++) {
      if (!equals(left[i], right[i]))
        return false
    }
    return true
  }

  // Objects??
  //-------------------------------
  if (left.constructor === Object && right.constructor === Object) {
    // `left` should have the same keys that `right`
    for (const k in right) {
      if (!(k in left))
        return false
    }

    // Tests both if `right` has the same keys than `left` and if their values match
    for (const k in left) {
      if (!equals(left[k], right[k]))
        return false
    }
    return true
  }

  // If we got here...
  return false
})
