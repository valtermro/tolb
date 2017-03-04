import arity from '../_internal/arity';

/**
 * Performs right-to-left function composition.
 *
 * The rightmost function may take any number of arguments, the others functions
 * should have only one parameter.
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
export default function compose(/* fns */) {
  const fns = arguments;
  const last = fns[fns.length - 1];

  return arity(last.length, function (/* args */) {
    let result = last.apply(undefined, arguments);
    for (let i = fns.length - 2; i >= 0; i--)
      result = fns[i](result);
    return result;
  });
}
