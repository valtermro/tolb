/**
 * Takes a function (f) and returns a function that takes one argument (v) and:
 * 1. applies `f` to `v`;
 * 2. returns `v`.
 *
 * @function
 * @param {function} f - The function to apply to the future comming value
 * @return {function} A function that takes the value to operate on
 * @example
 *
 *   const foo = tap(console.log)
 *
 *   // logs 10 to the console and then returns 10
 *   const bar = foo(10)
 *   bar //=> 10
 */
export default function tap(f) {
  return function (v) {
    f(v);
    return v;
  };
}
