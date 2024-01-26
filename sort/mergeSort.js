/**
 * 分割，向上合并排序O(nlogn)
 归并排序算法会把序列分成长度相同的两个子序列，当无法继续往下分时，就对子序列进行归并。归并指的是把两个排好序的子序列合并成一个有序序列。重复执行该操作直到获得一个完整的序列。
 归并时先比较首位数字，再移动较小的数字 ， 重复此操作，直到所有子序列都归并为一个整体为止  
 *  */ 
// //https://www.geeksforgeeks.org/problems/merge-sort/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article
const test = [10, 30, 50, 35, 1, 40, 12, 60, 100];
// 0,1,2,3
class Solution {
  merge(arr, l, m, r) {
    const leftArray = arr.slice(l, m + 1);
    const rightArray = arr.slice(m + 1, r+1);
    let i = 0;
    let j = 0;
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        arr[l] = leftArray[i]
        l++;
        i++
      } else {
        arr[l] = rightArray[j]
        l++;
        j++
      }
    }
    while (i < leftArray.length) {
      arr[l] = leftArray[i]
      l++;
      i++
    }
    while (j < rightArray.length) {
      arr[l] = rightArray[j]
      l++;
      j++
    }
  }
  // l:0 r: 3 m:1
  mergeSort(arr, l, r) {
    if (l >= r) {
      return;
    }
    const m = parseInt((r + l) / 2);
    this.mergeSort(arr, l, m);
    this.mergeSort(arr, m + 1, r);
    this.merge(arr, l, m, r);
  }
}
const solution = new Solution();
solution.mergeSort(test, 0, test.length - 1)
console.log(test)
/**
 * first round
 * middleIndex: 9/2 5
 * left: 10, 30, 50, 35, 1
 * right: 40, 12, 60, 100
 * 
 * second round
 * middleIndex: 5/2 3
 * left:  10, 30, 50
 * right 35, 1
 * 
 * third round 
 * middleIndex: 3/2 2
 * left: 10, 30
 * right: 50
 * 
 * forth round 
 * middleIndex: 1
 * left: 10,
 * right: 30
 */