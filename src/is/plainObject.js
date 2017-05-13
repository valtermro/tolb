import hasOwnProp from '../_internal/hasOwnProp';

/**
 * Checks if a given object is an object literal.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` is an object literal, `false` otherwise
 * @example
 *
 *   function Foo() {}
 *
 *   plainObject({}) //=> true
 *   plainObject({ foo: 1 }) //=> true
 *   plainObject('foo') //=> false
 *   plainObject([]) //=> false
 *   plainObject(new Foo()) //=> false
 *   plainObject(Object.create({})) //=> false
 */
export default function plainObject(subject) {
  if (typeof subject !== 'object')
    return false;

  const proto = Object.getPrototypeOf(subject);

  if (proto === null)
    return true;

  if (!hasOwnProp.call(proto, 'constructor'))
    return false;

  if (subject.constructor !== Object)
    return false;

  return Object.prototype.toString.call(subject) === '[object Object]';
}
