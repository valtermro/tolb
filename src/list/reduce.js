import curry3 from '../_internal/curry3';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Applies a function to an accumulator and each value of a given list to reduce
 * it to a single value.
 *
 * Works with objects by dealing with them as list of key-value pairs.
 *
 * At each iteration, the supplied function receives the current accumulator
 * (initialValue on the first iteration), the current value and the current
 * index (or key if the input is an object) as arguments.
 *
 * @function
 * @param {function} fn - The reducer function
 * @param {*} initialValue - The initial accumulator
 * @param {(Object|List)} list - The list to reduce
 * @return {*} The reduced value
 * @example
 *
 *   const sum = (x, y) => x + y
 *   const ids = (a, v) => a.concat({ id: v })
 *
 *   reduce(sum, 10, [1, 2, 3]) //=> 16
 *   reduce(ids, [], [1, 2]) //=> [{ id: 1 }, { id: 2 }]
 *   reduce(sum, 0, { a: 1, b: 2 }) //=> 3
 */
export default curry3((fn, initialValue, list) => {
  const length = list.length;
  let result = initialValue;

  if (typeof length === 'number') {
    for (let i = 0; i < length; i++)
      result = fn(result, list[i], i);
  } else {
    for (const key in list)
      result = fn(result, list[key], key);
  }

  return result;
});
