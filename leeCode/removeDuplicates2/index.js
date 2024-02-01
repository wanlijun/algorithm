// [1,1,2]
// [0,0,1,1,1,1,1,2,2,3,3,4]
// [0,1,2]
// 
var removeDuplicates = function (nums) {
  let i = 2;
  for (let j = 2; j < nums.length; j++) {
    if (nums[i - 2] !== nums[j]) {
      nums[i] = nums[j]
      i++;
    }
  }
  return nums.length < 3 ? nums.length : i;
};