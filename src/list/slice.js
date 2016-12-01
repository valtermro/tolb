import curry3 from '../_internal/curry3';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Slices a list from an index X to, but not including, an index Y.
 * Behaves like `Array.prototype.slice` but works with any numerically indexed list.
 *
 * @function
 * @param {number} start - The index to slice from
 * @param {number} end - The index to slice to
 * @param {List} list - The source list
 * @return {(Array|string)} `list` sliced from `start` to `end`
 * @example
 *
 *   slice(0, 3, 'abcd') //=> 'abc'
 *   slice(0, 3, [1, 2, 3, 4]) //=> [1, 2, 3]
 *   slice(1, -1, [1, 2, 3, 4]) //=> [2, 3]
 *   slice(-3, 3, [1, 2, 3, 4]) //=> [2, 3]
 */
export default curry3((start, end, list) => {
  if (typeof list === 'string')
    return list.slice(start, end != null ? end : undefined);

  const length = list.length;
  let stop = end, begin = start;

  if (stop == null) stop = length;
  if (stop < 0) stop = length + stop;
  if (stop > length) stop = length;
  if (begin < 0) begin = length + begin;
  if (begin < 0) begin = 0;

  const len = stop - begin;
  const result = new Array(len > 0 ? len : 0);
  for (let i = begin, k = 0; i < stop; i++, k++)
    result[k] = list[i];
  return result;
});
