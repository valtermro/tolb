import curry2 from '../_internal/curry2';

/**
 * Creates an object literal with all own enumerable values of a source object
 * transformed by a given function. Keys are preserved.
 *
 * At each iteration, the supplied function receives the object's current key and
 * value as arguments.
 *
 * @function
 * @param {function} fn - The transformer function
 * @param {Object} obj - The source object
 * @return {Object} An object literal with the values of `obj` transformed by `fn`
 * @example
 *
 *   const fn = (k, v) => `${k}=${v}`;
 *   const obj = Object.create({ foo: 1 });
 *   obj.bar = 2;
 *   obj.baz = 3;
 *
 *   map(fn, { foo: 1, bar: 2 }); //=> { foo: 'foo=1', bar: 'bar=2' }
 *   map(fn, obj); //=> { bar: 'bar=2', baz: 'baz=3' }
 */
export default curry2((fn, obj) => {
  const keys = Object.keys(obj);

  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result[key] = fn(key, obj[key]);
  }
  return result;
});
