import curry2 from '../_internal/curry2';

/**
 * Returns true if a string matches a given pattern, false otherwise.
 *
 * If you want an actual list of matches, see `string.grep`.
 *
 * @function
 * @param {RegExp} pattern - The pattern to match
 * @param {string} str - The string to test
 * @return {boolean}
 * @example
 *
 *   match(/foo/, 'foo bar'); //=> true
 *   match(/foo/, 'bar'); //=> false
 */
export default curry2((pattern, str) => {
  if (pattern instanceof RegExp)
    return pattern.test(str);
  return !!str.match(pattern);
});
