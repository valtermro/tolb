import _reverse from '../_internal/reverse';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Reverses the values in a list.
 *
 * @function
 * @param {List} list - The list to reverse
 * @return {(Array|string)} A copy of `list` with its values in reverse order
 * @example
 *
 *   reverse([1, 2, 3]) //=> [3, 2, 1]
 *   reverse('abc') //=> 'cba'
 */
export default function reverse(list) {
  if (typeof list === 'string') {
    const length = list.length;
    let result = '';
    for (let i = length - 1; i >= 0; i--)
      result += list[i];
    return result;
  }

  return _reverse(list);
}
