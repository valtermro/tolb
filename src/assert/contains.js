import curry2 from '../_internal/curry2';
import equals from './equals';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Checks if a collection contains a given value.
 * A collection can be either an indexed list or an object.
 *
 * `assert.equals` is used to compared the values.
 *
 * @function
 * @param {*} value - The value to search for
 * @param {(Object|List)} subject - The object to inspect
 * @return {boolean} `true` if `subject` contains `value`, `false` otherwise
 * @example
 *
 *   contains('bar', 'foo bar') //=> true
 *   contains(NaN, [NaN]) //=> true
 *   contains(1, { a: 1 }) //=> true
 *   contains(2, { a: 1 }) //=> false
 *   contains(-0, [0]) //=> false
 */
export default curry2((value, subject) => {
  if (typeof subject === 'string')
    return subject.indexOf(value) >= 0;

  // The code inside the loops is repeated for performance reasons.
  // The gain is to high to be ignored.

  if (typeof subject.length !== 'number') {
    // Something that is not a indexed list
    for (const i in subject) {
      if (typeof value === 'number' || typeof value === 'object')
        return equals(subject[i], value);

      if (subject[i] === value)
        return true;
    }
  } else {
    const length = subject.length;
    for (let i = 0; i < length; i++) {
      if (typeof value === 'number' || typeof value === 'object')
        return equals(subject[i], value);

      if (subject[i] === value)
        return true;
    }
  }

  return false;
});
