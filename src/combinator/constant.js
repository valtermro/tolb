export default function constant(a) {
  return function (_) {
    return a;
  };
}
