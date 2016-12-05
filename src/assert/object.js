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
 *   object({}) //=> true
 *   object({ foo: 1 }) //=> true
 *   object('foo') //=> false
 *   object([]) //=> false
 *   object(new Foo()) //=> false
 *   object(Object.create({})) //=> false
 */
export default function object(subject) {
  if (typeof subject !== 'object')
    return false;

  const proto = Object.getPrototypeOf(subject);

  if (proto === null)
    return true;

  if (!proto.hasOwnProperty('constructor'))
    return false;

  if (subject.constructor !== Object)
    return false;

  return Object.prototype.toString.call(subject) === '[object Object]';
}
