/**
 * 算法：从右侧未排序的区域取出一个数据和左边的数据进行比较，如果小于则进行交换，重复该操作直到左边已归位的数字比取出的数字小，或者该该数字已被移道最左边 O(n2)
 */
const test = [10, 30, 50, 35, 1, 40, 12, 60, 100];
function insertSort(data) {
  let start = 1
  if (data.length < 2) {
    return data;
  }
  while(start < data.length) {
    let loopIdx = start;
   
    while( loopIdx >= 1 &&  data[loopIdx] < data[loopIdx - 1]) {
      const temp = data[loopIdx];
      data[loopIdx] = data[loopIdx - 1];
      data[loopIdx - 1] = temp;
      loopIdx--;
    }
    start ++;
  }
  return data;
}
console.log(insertSort(test));