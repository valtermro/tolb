import curry2 from '../_internal/curry2';

/**
 * Invokes `String.prototype.split` on a given string.
 *
 * @function
 * @param {(string|RegExp)} sep - The "separator" argument to `String.prototype.split`
 * @param {string} str - The string on which invoke `split`
 * @return {Array} The same as `str`.split(`sep`)
 * @example
 *
 *   split(',', 'foo,bar') //=> ['foo', 'bar']
 */
export default curry2((sep, str) => {
  return str.split(sep);
});
