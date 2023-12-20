/**
 * 分割，向上合并排序O(nlogn)
 归并排序算法会把序列分成长度相同的两个子序列，当无法继续往下分时，就对子序列进行归并。归并指的是把两个排好序的子序列合并成一个有序序列。重复执行该操作直到获得一个完整的序列。
 归并时先比较首位数字，再移动较小的数字 ， 重复此操作，直到所有子序列都归并为一个整体为止  
 *  */ 

const test = [10, 30, 50, 35, 1, 40, 12, 60, 100];

const sortAndMerge = (left, right) => {
  const result = []

  let leftValue = left.shift();
  let rightValue = right.shift();
  while(leftValue !== undefined || rightValue !== undefined) {
    // if the both sides have value
    if (leftValue !== undefined && rightValue !== undefined) {
      if (leftValue <= rightValue) {
        result.push(leftValue)
        leftValue = left.shift()
      }
      if (rightValue < leftValue) {
        result.push(rightValue)
        rightValue = right.shift()
      }
    } else {
      if (leftValue === undefined) {
        result.push(rightValue)
        rightValue = right.shift();
      } else {
        result.push(leftValue)
        leftValue = left.shift();
      }
    }
  }
  return result;
}
const mergeSort = (data) => {
  if (data.length > 1) {
    // split the array into two parts
    const middleIndex = Math.round(data.length / 2)
    const left = mergeSort(data.slice(0, middleIndex));
    const right = mergeSort(data.slice(middleIndex));
    return sortAndMerge(left, right)
  } else {
    return data;
  }
 
}
console.log(mergeSort(test))
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