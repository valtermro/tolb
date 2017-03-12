import words from './_internal/words';

/**
 * Converts a given string to camelCase.
 *
 * @function
 * @param {string} str - The string to convert
 * @return {string} `str` converted to camelCase
 * @example
 *
 *   toCamel('foo-bar') //=> fooBar
 *   toCamel('foo_bar') //=> fooBar
 *   toCamel('foo bar') //=> fooBar
 */
export default function toCamel(str) {
  const w = words(str);

  let result = '';
  for (let i = 0; i < w.length; i++)
    result += i === 0 ? w[i].toLowerCase() : w[i][0].toUpperCase() + w[i].slice(1);
  return result;
}
