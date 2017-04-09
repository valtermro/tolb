import prop from './_internal/prop';
import curry2 from '../_internal/curry2';

/**
 * Like `object.prop` but takes a list of keys (or paths) and returns a lists of
 * values matching those keys.
 *
 * @function
 * @param {Array.<string>} keys - The keys to fetch
 * @param {Object} obj - The source object
 * @return {Array} The fetched values
 * @example
 *
 *   const obj = { foo: 1, bar: { baz: 2 }}
 *
 *   props(['foo', 'bar'], obj) //=> [1, { baz: 2 }]
 *   props(['foo', 'bar.baz'], obj) //=> [1, 2]
 */
export default curry2((keys, obj) => {
  if (!(keys instanceof Array))
    throw new TypeError('Expected: array');

  const result = new Array(keys.length);
  for (let i = 0; i < keys.length; i++)
    result[i] = prop(keys[i], obj);
  return result;
});
