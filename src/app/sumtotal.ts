import { ENTRIES } from './mock-entries';

export function sumTotal() {
  var sum = ENTRIES.reduce((acc, cur) => acc + cur.amount, 0);
  return sum;
}
