import prop from './_internal/prop';
import curry2 from '../_internal/curry2';

/**
 * Returns the value at a specified key in a object.
 *
 * Values inside nested objects can be fetched by using the path, separated by ".",
 * to the wanted key.
 *
 * @param {string} key - The key to fetch
 * @param {Object} obj - The source object
 * @return {string} The fetched value
 * @example
 *
 *   const obj = { foo: 1, bar: { baz: 2 }}
 *
 *   prop('foo', obj) //=> 1
 *   prop('bar.baz', obj) //=> 2
 */
export default curry2(prop);

