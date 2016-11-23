import curry2 from '../_internal/curry2'

/**
 * Merges two objects together.
 *
 * If both objects have the same key, the value in the last object will be used.
 *
 * @function
 * @param {Object} obj1 - The first source object
 * @param {Object} obj2 - The second source object
 * @return {Object} And object with value from both `obj1` and `obj2`
 * @example
 *
 *   const foo = { foo: 1, bar: 2 }
 *   const bar = { baz: 3, bar: 4 }
 *
 *   merge(foo, bar) //=> { foo: 1, bar: 4, baz: 3 }
 */
export default curry2((obj1, obj2) => {
  const result = {}

  for (const k in obj1)
    result[k] = obj1[k]

  for (const k in obj2)
    result[k] = obj2[k]

  return result
})
