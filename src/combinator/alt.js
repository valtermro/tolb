import curry2 from '../_internal/curry2';

/**
 * Takes two functions (f and g) and returns a new function that takes one
 * argument (v) and:
 * 1. Applies `f` to `v`. If the result has value, returns it; or
 * 2. Returns `g` applied to `v`.
 *
 * @function
 * @param {function} f - The first function to try to get a value from
 * @param {function} g - The alternative function
 * @return {function} A function that takes the argument to which apply `f` and, maybe, `g`
 * @example
 *
 *   const f = x => x && 'from f'
 *   const g = (_) => 'from g'
 *   const a = alt(f, g)
 *
 *   a(true) //=> "from f"
 *   a(false) //=> "from g"
 */
export default curry2((f, g) => {
  return function (v) {
    return f(v) || g(v);
  };
});
