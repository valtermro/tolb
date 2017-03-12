const placeholder = [undefined];

export default function curryArgs(x) {
  return x.length > 0 ? x : placeholder;
}
