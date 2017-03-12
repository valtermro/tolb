/* eslint-disable no-param-reassign */
import curry3 from '../_internal/curry3';

/**
 * Reduces an initial value and each own value of an object to a single value
 * based on the output of a given function being applied to them.
 *
 * At each iteration, the supplied function receives the current accumulated value
 * and the object's current value and key as arguments.
 *
 * @function
 * @param {function} fn - The reducer function
 * @param {*} accum - The initial value for the operation
 * @param {Object} - The object whose values should be reduced
 * @return {*} The final value of the accumulator
 * @example
 *
 *    const sum = (x, y) => x + y;
 *    const obj = { a: 1, b: 2 };
 *
 *    reduceValues(sum, 10, obj); //=> 13
 */
export default curry3((fn, accum, obj) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++)
    accum = fn(accum, obj[keys[i]], keys[i]);
  return accum;
});
