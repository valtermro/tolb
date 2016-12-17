/**
 * Merges two arrays, or array-like objects, together.
 *
 * @function
 * @param {Array} left - The first array to merge
 * @param {Array} right - The second array to merge
 * @return {Array} A new array with the values of both `left` and `right`
 */
export default function concat(left, right) {
  const leftLen = left.length;
  const rightLen = right.length;
  const result = [];

  for (let i = 0; i < leftLen; i++)
    result[result.length] = left[i];

  for (let i = 0; i < rightLen; i++)
    result[result.length] = right[i];

  return result;
}
