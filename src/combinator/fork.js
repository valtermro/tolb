import curry3 from '../_internal/curry3';

/**
 * Takes three functions (join, f and g) and returns a function that takes one
 * argument and returns `join` applied to both `f` and `g` applied to that argument.
 *
 * @function
 * @param {function} join - The function whose result will be returned
 * @param {function} f - The function that will provide the first argument to `join`
 * @param {function} g - The function that will provide the second argument to `join`
 * @return {function} A function that takesthe argument to which `f` and `g` will be applied
 * @example
 *
 *   const sum = (x, y) => x + y
 *   const add5 = x =>  x + 5
 *   const add10 = x => x + 10
 *   const foo = fork(sum, add5, add10)
 *
 *   foo(10) //=> 35
 */
export default curry3((join, f, g) => {
  return function (v) {
    return join(f(v), g(v));
  };
});
