export function leadZero(num, size) {
  let s = num + "";
  while (s.length < size) s = `0${s}`;
  return s;
}

export function capitalize(str) {
  let capital = str.charAt(0).toUpperCase() + str.slice(1);
  return capital;
}
