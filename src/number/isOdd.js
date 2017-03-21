/**
 * Checks if a given number is odd.
 * A number is odd if it's an integer that cannot be evenly divided by two.
 *
 * `Number` objects are not supported.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is an odd number, `false` otherwise
 * @example
 *
 *   isOdd(1) //=> true
 *   isOdd(1.1) //=> false
 *   isOdd(2.1) //=> false
 *   isOdd('foo') //=> false
 */
export default function isOdd(subject) {
  if (typeof subject !== 'number')
    return false;
  return subject % 2 === 1;
}
