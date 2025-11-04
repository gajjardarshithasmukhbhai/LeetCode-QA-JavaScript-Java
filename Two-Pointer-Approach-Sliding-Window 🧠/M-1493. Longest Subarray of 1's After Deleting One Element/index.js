const longestSubarray = (nums) => {
  let totalLen = nums.length;
  let maxLen = 0;
  let countZero = 0;
  let left = 0;
  let right = 0;
  for(let right=0;right<totalLen;right++) {
    
    if(nums[right] === 0) {
        countZero++;
    }
    // Here we allowed only 1 Zero
    while(countZero > 1) {
        if(nums[left] ===0) countZero--;
        left++;
    }
    maxLen = Math.max(maxLen, right-left);
  }
  return countZero === 0 ? nums.length-1:maxLen;
}