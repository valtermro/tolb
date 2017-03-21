import curry2 from '../_internal/curry2';

/**
 * Creates an object literal with all own enumerable values of a source object
 * transformed by a given function. Keys are preserved.
 *
 * At each iteration, the supplied function receives the object's current key as
 * its second argument.
 *
 * @function
 * @param {function} fn - The transformer function
 * @param {Object} obj - The source object
 * @return {Object} An object literal with the values of `obj` transformed by `fn`
 * @example
 *
 *   const double = x => x * 2;
 *   const obj = Object.create({ foo: 1 });
 *   obj.bar = 2;
 *   obj.baz = 3;
 *
 *   mapValues(double, { foo: 1, bar: 2 }); //=> { foo: 2, bar: 4 }
 *   mapValues(double, obj); //=> { bar: 4, baz: 6 }
 */
export default curry2((fn, obj) => {
  const keys = Object.keys(obj);

  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result[key] = fn(obj[key], key);
  }
  return result;
});
