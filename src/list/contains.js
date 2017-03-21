import curry2 from '../_internal/curry2';
import equals from '../_internal/equals';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Checks if a list contains a given value.
 *
 * The values are compared by the means of `assert.equals`
 *
 * @function
 * @param {*} value - The value to search for
 * @param {List} subject - The object to inspect
 * @return {boolean} `true` if `subject` contains `value`, `false` otherwise
 * @example
 *
 *   contains('bar', 'foo bar') //=> true
 *   contains(NaN, [NaN]) //=> true
 *   contains(-0, [0]) //=> false
 */
export default curry2((value, subject) => {
  if (typeof subject === 'string')
    return subject.indexOf(value) >= 0;

  for (let i = 0; i < subject.length; i++) {
    if (typeof value === 'number' || typeof value === 'object')
      return equals(subject[i], value);

    if (subject[i] === value)
      return true;
  }

  return false;
});
