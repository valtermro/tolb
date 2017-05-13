import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Array} List
 */

/**
 * Filters a list based on a given predicate.
 *
 * If the list is a string, the resulting list will be an array witch the characters
 * in the original string that match the predicate.
 *
 * The current index is passed as the second argument to the predicate.
 *
 * @function
 * @param {function} pred - The predicate to use to filter the list
 * @param {List} list - The list to filter
 * @return {Array} An array with all elements in `list` that match `pred`
 * @example
 *
 *   const isEven = x => x % 2 === 0;
 *   const isUpper = x => x === x.toUpperCase();
 *
 *   filter(isEven, [1, 2, 3, 4, 5, 6]); //=> [2, 4, 6]
 *   filter(isEven, [1, 3, 5]); //=> []
 *   filter(isUpper, 'AbCde'); //=> ['A', 'C']
 */
export default curry2((pred, list) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (pred(list[i], i))
      result[result.length] = list[i];
  }
  return result;
});
