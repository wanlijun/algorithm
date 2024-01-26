/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1;
  let k = m - 1;
  let v = n - 1;
  while (k >= 0 || v >= 0) {
    if (v < 0) {
      break;
    }
    if (k >= 0 && nums1[k] > nums2[v]) {
      nums1[i] = nums1[k];
      nums1[k] = 0
      k--
    } else {
      nums1[i] = nums2[v];
      v--
    }
    i--
  }
};