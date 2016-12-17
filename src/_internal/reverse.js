/**
 * Reverses the order of the values in an array, or an array-like object.
 *
 * @function
 * @param {Array} array - The array to reverse
 * @return {Array} A copy of `array` with its values in reverse order
 */
export default function reverse(array) {
  const length = array.length;
  const result = new Array(length);
  for (let i = length - 1, k = 0; i >= 0; i--)
    result[k++] = array[i];
  return result;
}
