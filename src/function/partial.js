import arity from '../_internal/arity';
import concat from '../_internal/concat';

/**
 * Takes a function (f) and a list of values (v). Partially applies `f` to `v`
 * and returns a function (g) that takes the rest of the arguments.
 *
 * The function itself can be used as a placeholder for arguments. These
 * placeholders will be replaced with values from the arguments passed to `g`.
 *
 * @function
 * @param {function} fn - The function to partially apply
 * @param {Array} leftArgs - The first part of the arguments for `fn`
 * @return {function} A function that takes the final arguments to be passed to `fn`
 * @example
 *
 *   const fn = (a, b, c, d) => [a, b, c, d]
 *
 *   const foo = partial(fn, [1, 2])
 *   foo(3, 4) //=> [1, 2, 3, 4]
 *
 *   const foo2 = partial(fn, [1, partial, 2])
 *   foo2(3, 4) //=> [1, 3, 2, 4]
 */
export default function partial(fn, leftArgs) {
  if (!(leftArgs instanceof Array))
    throw new TypeError('Expected: array');

  let ari = fn.length;
  for (let i = 0; i < leftArgs.length; i++) {
    if (leftArgs[i] !== partial)
      ari -= 1;
  }
  if (ari < 0) ari = 0;

  if (ari === fn.length - leftArgs.length) {
    // it's way faster than checking for placeholders we know aren't there
    return arity(ari, function (/* rightArgs */) {
      return fn.apply(undefined, concat(leftArgs, arguments));
    });
  }

  return arity(ari, (...rightArgs) => {
    const useArgs = [];
    for (let i = 0; i < leftArgs.length; i++) {
      if (leftArgs[i] === partial)
        useArgs[useArgs.length] = rightArgs.shift();
      else
        useArgs[useArgs.length] = leftArgs[i];
    }
    return fn.apply(undefined, concat(useArgs, rightArgs));
  });
}
