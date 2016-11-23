/**
 * Optimized curry function for functions of arity 2.
 *
 * @function
 * @param {function} fn - The function to convert
 * @param {boolean} reverse - determines if the argument order should be reversed
 * @return {function} The "curried" version of "fn"
 */
export default function curry2(fn, reverse) {
  const apply = (a1, a2) => {
    if (reverse === true)
      return fn(a2, a1)
    return fn(a1, a2)
  }

  return function (a1, a2) {
    if (arguments.length >= 2)
      return apply(a1, a2)

    return b2 => apply(a1, b2)
  }
}
