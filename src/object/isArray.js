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
 *   isArray([1, 2]) //=> true
 *   isArray(new Array()) //=> true
 *   isArray('') //=> false
 *   isArray(new MyArray()) //=> false
 */
export default Array.isArray;
