/**
 * @typedef {Object} ArrayLike
 * @property {number} length - The number of items in the list
 */

/**
 * Reverses the order of the values in an array, or an array-like object.
 *
 * @function
 * @param {(Array|ArrayLike)} list - The list to reverse
 * @return {Array} A copy of `list` with its values in reverse order
 */
export default function reverse(list) {
  const length = list.length;
  const result = new Array(length);
  for (let i = length - 1, k = 0; i >= 0; i--)
    result[k++] = list[i];
  return result;
}
