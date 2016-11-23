import curry2 from '../_internal/curry2'

/**
 * Adds two numbers.
 * Doesn't try to convert any of its arguments before the operation.
 *
 * Technically it takes the first addend as its last argument but, like our teachers
 * used to tell us: "Changing the order of the addends does not change the sum".
 *
 * @function
 * @param {number} y - The second addend
 * @param {number} x - The first addend
 * @return {number} `y` + `x`
 * @example
 *
 *   add(2, 3) //=> 5
 *   add(-2, 3) //=> 1
 *   add(2, -3) //=> -1
 */
export default curry2((y, x) => {
  return x + y
})
