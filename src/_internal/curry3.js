/**
 * Optimized curry function for functions of arity 3.
 *
 * @function
 * @param {function} fn - The function to convert
 * @param {boolean} reverse - Whether or not the arguments order should be reversed
 * @return {function} The "curried" version of `fn`
 */
export default function curry3(fn, reverse) {
  const apply = (a1, a2, a3) => {
    if (reverse === true)
      return fn(a3, a2, a1);
    return fn(a1, a2, a3);
  };

  return function (a1, a2, a3) {
    const len = arguments.length;

    if (len >= 3)
      return apply(a1, a2, a3);

    if (len === 2)
      return b3 => apply(a1, a2, b3);

    return function (b2, b3) {
      if (arguments.length >= 2)
        return apply(a1, b2, b3);
      return c3 => apply(a1, b2, c3);
    };
  };
}
