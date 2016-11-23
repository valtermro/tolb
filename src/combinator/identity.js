/**
 * A function that returns its argument.
 *
 * @function
 * @param {*} v - The value to return
 * @return {*} `v` itself
 * @example
 *
 *   const obj = { foo: 'bar' }
 *
 *   identity(1) //=> 1
 *   indentity(obj) === identity(obj) //=> true
 */
export default function identity(v) {
  return v
}
