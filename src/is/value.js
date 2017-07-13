/**
 * Checks if a given object has value.
 *
 * An object has value if it is neither null nor undefined.
 *
 * @function
 * @param {*} subject - The object to test.
 * @return {boolean} `true` if the object has value,`false` otherwise.
 * @example
 *
 *   value(null); //=> false
 *   value(undefined); //=> false
 *   value('foo'); //=> true
 *   value(0); //=> true
 *   value(''); //=> true
 *   value(false); //=> true
 */
export default function value(subject) {
  return subject != null;
}
