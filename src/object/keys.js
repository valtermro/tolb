/**
 * Returns an array with all enumerable keys of a given object.
 *
 * **Important**
 * This function returns all keys it can find in the object, including those in
 * the object's prototype chain.
 *
 * @function
 * @param {Object} obj - The source object
 * @return {Array.<string>} The list of keys in `obj`
 * @example
 *
 *   function Foo() {}
 *   Foo.prototype.bar = 'bar';
 *
 *   const f = new Foo();
 *   f.baz = 'baz';
 *
 *   keys({ foo: 1, bar: 2 }) //=> ['foo', 'bar']
 *   keys(f) //=> ['baz', 'bar']
 */
export default function keys(obj) {
  const result = [];
  for (const key in obj)
    result[result.length] = key;
  return result;
}
