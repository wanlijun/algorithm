const test = [10, 30, 50, 35, 1, 40, 12, 60, 100];

const swap = (list, i, j) => {
  const value = list[i];
  list[i] = list[j];
  list[j] = value;
}
const bubbleSort = (list) => {
  for(let i = list.length ; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if (list[j] > list[j+1]) {
        swap(list, j, j+1)
      }
    }
  }
  return list;
}
console.log(bubbleSort(test))