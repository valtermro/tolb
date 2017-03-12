import curry2 from '../_internal/curry2';

/**
 * Applies a given function to each own enumerable value of a given object and
 * then returns that object.
 *
 * At each iteration the supplied function receives the current key as its second
 * argument.
 *
 * @function
 * @param {function} fn - The iteratee function
 * @param {Object} obj - The object to iterate over
 * @return {Object} `obj` itself
 */
export default curry2((fn, obj) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++)
    fn(obj[keys[i]], keys[i]);

  return obj;
});
