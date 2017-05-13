/* eslint-disable no-self-compare */

/**
 * Deeply compares two object.
 *
 * When comparing objects, this function will search values in the object's
 * prototype chain
 *
 * @param {*} left - The first value to compare
 * @param {*} right - The second value to compare
 * @return {boolean} `true` if `left` and `right` are equals, `false` otherwise
 */
export default function equal(left, right) {
  // Primitive values??
  // ------------------------------
  if (left == null || right == null)
    // null === null || undefined === undefined
    return left === right;

  if (left === right)
    // +0 !== -0
    return left !== 0 || 1 / left === 1 / right;

  if (left !== left && right !== right)
    // Both NaN
    return true;

  if (typeof left !== 'object')
    // primitive values can be compared directly
    return left === right;

  // Indexed lists??
  // --------------------------------
  if (typeof left.length === 'number' && typeof right.length === 'number') {
    if (left.length !== right.length)
      return false;
    for (let i = 0; i < left.length; i++) {
      if (!equal(left[i], right[i]))
        return false;
    }
    return true;
  }

  // Objects??
  // -------------------------------
  if (left.constructor === Object && right.constructor === Object) {
    // `left` should have the same keys that `right`
    for (const k in right) {
      if (!(k in left))
        return false;
    }

    // Tests both if `right` has the same keys `left` has and if their values match
    for (const k in left) {
      if (!equal(left[k], right[k]))
        return false;
    }
    return true;
  }

  // If we got here...
  return false;
}
