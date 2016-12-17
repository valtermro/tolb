import curry2 from '../_internal/curry2';

/**
 * Merges two objects together.
 *
 * If both objects have the same key, the value in the first one will be used.
 *
 * @function
 * @param {Object} source - The object with the values to merge in
 * @param {Object} target - The object that will receive the values in `source`
 * @return {Object} A new object with values from both `source` and `target`
 * @example
 *
 *   const obj1 = { foo: 1, bar: 2 }
 *   const obj2 = { baz: 3, bar: 4 }
 *
 *   merge(obj1, obj2) //=> { baz: 3, bar: 2, foo: 1 }
 */
export default curry2((source, target) => {
  const result = {};

  for (const k in target)
    result[k] = target[k];

  for (const k in source)
    result[k] = source[k];

  return result;
});
