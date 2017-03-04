/**
 * Deeply clones an object.
 *
 * When cloning objects, this function will ignore the object's prototype chain.
 *
 * @function
 * @param {(Array|Object)} obj - The object to clone
 * @return {(Array|Object)} A deep copy of `obj`
 * @example
 *
 *   const array = [1, 2, 3]
 *   const array2 = clone(array)
 *
 *   array2[1] = 10
 *
 *   // changed as expected
 *   array2 //=> [1, 10, 2]
 *   // still the same
 *   array //=> [1, 2, 3]
 *
 *   const obj = { foo: 1, bar: [1, 2] }
 *   const obj2 = clone(obj)
 *
 *   obj2.foo = 10
 *   obj2.bar[0] = 20
 *
 *   // change as expected
 *   obj2 //=> { foo: 10, bar: [20, 2] }
 *   // still the same
 *   obj //=> { foo: 1, bar: [1, 2] }
 */
export default function clone(obj) {
  if (obj == null || typeof obj !== 'object')
    return obj;

  if (obj instanceof Array) {
    const result = new Array(obj.length);
    for (let i = 0; i < obj.length; i++)
      result[i] = clone(obj[i]);
    return result;
  }

  const keys = Object.keys(obj);
  const result = {};
  for (let i = 0; i < keys.length; i++)
    result[keys[i]] = clone(obj[keys[i]]);
  return result;
}
