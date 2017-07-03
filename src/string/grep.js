import curry2 from '../_internal/curry2';

/**
 * Returns all matches for a pattern in a given string.
 *
 * If the pattern matches nothing, `undefined` is returned.
 *
 * This function works almost the same way as calling `.match()` on the string
 * except that `grep()` returns a real array with only the string matches, i.e.
 * "index" and "input" are left out.
 *
 * @function
 * @param {(RegExp|string)} pattern - The search pattern
 * @param {string} str - The string to search in
 * @return {Array|undefined}
 *
 * @example
 *
 *   grep(/foo/, 'foo bar'); //=> ['foo']
 *   grep(/foo/, 'bar'); //=> undefined
 */
export default curry2((pattern, str) => {
  const matches = str.match(pattern);
  if (!matches) return;

  const result = [];
  for (let i = 0; i < matches.length; i++)
    result.push(matches[i]);
  return result;
});
