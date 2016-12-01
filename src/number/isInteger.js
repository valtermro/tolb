/**
 * Checks if a given object is, or could act as, a whole number.
 *
 * Numbers with only zeros in its decimal part are integers.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is an integer, `false` otherwise
 * @example
 *
 *   isInteger(1) //=> true
 *   isInteger(1.0) //=> true
 *   isInteger('1') //=> false
 *   isInteger(1.1) //=> false
 *   isInteger(Infinity) //=> false
 *   isInteger(NaN) //=> false
 */
export default function isInteger(subject) {
  return isFinite(subject) && Math.floor(subject) === subject;
}
