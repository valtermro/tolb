import hasOwnProp from './_internal/hasOwnProp';

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
 *   isPlainObject({}) //=> true
 *   isPlainObject({ foo: 1 }) //=> true
 *   isPlainObject('foo') //=> false
 *   isPlainObject([]) //=> false
 *   isPlainObject(new Foo()) //=> false
 *   isPlainObject(Object.create({})) //=> false
 */
export default function isPlainObject(subject) {
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
