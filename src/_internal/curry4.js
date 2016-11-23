/**
 * Optimized curry function for functions of arity 4.
 *
 * @function
 * @param {function} fn - The function to convert
 * @param {boolean} reverse - determines if the argument order should be reversed
 * @return {function} The "curried" version of "fn"
 */
export default function curry4(fn, reverse) {
  const apply = (a1, a2, a3, a4) => {
    if (reverse === true)
      return fn(a4, a3, a2, a1)
    return fn(a1, a2, a3, a4)
  }

  return function (a1, a2, a3, a4) {
    const len = arguments.length

    if (len >= 4)
      return apply(a1, a2, a3, a4)

    if (len >= 3)
      return b4 => apply(a1, a2, a3, b4)

    if (len >= 2) {
      return function (b3, b4) {
        if (arguments.length >= 2)
          return apply(a1, a2, b3, b4)
        return c4 => apply(a1, a2, b3, c4)
      }
    }

    return function (b2, b3, b4) {
      const len1 = arguments.length

      if (len1 >= 3)
        return apply(a1, b2, b3, b4)

      if (len1 >= 2)
        return c4 => apply(a1, b2, b3, c4)

      return function (c3, c4) {
        if (arguments.length >= 2)
          return apply(a1, b2, c3, c4)
        return d4 => apply(a1, b2, c3, d4)
      }
    }
  }
}
