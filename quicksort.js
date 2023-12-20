/**
 *  在序列中随机选择一个基准值,然后将剩下的数分为 “比基准值小的数”和“比基准值大的数”然后重复的对左右两边分别进行排序，进而完成整体排序 。
 */

const test = [10, 30, 50, 35, 20, 40, 12, 8, 100];

// 10, 30, 50, 35, 20, 40, 12, 8, 100
// 10, 30, 50, 35, 8, 40, 12, 8, 100
// 10, 8, 50, 35, 8, 40, 12, 30, 100
// 10, 8, 50, 35, 12, 40, 12, 30, 100
// 10, 8, 12, 35, 12, 40, 50, 30, 100

function quickSort3(array, start, end) {
  if (end - start < 1) {
    return;
  }
  const midIndex = Math.floor(array.length / 2);
  const target = array[midIndex];
  let l = start;
  let r = end;
  while (l < r) {
    while (l < r && array[r] >= target) {
      r--;
    }
    array[midIndex] = array[r];
    while (l < r && array[l] < target) {
      l++;
    }
    array[r] = array[l];
    array[l] = array[midIndex];
  }
  array[l] = target;
  quickSort(array, start, l - 1);
  quickSort(array, l + 1, end);
  return array;
}
// quickSort3
// start 0 end 8
// target 20
// l:0 r:8
// 100 > 20 r-- r:7
// 8 < 20  ====> 10, 30, 50, 35, 8, 40, 12, 8, 100
// 10 < 20 l++  l:1
// 30 > 20 ====>  10, 30, 50, 35, 8, 40, 12, 30, 100
// 10, 8, 50, 35, 8, 40, 12, 30, 100
// 30 > 20 r-- r:6
// 12 < 20  r:6  =====> 10, 8, 50, 35, 12, 40, 12, 30, 100
// 8 < 20 l++ l: 2
// 50 > 20       =====>  10, 8, 50, 35, 12, 40, 50, 30, 100
// 10, 8, 12, 35, 12, 40, 50, 30, 100
//  50 >20 r-- r:5
// 40 > 20 r-- r:4
// 12 < 20 l++ l:3
// 35 > 20  10, 8, 12, 35, 35, 40, 50, 30, 100
// 10, 8, 12, 20, 35, 40, 50, 30, 100


function quickSort2(array, start, end) {
  if (end - start < 1) {
    return;
  }
  const target = array[start];
  let l = start;
  let r = end;
  while (l < r) {
    while (l < r && array[r] >= target) {
      r--;
    }
    array[l] = array[r];
    while (l < r && array[l] < target) {
      l++;
    }
    array[r] = array[l];
  }
  array[l] = target;
  quickSort(array, start, l - 1);
  quickSort(array, l + 1, end);
  return array;
}

/**
 * first round
 * start: 0
 * end: 8
 * target: 10
 * l:0 r:8
 * 100 > 10 r-- 7
 * 8 < 10 ====>   8, 30, 50, 35, 20, 40, 12, 8, 100
 * 8 < 10 l++ 1
 * 30 > 10 ====>  8, 30, 50, 35, 20, 40, 12, 30, 100
 * 8, 10, 50, 35, 20, 40, 12, 30, 100
 * quickSort 0 0
 * quickSort 1 8
 * rightValue: 30,50,35,40,60,100
 * 
 */


const quicksort1 = (data) => {
  if (data.length > 1) {
    const baseIndex = Math.floor(data.length / 2);
    const baseValue = data[baseIndex];
    const leftValue = [];
    const rightValue = [];
    for(let i = 0; i< test.length; i++) {
      if (i !== baseIndex) {
        if (data[i] <= baseValue) {
          leftValue.push(data[i])
        }
        if (data[i] > baseValue ) {
          rightValue.push(data[i])
        }
      }
    }
    return [ ...quicksort(leftValue), baseValue, ...quicksort(rightValue) ]
  } 
  return data;
}
console.log(quicksort1(test))
/**
 * first round
 * baseIndex: 9/2 4
 * baseValue: 20
 * leftValue: 10,12
 * rightValue: 30,50,35,40,60,100
 * 
 * second round
 * middleIndex: 2/2 1
 * baseValue: 12
 * leftValue 10
 * rightValue []
 * 
 * third round 
 * middleIndex: 6/2 3
 * baseValue: 40
 * leftValue 30 35
 * rightValue 50 60 100
 * 
 * forth round 
 * middleIndex: 1
 * left: 10,
 * right: 30
 */