/**
 * Extracts words from a string.
 *
 * @function
 * @param {string} str - The string to extract the words from
 * @return {Array} The list of words in `str`
 */
export default function words(str) {
  return str.match(/[0-9]+|[A-Z][a-z]+|[A-Z]|[a-z]+/g) || []
}
