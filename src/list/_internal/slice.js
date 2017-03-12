export default function slice(start, end, list) {
  if (typeof list === 'string')
    return list.slice(start, end != null ? end : undefined);

  const length = list.length;
  let stop = end, begin = start;

  if (stop == null) stop = length;
  if (stop < 0) stop = length + stop;
  if (stop > length) stop = length;
  if (begin < 0) begin = length + begin;
  if (begin < 0) begin = 0;

  const len = stop - begin;
  const result = new Array(len > 0 ? len : 0);
  for (let i = begin, k = 0; i < stop; i++, k++)
    result[k] = list[i];
  return result;
}
