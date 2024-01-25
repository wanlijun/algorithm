/**
 * 算法：从右侧未排序的区域取出一个数据和左边的数据进行比较，如果小于则进行交换，重复该操作直到左边已归位的数字比取出的数字小，或者该该数字已被移道最左边 O(n2)
 */
const test = [10, 30, 50, 35, 1, 40, 12, 60, 100];

const swap = (list, i, j) => {
  if (i === j) {
    return;
  }
  const value = list[i];
  list[i] = list[j];
  list[j] = value;
}

function insertionSort(list) {
  for(let i = 1; i < list.length; i++) {
    for(let j = i; j > 0; j -- ) {
      if (list[j] < list[j - 1]) {
        swap(list, j, j - 1)
      } else {
        break;
      }
    }
  }
  return list;
}
console.log(insertionSort(test));