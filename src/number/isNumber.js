import isNaN from './isNaN';

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
 *   isNumber(10) //=> true
 *   isNumber(Math.PI) //=> true
 *   isNumber(NaN) //=> false
 *   isNumber(Infinity) //=> false
 *   isNumber('foo') //=> false
 *   isNumber(new Number(10)) //=> false
 */
export default function isNumber(subject) {
  if (isNaN(subject) || !isFinite(subject))
    return false;
  return typeof subject === 'number';
}
