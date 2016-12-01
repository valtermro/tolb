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
  const wordList = words(str);
  const length = wordList.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    const w = wordList[i];
    result += i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1);
  }
  return result;
}
