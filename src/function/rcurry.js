import arity from '../_internal/arity';
import concat from '../_internal/concat';
import reverse from '../_internal/reverse';
import curryArgs from './_internal/curryArgs';
import curry2 from '../_internal/curry2';
import curry3 from '../_internal/curry3';
import curry4 from '../_internal/curry4';

/**
 * Returns a version of a given function that can be used as if it was curried
 * and has its arguments supplied in reverse order.
 *
 * @function
 * @param {function} fn - The function to convert
 * @return {function} The "curried" version of `fn`
 * @example
 *
 *   const fn = (a, b, c) => [a, b, c]
 *
 *   const foo = rcurry(fn)
 *   foo(1)(2)(3) //=> [3, 2, 1]
 *   foo(1, 2)(3) //=> [3, 2, 1]
 *   foo(1)(2, 3) //=> [3, 2, 1]
 *   foo(1, 2, 3) //=> [3, 2, 1]
 */
export default function rcurry(fn) {
  const length = fn.length;

  if (length === 1) return fn;
  if (length === 2) return curry2(fn, true);
  if (length === 3) return curry3(fn, true);
  if (length === 4) return curry4(fn, true);

  return arity(length, function (/* args */) {
    return accumulator(fn, curryArgs(arguments));
  });
}

function accumulator(fn, accumulated) {
  const length = accumulated.length;
  const ari = fn.length;

  if (length >= ari)
    return fn.apply(undefined, reverse(accumulated).slice(length - ari));

  return arity(ari - length, function (/* args */) {
    return accumulator(fn, concat(accumulated, curryArgs(arguments)));
  });
}
