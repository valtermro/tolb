/**
 * Checks if a given object is an array.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is an array, `false` otherwise.
 * @example
 *
 *   class MyArray extends Array {}
 *
 *   array([1, 2]) //=> true
 *   array(new Array()) //=> true
 *   array('') //=> false
 *   array(new MyArray()) //=> false
 */
export default Array.isArray;
