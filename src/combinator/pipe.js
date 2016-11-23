import arity from '../_internal/arity'

/**
 * Performs left-to-right function composition.
 * The leftmost function may take any number of arguments, the other functions
 * should have only one parameter.
 * The resulting new function will report the same arity as the leftmost function.
 *
 * @function
 * @param {...function} fns - The functions to compose
 * @return {function} The function resulting of the composition
 * @example
 *
 *   const sum = (x, y) => x + y
 *   const add10 = x => x + 10
 *   const foo = pipe(sum, add10)
 *
 *   foo(10, 20) //=> 40
 */
export default function pipe() {
  const fns = arguments
  const length = arguments.length
  const first = arguments[0]

  return arity(first.length, function () {
    let result = first.apply(undefined, arguments)
    for (let i = 1; i < length; i++)
      result = fns[i](result)
    return result
  })
}
