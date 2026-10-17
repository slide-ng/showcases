export function counter() {
  let n = 0;
  return function next() {
    n = n + 1;
    return n;
  };
}
