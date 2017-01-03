import curry2 from '../_internal/curry2';

/**
 * Applies a given function to each own enumerable value of an object.
 *
 * Returns the object itself after the iteration is done.
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
  const length = keys.length;
  for (let i = 0; i < length; i++) {
    const key = keys[i];
    fn(obj[key], key);
  }
  return obj;
});