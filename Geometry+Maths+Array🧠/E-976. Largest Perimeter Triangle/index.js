/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = (nums) => {
    nums.sort((a,b) => a-b);

    let maxResult = 0;

    for(let i=0;i<nums.length-2; i++) {
        if(nums[i]+nums[i+1]>nums[i+2]) {
            maxResult = Math.max(maxResult, nums[i]+nums[i+1]+nums[i+2]);
        }
    }
    return maxResult;
};

// Further Optimize this code for better TC

/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = (nums) => {
    nums.sort((a,b) => b-a);

    for(let i=0;i<nums.length-2; i++) {
        if(nums[i+1]+nums[i+2]>nums[i]) {
            return nums[i]+nums[i+1]+nums[i+2];
        }
    }
    return 0;
};