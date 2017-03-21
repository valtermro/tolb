import curry2 from '../_internal/curry2';

/**
 * Applies a given function to each own enumerable key/value pair of a given object
 * and returns that object.
 *
 * At each iteration, the supplied function receives the object's current key and
 * value as arguments.
 *
 * @function
 * @param {function} fn - The iteratee function
 * @param {Object} obj - The object to iterate over
 * @return {Object} `obj` itself
 */
export default curry2((fn, obj) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++)
    fn(keys[i], obj[keys[i]]);

  return obj;
});
