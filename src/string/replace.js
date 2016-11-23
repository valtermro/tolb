import curry3 from '../_internal/curry3'

/**
 * Invokes `String.prototype.replace` on a given string.
 *
 * @function
 * @param {(string|RegExp)} search - The first argument to `String.prototype.replace`
 * @param {string} replacement - The second argument to `String.prototype.replace`
 * @param {string} str - The string on which invoke `replace`
 * @return {string} The same as `str`.replace(`search`, `replacement`)
 * @example
 *
 *   replace('o', 'u', 'foo') //=> 'fuo'
 *   replace(/o/g, 'u', 'foo') //=> 'fuu'
 */
export default curry3((search, replacement, str) => {
  return str.replace(search, replacement)
})
