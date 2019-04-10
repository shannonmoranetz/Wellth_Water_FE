export function sumTotal(entries) {
  let sum = entries.reduce((acc, entry) => acc + entry.amount, 0);
  return sum;
}
