// [1,1,2]
// [0,0,1,1,1,2,2,3,3,4]
// [0,1,2]
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  return i;
};