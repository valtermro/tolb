import arity from '../_internal/arity'

/**
 * Returns the complement of a given predicate.
 *
 * @function
 * @param {function} fn - The predicate to negate
 * @return {function} The complement of  `fn`
 * @example
 *
 *   const isEven = x => x % 2 === 0
 *   const isOdd = not(isEven)
 *
 *   isEven(2) //=> true
 *   isOdd(2) //=> false
 *   isOdd(1) //=> true
 */
export default function not(fn) {
  return arity(fn.length, function () {
    return !fn.apply(undefined, arguments)
  })
}
