/* eslint-disable no-param-reassign */
export default function slice(start, end, list) {
  const length = list.length;
  if (end == null) end = length;

  if (typeof list === 'string')
    return list.slice(start, end);

  if (end < 0) end = length + end;
  if (end > length) end = length;
  if (start < 0) start = length + start;
  if (start < 0) start = 0;

  const result = new Array(Math.max(0, end - start));
  for (let i = start, k = 0; i < end; i++, k++)
    result[k] = list[i];
  return result;
}
