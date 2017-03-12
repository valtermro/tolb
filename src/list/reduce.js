/* eslint-disable no-param-reassign */
import curry3 from '../_internal/curry3';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Applies a function to an accumulator and each value of a given list to reduce
 * it to a single value.
 *
 * At each iteration, the supplied function receives the current accumlated value
 * and the list's current value and index as arguments.
 *
 * @function
 * @param {function} fn - The reducer function
 * @param {*} accum - The initial value for the operation
 * @param {List} list - The list to reduce
 * @return {*} The reduced value
 * @example
 *
 *   const sum = (x, y) => x + y
 *   const ids = (a, v) => a.concat({ id: v })
 *
 *   reduce(sum, 10, [1, 2, 3]) //=> 16
 *   reduce(ids, [], [1, 2]) //=> [{ id: 1 }, { id: 2 }]
 */
export default curry3((fn, accum, list) => {
  for (let i = 0; i < list.length; i++)
    accum = fn(accum, list[i], i);
  return accum;
});
