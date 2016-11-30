module.exports.makeArray = function (length, skipZero) {
  const result = new Array(length)
  for (let i = 0; i < length; i++)
    result[i] = skipZero ? i + 1 : i
  Object.freeze(result)
  return result
}

module.exports.makeString = function (length) {
  let result = ''
  for (let i = 0; i < length; i++)
    result += 'a'
  return result
}

module.exports.makeObject = function (length, start = 0) {
  const result = {}
  for (let i = start; i < start + length; i++)
    result[`key-${i}`] = i + 1
  Object.freeze(result)
  return result
}

module.exports.arrayLike = function (...values) {
  return function () { return arguments }.apply(undefined, values)
}

module.exports.id = function (x) {
  return x
}

module.exports.toUpper = function (str) {
  return str.toUpperCase()
}

module.exports.sum = function (x, y) {
  return x + y
}

module.exports.concat = function (x, y) {
  return x.concat(y)
}

module.exports.double = function (x) {
  return x * 2
}

module.exports.tripple = function (x) {
  return x * 3
}

module.exports.isEven = function (x) {
  return (x & 1) === 0
}

module.exports.isEqual = function (x, y) {
  return x === y
}

module.exports.foo2 = function (a1, a2) {
  return [a1, a2]
}

module.exports.foo3 = function (a1, a2, a3) {
  return [a1, a2, a3]
}

module.exports.foo4 = function (a1, a2, a3, a4) {
  return [a1, a2, a3, a4]
}

module.exports.foo6 = function (a1, a2, a3, a4, a5, a6) {
  return [a1, a2, a3, a4, a5, a6]
}
