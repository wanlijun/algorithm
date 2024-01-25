/**
 *  在序列中随机选择一个基准值,然后将剩下的数分为 “比基准值小的数”和“比基准值大的数”然后重复的对左右两边分别进行排序，进而完成整体排序 。
 */

// const test = [24, 18, 38, 43, 14, 40, 1,54];

// function swap(arr, i, j) {
//   let temp = arr[i]; // Store the value of arr[i] in a temporary variable
//   arr[i] = arr[j]; // Assign the value of arr[j] to arr[i]
//   arr[j] = temp; // Assign the temporary variable to arr[j]
// }
// function quickSort(arr, low = 0, high = arr.length - 1) {
//   if (high - low < 1) {
//     return;
//   }
//   const midIndex = Math.floor((high + low) / 2);
//   const target = arr[midIndex];
//   let l = low;
//   let r = high;
//   while (l < r) {
//     while (l < r && arr[r] > target) {
//       r--;
//     }
//     while (l < r && arr[l] < target) {
//       l++;
//     }
//     swap(arr, r, l)
//   }
//   quickSort(arr, low, l - 1);
//   quickSort(arr, l + 1, high);
// }
// quickSort(test)
// console.log(test);

//  last element as pivot
// function partition(arr, low, high) {
//   const pivot = arr[high];
//   let i = low - 1;
//   for(let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//   }
//   [arr[high], arr[i + 1]] = [arr[i + 1], arr[high]]
//   return i + 1;
// }
// function quickSort(arr, low, high) {
//   if (low < high) {
//     const pi = partition(arr, low, high)
//     quickSort(arr, low, pi -1)
//     quickSort(arr, pi+1, high)
//   }
// }
// first element as pivot
// function partition(arr, low, high) {
//   const pivot = arr[low];
//   let i = low;
//   for (let j = low + 1; j <= high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//   }
//   [arr[low], arr[i]] = [arr[i], arr[low]]
//   return i;
// }
// function quickSort(arr, low, high) {
//   if (low < high) {
//     const pi = partition(arr, low, high)
//     quickSort(arr, low, pi - 1)
//     quickSort(arr, pi + 1, high)
//   }
// }
const test = [4, 1, 3, 9, 7];
// middle element ad pivot
function partition(arr, low, hight) {
  const pivot = arr[low];
  let i = low;
  for(let j = low + 1; j <= hight; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[low],arr[i]] = [arr[i], arr[low]]
  return i
}
function partitionMiddle(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  [arr[low], arr[mid]] = [arr[mid], arr[low]]
  return partition(arr, low, high)
}
function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partitionMiddle(arr, low, high)
    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)
  }
}


quickSort(test, 0, test.length - 1)
