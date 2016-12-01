/**
 * The `List` type definition for this method.
 *
 * @typedef {Array.<Array>} List
 */

/**
 * Takes an array of N arrays of length 2 and returns an array of 2 arrays of length N.
 *
 * The values in the original pairs will be distributed among the two arrays in
 * the resulting list.
 * Extra elements in the inner arrays will be ignored.
 *
 * @function
 * @param {List} list - The source list
 * @return {Array.<Array>} The new binary array
 * @example
 *
 *   unzip([[1, 4], [2, 5], [3, 6]]) //=> [[1, 2, 3], [4, 5, 6]]
 */
export default function unzip(list) {
  const length = list.length;
  const result = [new Array(length), new Array(length)];
  for (let i = 0; i < length; i++) {
    result[0][i] = list[i][0];
    result[1][i] = list[i][1];
  }
  return result;
}
