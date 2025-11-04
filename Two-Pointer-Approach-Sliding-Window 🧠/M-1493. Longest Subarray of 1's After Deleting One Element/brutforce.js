/**
 * @param {number[]} nums
 * @return {number}
 */
let findMax = (skippingIndex, nums) => {
    let maxLen = 0;
    let count = 0;
    for(let i=0;i<nums.length;i++) {
        if(i === skippingIndex) {
            continue;
        }
        if(nums[i] === 1) {
            ++count;
            maxLen = Math.max(maxLen, count);
        }
        else {
            count = 0;
        }
    }
    return maxLen;
}
var longestSubarray = (nums) => {
  let totalLen = nums.length;
  let maxLen = 0;
  let countZero = 0;

  for(let i=0;i<totalLen;i++) {
    if(nums[i] === 0) {
        countZero++;
        maxLen = Math.max(maxLen, findMax(i,nums));
    }
  }  
  if(countZero === 0) {
    return totalLen-1;
  }
  return maxLen;
};