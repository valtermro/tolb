/**
 * Flattens a list one level.
 *
 * Any object with a numeric `length` property that are not strings are considered
 * valid lists but the result of `flatten` will always be an array.
 *
 * @function
 * @param {Array} list - The list to flatten
 * @return {Array} - The flattened `list`
 * @example
 *
 *   flatten([[1, 2], [3], 4]); //=> [1, 2, 3, 4]
 *   flatten([[1, 2], [3, [4]]]); //=> [1, 2, 3, [4]]
 *   flatten([[1], 'foo']); //=> [1, 'foo']
 */
export default function flatten(list) {
  const result = [];
  for (let i = 0, k = 0; i < list.length; i++) {
    const item = list[i];
    if (typeof item.length !== 'number' || typeof item === 'string' || item instanceof String) {
      result[k++] = item;
      continue;
    }
    for (let j = 0; j < item.length; j++)
      result[k++] = item[j];
  }
  return result;
}
