const test = [10, 30, 50, 35, 1, 40, 12, 60, 100];
const swap = (list, i, j) => {
  if (i === j) {
    return;
  }
  const value = list[i];
  list[i] = list[j];
  list[j] = value;
}
const selectionSort = (list) => {
  for(let i= 0; i < list.length - 1; i++) {
    let minValue = list[i];
    let minIdx = i;
    for(let j = i+1; j < list.length; j++) {
      if (list[j] < minValue) {
        minValue = list[j];
        minIdx = j
      }
    }
    swap(list, i, minIdx)
  }
  return list;
}
console.log(selectionSort(test))
