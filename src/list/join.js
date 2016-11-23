import curry2 from '../_internal/curry2'

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list
 */

/**
 * Returns a string with all values in a list separated by a given string.
 *
 * @function
 * @param {string} glue - The string to be inserted between the values
 * @param {List} list - The source list
 * @return {string} A string with all values in `list` separated by `glue`
 * @example
 *
 *   join(', ', ['foo', 'bar']) //=> 'foo, bar'
 *   join('', ['foo', 'bar']) //=> 'foobar'
 */
export default curry2((glue, list) => {
  return Array.prototype.join.call(list, glue)
})
