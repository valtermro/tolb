/**
 * Takes a list of functions and returns a function that takes one argument and
 * applies each supplied function to it.
 *
 * @function
 * @param {...function} fns - The functions to run sequentially
 * @return {function} The function that takes the argument to pass to the supplied functions
 * @example
 *
 *   const foo = seq(console.log, window.alert)
 *
 *   // logs 10 to the console and then calls window.alert passing 10 to it
 *   foo(10)
 */
export default function seq() {
  const fns = arguments
  const length = fns.length

  return function (v) {
    for (let i = 0; i < length; i++)
      fns[i](v)
  }
}
