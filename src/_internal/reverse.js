/**
 * Reverses the order of the values in an array, or an array-like object.
 *
 * @function
 * @param {Array} array - The array to reverse
 * @return {Array} A copy of `array` with its values in reverse order
 */
export default function reverse(array) {
  const result = new Array(array.length);
  for (let i = array.length - 1, k = 0; i >= 0; i--)
    result[k++] = array[i];
  return result;
}
