import arity from '../_internal/arity';
import concat from '../_internal/concat';

/**
 * Takes a function (f) and a list of arguments (a) and returns a function that
 * takes arguments (b) and applies `f` to `b` and `a`.
 *
 * @function
 * @param {function} fn - The function to be partially applied
 * @param {Array} rightArgs - The last part of the arguments to be passed to `fn`
 * @return {function} A function that takes the initial arguments to be passed to `fn`
 * @example
 *
 *   const fn = (a, b, c, d) => [a, b, c, d]
 *   const foo = rpartial(fn, [1, 2])
 *
 *   foo(3, 4) //=> [3, 4, 1, 2]
 */
export default function rpartial(fn, rightArgs) {
  if (!(rightArgs instanceof Array))
    throw new TypeError('Expected: array');

  let ari = fn.length - rightArgs.length;
  if (ari < 0) ari = 0;

  return arity(ari, (...leftArgs) => {
    return fn.apply(undefined, concat(
      leftArgs.length <= ari ? leftArgs : leftArgs.slice(0, ari),
      rightArgs));
  });
}
