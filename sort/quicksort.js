/**
 *  在序列中随机选择一个基准值,然后将剩下的数分为 “比基准值小的数”和“比基准值大的数”然后重复的对左右两边分别进行排序，进而完成整体排序 。
 */

const test = [10, 30, 50, 35, 20, 40, 12, 8, 100];

// 10 8 12
// start: 0 end 2 l:0 r:2
// target: 8
// round 1  12 > 8 r-- r:1
// round 2   8 = 8 r-- r：0
// 10 10 12
// 8 10 12

export function quickSort3(array, start = 0, end = array.length - 1) {
  if (end - start < 1) {
    return;
  }
  const midIndex = Math.floor((end + start) / 2);
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
  quickSort3(array, start, l - 1);
  quickSort3(array, l + 1, end);
  return array;
}
// console.log(quickSort3(test))
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


export function quickSort2(array, start, end) {
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


export const quicksort1 = (data) => {
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
// console.log(quicksort1(test))
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