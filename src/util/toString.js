/**
 * Creates a string that visually represents a given object.
 *
 * The convertion is done like follow:
 * - A string literal is surrounded in double quotes, so 'foo' becomes '"foo"'.
 * - A String object becomes something lile 'String("foo")'.
 * - A Number object becomes something lile 'Number(10)'.
 * - A function is represented as it looks like in source code.
 * - Object and arrays are converted almost the same way they are converted by
 *   JSON.stringfy, the difference is that functions inside them are still present
 *   in the resulting string.
 * - Any other value is converted by passing them to the `String` constructor.
 *
 * @function
 * @param {*} obj - The object to convert
 * @return {string} `obj` as a string
 * @example
 *
 *   toString('foo') //=> '"foo"'
 *   toString(1) //=> '1'
 *   toString(undefined) // 'undefined'
 *   toString([1, 2, 3]) //=> '[1,2,3]'
 *   toString({ foo: 1, bar: function () {} }) //=> '{"foo":1,"bar":function () {}}'
 *   toString(function foo () {}) // 'function foo () {}'
 *   toString(new String('abc')) // 'String("abc")'
 */
export default function toString(obj) {
  return obj == null ? String(obj) :
    typeof obj === 'string' ? `"${obj}"` :
    obj instanceof Array ? stringfy(obj, true) :
    obj instanceof String ? `String("${obj}")` :
    obj instanceof Number ? `Number(${obj})` :
    typeof obj === 'object' ? stringfy(obj, false) :
    String(obj)
}

function stringfy(obj, array) {
  if (!array) {
    const keys = Object.keys(obj)
    const length = keys.length
    if (length === 0)
      return '{}'

    let k = keys[0]
    let result = `{${toString(k)}:${toString(obj[k])}`
    for (let i = 1; i < length; i++) {
      k = keys[i]
      result += `,${toString(k)}:${toString(obj[k])}`
    }
    return `${result}}`
  }

  const length = obj.length
  if (length === 0)
    return '[]'

  let result = `[${toString(obj[0])}`
  for (let i = 1; i < length; i++)
    result += `,${toString(obj[i])}`
  return `${result}]`
}
