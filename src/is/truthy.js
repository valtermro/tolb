/**
 * Checks if a given object has value that is not `false`.
 *
 * The test for an object with value is made in the means of `is.value`.
 *
 * @function
 * @param {*} subject - The object to test.
 * @return {boolean} `true` if the object has a value and it's not `false`, `false` otherwise.
 * @example
 *
 *   truthy(false); //=> false
 *   truthy(true); //=> true
 *   truthy(0); //=> true
 *   truthy(''); //=> true
 */
export default function truthy(subject) {
  return subject != null && subject !== false;
}
