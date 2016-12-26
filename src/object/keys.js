/**
 * Returns an array with the own enumerable keys of a given object.
 *
 * The keys are listed in the same order as they would be listed by a for-in loop.
 *
 * @function
 * @param {Object} obj - The source object
 * @return {Array.<string>} The list of keys in `obj`
 * @example
 *
 *   function Foo() {
 *      this.foo = 'foo';
 *   }
 *   Foo.prototype.bar = 'bar'
 *
 *   const f = new Foo()
 *   f.baz = 'baz'
 *
 *   keys({ foo: 1, bar: 2 }) //=> ['foo', 'bar']
 *   keys(f) //=> ['foo', 'baz']
 */
export default Object.keys;
