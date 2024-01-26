/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = nums.length - 1;
  let j = 0;
  while (j <= i) {
    while (nums[i] === val) {
      i--
    }
    if (j < i && nums[j] === val) {
      [nums[j], nums[i]] = [nums[i], nums[j]]
      i--;
    }
    j++;
  }
  return i + 1
};