/**
 * Takes an argument and returns a function that always returns that argument.
 *
 * @function
 * @param {*} value - The value to be returned by every call to the created function
 * @return {function} A function that always returns `value`
 * @example
 *
 *   const always = constant('foo');
 *
 *   always() //=> 'foo'
 *   always('bar') //=> 'foo'
 */
export default function constant(value) {
  return function (_) {
    return value;
  };
}
