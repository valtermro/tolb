import curry2 from '../_internal/curry2';
import equals from '../assert/equals';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Checks if a list contains a given value.
 *
 * `assert.equals` is used to compared the values.
 *
 * @function
 * @param {*} value - The wanted value
 * @param {List} - The list to inspect
 * @return {boolean} `true` if `list` contains `value`, `false` otherwise
 * @example
 *
 *   contains('bar', 'foo bar') //=> true
 *   contains(NaN, [NaN]) //=> true
 *   contains(1, { a: 1 }) //=> true
 *   contains(2, { a: 1 }) //=> false
 *   contains(-0, [0]) //=> false
 */
export default curry2((value, list) => {
  if (typeof list === 'string')
    return list.indexOf(value) >= 0;

  const length = list.length;
  for (let i = 0; i < length; i++) {
    if (typeof value === 'number' || typeof value === 'object')
      return equals(list[i], value);

    if (list[i] === value)
      return true;
  }
  return false;
});
