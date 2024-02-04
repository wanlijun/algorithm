/**
 * 分割，向上合并排序O(nlogn)
 归并排序算法会把序列分成长度相同的两个子序列，当无法继续往下分时，就对子序列进行归并。归并指的是把两个排好序的子序列合并成一个有序序列。重复执行该操作直到获得一个完整的序列。
 归并时先比较首位数字，再移动较小的数字 ， 重复此操作，直到所有子序列都归并为一个整体为止  
 *  */
// //https://www.geeksforgeeks.org/problems/merge-sort/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article
const test = [10, 30, 50, 35, 1, 40, 12, 60, 100];
// 0,1,2,3
class Solution {
  merge(arr, low, middle, high) {
    const arr1 = arr.slice(low, middle + 1);
    const arr2 = arr.slice(middle + 1, high + 1);
    const len1 = arr1.length;
    const len2 = arr2.length;
    let i = low;
    let k = 0;
    let v = 0;
    while (k < len1 && v < len2) {
      if (arr1[k] < arr2[v]) {
        arr[i] = arr1[k]
        i++;
        k++;
      } else {
        arr[i] = arr2[v]
        i++;
        v++;
      }
    }
    while (k < len1) {
      arr[i] = arr1[k]
      i++;
      k++;
    }
    while (v < len2) {
      arr[i] = arr2[v]
      i++;
      v++;
    }
  }
  mergeSort(arr, low, high) {
    if (low >= high) {
      return;
    }
    const middle = parseInt((low + high) / 2)
    this.mergeSort(arr, low, middle)
    this.mergeSort(arr, middle, high)
    this.merge(arr, low, middle, high);
  }
}
const solution = new Solution();
solution.mergeSort(test, 0, test.length - 1)
console.log(test)
