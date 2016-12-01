import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Array} List
 */

/**
 * Zips two arrays together by joining the matching elements into pairs.
 *
 * If the lengths of the source arrays don't match, the extra elements in the longer
 * one will be ignored.
 *
 * @function
 * @param {List} left - The first source array
 * @param {List} right - The second source array
 * @return {Array.<Array>} The zipped array
 * @example
 *
 *   zip([1, 2, 3], [4, 5, 6]) //=> [[1, 4], [2, 5], [3, 6]]
 *   zip([1, 2], [3, 4, 5]) //=> [[1, 3], [2, 4]]
 *   zip([1, 2, 3], [4, 5]) //=> [[1, 4], [2, 5]]
 */
export default curry2((left, right) => {
  const length = Math.min(left.length, right.length);
  const result = new Array(length);
  for (let i = 0; i < length; i++)
    result[i] = [left[i], right[i]];
  return result;
});
