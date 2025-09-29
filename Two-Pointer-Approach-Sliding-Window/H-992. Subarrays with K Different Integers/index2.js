/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = (nums, k) => {
    return diffInt(nums, k) - diffInt(nums, k-1);
};

const diffInt = (nums, k) => {
    let left = 0;
    let right = 0;
    let totalDiffInt = 0;
    let hasMap = new Map();

    while(right < nums.length) {
        hasMap.set(nums[right], (hasMap.get(nums[right]) || 0) + 1);
        while(hasMap.size > k) {
            hasMap.set(nums[left], hasMap.get(nums[left])-1);
            if(hasMap.get(nums[left]) === 0 ) {
                hasMap.delete(nums[left]);
            }
            left++;
        }
        totalDiffInt = totalDiffInt + right-left+1;
        ++right;
    }

    return totalDiffInt;
}