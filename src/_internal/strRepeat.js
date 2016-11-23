/**
 * Creates a string with a given character repeated N times.
 *
 * Algorithm taken from http://www.webreference.com/programming/javascript/jkm3/3.html
 *
 * @function
 * @param {number} n - The number of times to repeat the char
 * @param {string} char - The character to repeat
 * @return {string} A string with `char` repeated `n` times
 */
export default function strRepeat(n, char) {
  let result = ''
  for (let i = n, x = char;;) {
    if (i & 1) result += x
    i >>= 1
    if (i === 0) break
    x += x
  }
  return result
}
