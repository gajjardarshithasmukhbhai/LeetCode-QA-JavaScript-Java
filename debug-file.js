/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = (nums) => {
    nums.sort((a,b) => b-a);

    for(let i=0;i<nums.length; i++) {
        if(nums[i]+nums[i+1]>nums[i+2]) {
            return nums[i]+nums[i+1]+nums[i+2];
        }
    }
    return 0;
};

console.log(largestPerimeter([1,2,1,10]));