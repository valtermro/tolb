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
 *   integer(1) //=> true
 *   integer(1.0) //=> true
 *   integer('1') //=> false
 *   integer(1.1) //=> false
 *   integer(Infinity) //=> false
 *   integer(NaN) //=> false
 */
export default function integer(subject) {
  return isFinite(subject) && Math.floor(subject) === subject;
}
