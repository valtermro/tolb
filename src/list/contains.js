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
 * Works with objects by dealing with them as list of key-value pairs.
 *
 * `assert.equals` is used to compared the values.
 *
  * **Important**
 * Like other functions in the lib that deal with objects as list of key-value
 * pairs, this one expects the object to be an object literal. You may (probably
 * will) face unexpected behavior if the object inherits a prototype.*
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
