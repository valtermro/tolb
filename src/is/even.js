/**
 * Checks if a given number is even.
 * A number is even if it's an integer evenly divisible by two.
 *
 * `Number` objects are not supported.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is an even number, `false` otherwise
 * @example
 *
 *   even(2) //=> true
 *   even(1.1) //=> false
 *   even(2.1) //=> false
 *   even('foo') //=> false
 */
export default function even(subject) {
  if (typeof subject !== 'number')
    return false;
  return subject % 2 === 0;
}
