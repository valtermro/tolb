import arity from '../_internal/arity'

/**
 * Performs right-to-left function composition.
 *
 * The rightmost function may take any number of arguments, the others functions
 * should have onlu one parameter.
 * The resulting new function will report the same arity as the rightmost function.
 *
 * @function
 * @param {...function} fns - The functions to compose
 * @return {function} The function resulting of the composition
 * @example
 *
 *   const sum = (x, y) => x + y
 *   const add10 = x => x + 10
 *   const foo = compose(add10, sum)
 *
 *   foo(10, 20) //=> 40
 */
export default function compose() {
  const fns = arguments
  const length = fns.length
  const last = fns[length - 1]

  return arity(last.length, function () {
    let result = last.apply(undefined, arguments)
    for (let i = length - 2; i >= 0; i--)
      result = fns[i](result)
    return result
  })
}
