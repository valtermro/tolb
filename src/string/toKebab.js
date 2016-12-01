import words from './_internal/words';

/**
 * Converts a given string to kebab-case.
 *
 * @function
 * @param {string} str - The string to convert
 * @return {string} `str` converted to kebab-case
 * @example
 *
 *   toKebab('fooBar') //=> foo-bar
 *   toKebab('foo_bar') //=> foo-bar
 *   toKebab('foo bar') //=> foo-bar
 */
export default function toKebab(str) {
  return words(str).join('-').toLowerCase();
}
