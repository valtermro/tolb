import curry2 from '../_internal/curry2';

/**
 * Returns the value at a specified key in a object.
 *
 * Values inside nested objects can be fetched by using the path, separated by ".",
 * to the wanted value.
 * If an array of keys is passed instead of a string, an array with the corresponding
 * values will be returned.
 *
 * @function
 * @param {(string|Array.<string>)} key - The key(s) to fetch
 * @param {Object} obj - The source object
 * @return {(string|Array)} The fetched value(s)
 * @example
 *
 *   const obj = { foo: 1, bar: { baz: 2 }}
 *
 *   get('foo', obj) //=> 1
 *   get(['foo', 'bar'], obj) //=> [1, { baz: 2 }]
 *   get('bar.baz', obj) //=> 2
 *   get(['foo', 'bar.baz'], obj) //=> [1, 2]
 */
export default curry2(function get(key, obj) {
  if (key instanceof Array) {
    const length = key.length;
    const result = new Array(length);
    for (let i = 0; i < length; i++)
      result[i] = get(key[i], obj);
    return result;
  }

  const idx = key.indexOf('.');
  if (idx < 0)
    return obj[key];
  return get(key.slice(idx + 1), obj[key.slice(0, idx)]);
});
