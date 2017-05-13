module.exports.makeArray = function (length, skipZero) {
  const result = new Array(length);
  for (let i = 0; i < length; i++)
    result[i] = skipZero ? i + 1 : i;
  Object.freeze(result);
  return result;
};

module.exports.arrayLike = function (...values) {
  return function () { return arguments; }.apply(undefined, values);
};

module.exports.noop = () => { /* */ };

module.exports.id = function (x) {
  return x;
};

module.exports.isUpper = function (x) {
  return x === x.toUpperCase();
};

module.exports.isEven = function (x) {
  return (x & 1) === 0;
};

module.exports.isEqual = function (x, y) {
  return x === y;
};
