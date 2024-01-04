import { quickSort3 } from './quicksort.js';
const test = quickSort3([10, 30, 50, 35, 1, 40, 12, 60, 100]);

console.log(test)

function halfSearch (data, value) {
  let startIdx = 0;
  let endIdx = data.length - 1
  let middle = Math.floor((startIdx + endIdx) / 2);
  while(value !== data[middle] && startIdx !== endIdx ) {
    if (value > data[middle]) {
      startIdx = middle + 1;
    }
    if (value < data[middle]) {
      endIdx = middle - 1;
    }
    middle = Math.floor((startIdx + endIdx) / 2)
    // console.log(startIdx, endIdx, middle)
  }
  return value === data[middle] ? middle : -1
}
console.log(halfSearch(test, 100));