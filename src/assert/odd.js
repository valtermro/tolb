/**
 * Checks if an object is an odd number.
 *
 * An object is an odd number if it's an integer that cannot be evenly divided
 * by two.
 * `Number` objects are not supported.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is an odd number, `false` otherwise
 * @example
 *
 *   odd(1) //=> true
 *   odd(1.1) //=> false
 *   odd(2.1) //=> false
 *   odd('foo') //=> false
 */
export default function odd(subject) {
  if (typeof subject !== 'number')
    return false
  return subject % 2 === 1
}
