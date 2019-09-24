export function dateTranform(date) {
  let y = date.getFullYear();
  let M =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let d = date.getDate() + 1 < 10 ? `0${date.getDate()}` : date.getDate();
  return `${y}-${M}-${d}`;
}
export function dateNyform(date) {
  let y = date.getFullYear();
  let M =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let d = date.getDate() + 1 < 10 ? `0${date.getDate()}` : date.getDate();
  return `${y}年${M}月${d}日`;
}
export function timeTranform(date) {
  let y = date.getFullYear();
  let M =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let d = date.getDate() + 1 < 10 ? `0${date.getDate()}` : date.getDate();
  let H = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${y}-${M}-${d} ${H}:${m}:${s}`;
}
