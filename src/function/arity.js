import curry2 from '../_internal/curry2';

/**
 * Wraps a function in a function with a fixed arity.
 * Any argument passed after the defined threshold will be ignored.
 *
 * Based on https://github.com/ramda/ramda/blob/master/src/internal/_arity.js.
 *
 * @function
 * @param {number} n - The arity of the wrapper function
 * @param {function} fn - The funciton to be wrapped
 * @return {function} A function that will apply `fn` to `n` arguments
 *
 *   const fn = function () {
 *     return Array.prototype.slice.call(arguments)
 *   }
 *   const fixed = arity(2, fn)
 *
 *   // returns an array with all of the arguments passed in
 *   fn(1, 2, 3, 4) //=> [1, 2, 3, 4]
 *
 *   // limit to 2 arguments
 *   fixed(1, 2, 3, 4) //=> [1, 2]
 *
 *   // can be used to fix the issue with `list.map` and variadic functions
 *   map(parseInt, ['10', '11', '12']) //=> [10, NaN, 1]
 *   map(arity(1, parseInt), ['10', '11', '12']) //=> [10, 11, 12]
 */
export default curry2((n, fn) => {
  switch (n) {
    case 0:
      return () => {
        return fn();
      };
    case 1:
      return (a1) => {
        return fn(a1);
      };
    case 2:
      return (a1, a2) => {
        return fn(a1, a2);
      };
    case 3:
      return (a1, a2, a3) => {
        return fn(a1, a2, a3);
      };
    case 4:
      return (a1, a2, a3, a4) => {
        return fn(a1, a2, a3, a4);
      };
    case 5:
      return (a1, a2, a3, a4, a5) => {
        return fn(a1, a2, a3, a4, a5);
      };
    case 6:
      return (a1, a2, a3, a4, a5, a6) => {
        return fn(a1, a2, a3, a4, a5, a6);
      };
    case 7:
      return (a1, a2, a3, a4, a5, a6, a7) => {
        return fn(a1, a2, a3, a4, a5, a6, a7);
      };
    case 8:
      return (a1, a2, a3, a4, a5, a6, a7, a8) => {
        return fn(a1, a2, a3, a4, a5, a6, a7, a8);
      };
    default:
      throw new Error(
        `Trying to convert ${fn.name ? `"${fn.name}"` : 'a function'} ` +
        'into a function with an invalid arity. Max allowed: 8');
  }
});
