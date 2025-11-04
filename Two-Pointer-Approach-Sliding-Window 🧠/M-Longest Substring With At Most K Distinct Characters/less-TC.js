const longestKDistictEle = (nums, k) => {

    let left = 0;
    let right = 0;
    let maxWindowLen = 0;
    let hasMap = new Map();

    while(right < nums.length) {
        hasMap.set(nums[right], (hasMap.get(nums[right]) || 0) + 1);

        if(hasMap.size > k) {
            hasMap.set(nums[right], hasMap.get(nums[right])-1);
            if(hasMap.get(nums[right])===0) {
                hasMap.delete(nums[right]);
            }
            left++;
        }
        maxWindowLen = Math.max(maxWindowLen, right-left+1);
        right++;
    }
    return maxWindowLen;
}

console.log(longestKDistictEle([1,2,1,2,3])); // Output: 4 (subarray: [1,2,1,2])
