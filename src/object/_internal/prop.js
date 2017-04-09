export default function prop(key, obj) {
  const idx = key.indexOf('.');

  if (idx < 0)
    return obj[key];

  return prop(key.slice(idx + 1), obj[key.slice(0, idx)]);
}
