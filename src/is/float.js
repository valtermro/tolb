/**
 * Checks if a given number is a floating point number.
 *
 * If the object is a number with only zeros in its decimal part it's an integer
 * and not a float.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is a floating point number, `false` otherwise
 * @example
 *
 *   float(Math.PI)   //=> true
 *   float('1.1') //=> false
 *   float(1) //=> false
 *   float(1.0) //=> false
 *   float({}) //=> false
 */
export default function float(subject) {
  if (typeof subject !== 'number' || !isFinite(subject))
    return false;
  return Math.floor(subject) !== subject;
}
