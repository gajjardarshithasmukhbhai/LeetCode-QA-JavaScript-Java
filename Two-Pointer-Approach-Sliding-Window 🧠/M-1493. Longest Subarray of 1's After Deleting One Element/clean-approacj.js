const longestSubarray = (nums) => {
    let last_zero_index = -1;
    let right = 0;
    let left  = 0;
    let maxLen = 0;

    while (right<nums.length) {
        if(nums[right] === 0) {
            left = last_zero_index+1;
            last_zero_index = right;
        }
        maxLen = Math.max(maxLen,right-left);
        right++;
    }
    return maxLen;
}