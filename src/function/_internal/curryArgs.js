export default function curryArgs(x) {
  return x.length > 0 ? x : [undefined]
}
