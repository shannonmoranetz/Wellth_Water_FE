export function sumTotal(entries) {
  let sum = entries.reduce((acc, cur) => acc + cur.amount, 0);
  return sum;
}
