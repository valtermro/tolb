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

  let result;
  if (obj instanceof Array) {
    const length = obj.length;
    result = new Array(length);
    for (let i = 0; i < length; i++)
      result[i] = clone(obj[i]);
  } else {
    result = {};
    const keys = Object.keys(obj);
    const length = keys.length;
    for (let i = 0; i < length; i++) {
      const key = keys[i];
      result[key] = clone(obj[key]);
    }
  }
  return result;
}
