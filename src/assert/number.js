/**
 * Checks if a given object is a number.
 *
 * `Infinity`, `NaN` and `Number` objects are not numbers.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is a number, `false` otherwise
 * @example
 *
 *   number(10) //=> true
 *   number(Math.PI) //=> true
 *   number(NaN) //=> false
 *   number(Infinity) //=> false
 *   number('foo') //=> false
 *   number(new Number(10)) //=> false
 */
export default function number(subject) {
  if (isNaN(subject) || !isFinite(subject))
    return false;
  return typeof subject === 'number';
}
