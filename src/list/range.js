import curry2 from '../_internal/curry2';

/**
 * Creates a list of numbers from a start to, but not including, a final values.
 *
 * @function
 * @param {number} start - The first value of the list
 * @param {number} end - The value that marks the end of the list
 * @return {Array.<number>} A list of numbers from `start` to, not including, `end`
 * @example
 *
 *   range(0, 4) //=> [1, 2, 3, 4]
 *   range(2, 6) //=> [2, 3, 4, 5, 6]
 */
export default curry2((start, end) => {
  const result = new Array(Math.max(0, end - start));
  for (let i = start, k = 0; i < end; i++)
    result[k++] = i;
  return result;
});
