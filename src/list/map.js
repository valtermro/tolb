import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Transforms a list by applying a function on each of its elements.
 *
 * At each iteration, the supplied function receives the current index as its
 * second argument. This may cause unexpected results if the function takes
 * multiple arguments.
 * For example: `map(parseInt, ['10', '11', '12'])` yields `[10, NaN, 1]`.
 * In cases like this, you should either partially apply the iteratee function
 * or restrict its arity.
 *
 * @function
 * @param {function} fn - The function to be used to transform the values
 * @param {List} list - The list to transform
 * @return {List} A copy of `list` with its values transformed by `fn`
 * @example
 *
 *   const double = x => x * 2
 *   const toUpper = x => x.toUpperCase()
 *
 *   map(double, [1, 2, 3]) //=> [2, 4, 6]
 *   map(toUpper, 'foo') //=> 'FOO'
 */
export default curry2((fn, list) => {
  if (typeof list === 'string') {
    let result = '';
    for (let i = 0; i < list.length; i++)
      result += fn(list[i], i);
    return result;
  }

  const result = new Array(list.length);
  for (let i = 0; i < list.length; i++)
    result[i] = fn(list[i], i);
  return result;
});
