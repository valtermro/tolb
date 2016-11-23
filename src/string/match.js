import curry2 from '../_internal/curry2'

/**
 * Runs a RegExp against a given string.
 *
 * Unlike `String.prototype.match` it returns an empty array if the string
 * doesn't match the pattern.
 *
 * @function
 * @param {RegExp} pattern - The pattern to match
 * @param {string} str - The string to test
 * @return {Array} The match result
 * @example
 *
 *   match(/foo/, 'foo bar') //=> ['foo', index: 0, input: 'foo bar']
 *   match(/foo/, 'bar') //=> []
 */
export default curry2((pattern, str) => {
  return str.match(pattern) || []
})
