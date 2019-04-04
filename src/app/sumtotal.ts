import { ENTRIES } from './mock-entries';

export function sumTotal() {
  var sum = ENTRIES.reduce((acc, cur) => acc + cur.price, 0);
  return sum;
}
