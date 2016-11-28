import arity from '../_internal/arity'
import concat from '../_internal/concat'
import curryArgs from './_internal/curryArgs'
import curry2 from '../_internal/curry2'
import curry3 from '../_internal/curry3'
import curry4 from '../_internal/curry4'

/**
 * Returns a version of the supplied function that can be used as if it was curried.
 *
 * The wrapper function "can be used as if it was curried" because it's not really
 * curried. As we all know, a curried function takes only one argument. And `curry`
 * creates a function (that creates a function that creates a function...) that
 * can take any number of arguments (even 0) up to the original function's arity.
 * What we are really creating is a function that is kind of a mix of a curried
 * and partially applied function.
 *
 * @function
 * @param {function} fn - The function to convert
 * @return {function} The "curried" version of `fn`
 * @example
 *
 *   const fn = (a, b, c) => [a, b, c]
 *
 *   const foo = curry(fn)
 *   foo(1)(2)(3) //=> [1, 2, 3]
 *   foo(1, 2)(3) //=> [1, 2, 3]
 *   foo(1)(2, 3) //=> [1, 2, 3]
 *   foo(1, 2, 3) //=> [1, 2, 3]
 */
export default function curry(fn) {
  const length = fn.length

  if (length === 1) return fn
  if (length === 2) return curry2(fn, false)
  if (length === 3) return curry3(fn, false)
  if (length === 4) return curry4(fn, false)

  return arity(length, function (/* args */) {
    return accumulator(fn, curryArgs(arguments))
  })
}

function accumulator(fn, accumulated) {
  const length = accumulated.length
  const ari = fn.length

  if (length >= ari)
    return fn.apply(undefined, accumulated)

  return arity(ari - length, function (/* args */) {
    return accumulator(fn, concat(accumulated, curryArgs(arguments)))
  })
}
