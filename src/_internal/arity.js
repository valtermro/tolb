/* eslint-disable no-unused-vars */

/**
 * Wraps a function in a function that reports a fixed arity.
 *
 * Unlike `function.arity`, returns a function that will pass all arguments
 * it receives to the wrapped function, only the reported arity will change.
 *
 * Based on https://github.com/ramda/ramda/blob/master/src/internal/_arity.js.
 *
 * @function
 * @param {number} n - The arity to be reported
 * @param {function} fn - The function to wrap
 * @return {function} A function with arity `n` that applies `fn` to all arguments passed to it
 */
export default function arity(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.apply(undefined, arguments);
      };
    case 1:
      return function (a1) {
        return fn.apply(undefined, arguments);
      };
    case 2:
      return function (a1, a2) {
        return fn.apply(undefined, arguments);
      };
    case 3:
      return function (a1, a2, a3) {
        return fn.apply(undefined, arguments);
      };
    case 4:
      return function (a1, a2, a3, a4) {
        return fn.apply(undefined, arguments);
      };
    case 5:
      return function (a1, a2, a3, a4, a5) {
        return fn.apply(undefined, arguments);
      };
    case 6:
      return function (a1, a2, a3, a4, a5, a6) {
        return fn.apply(undefined, arguments);
      };
    case 7:
      return function (a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(undefined, arguments);
      };
    case 8:
      return function (a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(undefined, arguments);
      };
    default:
      throw new Error(
        'Trying to convert a function into a function with an invalid arity. Max allowed: 8');
  }
}
