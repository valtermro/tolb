import curry3 from '../_internal/curry3'
import strRepeat from '../_internal/strRepeat'

/**
 * Fills a string with a given character until it reaches a specified length.
 * The character will be inserted at the left of the string.
 *
 * Does nothing if the string already has a length equal to, or greater than,
 * the specified length.
 *
 * @function
 * @param {number} length - The length of the resulting string
 * @param {string} fill - The character to fill the string with
 * @param {string} str - The string to fill
 * @return {string} `str` filled to left with `fill`
 * @example
 *
 *   lpad(4, '-', 'ab')    //=> '--ab'
 *   lpad(4, '-', 'abc')   //=> '-abc'
 *   lpad(4, '-', 'abcd')  //=> 'abcd'
 *   lpad(4, '-', 'abcde') //=> 'abcd'
 */
export default curry3((length, fill, str) => {
  const diff = length - str.length
  if (diff < 1)
    return str
  return `${strRepeat(diff, fill)}${str}`
})
