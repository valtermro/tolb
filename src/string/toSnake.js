import words from './_internal/words'

/**
 * Converts a given string to snake_case.
 *
 * @function
 * @param {string} str - The string to convert
 * @return {string} `str` converted to snake_case
 * @example
 *
 *   toSnake('fooBar') //=> foo_bar
 *   toSnake('foo-bar') //=> foo_bar
 *   toSnake('foo bar') //=> foo_bar
 */
export default function toSnake(str) {
  return words(str).join('_').toLowerCase()
}
