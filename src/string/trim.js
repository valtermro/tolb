/**
 * Invokes `String.prototype.trim` on the supplied string.
 *
 * @function
 * @param {string} str - The string on which invoke `trim`
 * @return {string} The same as `str`.trim()
 * @example
 *
 *   trim(' foo ') //=> 'foo'
 *   trim('\nfoo\n') //=> 'foo'
 */
export default function trim(str) {
  return str.trim()
}
