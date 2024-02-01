/**
 *  在序列中随机选择一个基准值,然后将剩下的数分为 “比基准值小的数”和“比基准值大的数”然后重复的对左右两边分别进行排序，进而完成整体排序 。
 */


// pick first element as pivot

const test = [10, 30, 50, 35, 1, 40, 12, 60, 100];
class Solution {
  partition(arr, low, high) {
    const pivot = arr[low];
    let i = low;
    for (let j = low + 1; j <= high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    [arr[low], arr[i]] = [arr[i], arr[low]]
    return i;
  }
  quickSort(arr, low, high) {
    if (low >= high) {
      return;
    }
    const pi = this.partition(arr, low, high)
    this.quickSort(arr, low, pi - 1)
    this.quickSort(arr, pi + 1, high)
  }
}
const solution = new Solution();
solution.quickSort(test, 0, test.length - 1)
console.log(test)

// https://www.geeksforgeeks.org/problems/quick-sort/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab

