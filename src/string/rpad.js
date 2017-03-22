import curry3 from '../_internal/curry3';
import strRepeat from '../_internal/strRepeat';

/**
 * Fills a string with a given character until it reaches a specified length.
 * The character will be inserted at the right of the string.
 *
 * Does nothing if the string already has a length equal to, or greater than,
 * the specified length.
 *
 * @function
 * @param {number} length - The length of the resulting string
 * @param {string} fill - The character to fill the string with
 * @param {string} str - The string to fill
 * @return {string} `str` filled to right with `fill`
 * @example
 *
 *   rpad(4, '-', 'ab')    //=> 'ab--'
 *   rpad(4, '-', 'abc')   //=> 'abc-'
 *   rpad(4, '-', 'abcd')  //=> 'abcd'
 *   rpad(4, '-', 'abcde') //=> 'abcd'
 */
export default curry3((length, fill, str) => {
  if (typeof length !== 'number')
    throw new TypeError('Expected: number');

  const diff = length - str.length;
  if (diff < 1)
    return str;
  return `${str}${strRepeat(diff, fill)}`;
});
