const maxSubArray = (nums) => {
    
    let currentNum = nums[0];
    let sum = nums[0];

    for(let i=1; i<nums.length;i++) {
        currentNum = Math.max(nums[i], nums[i] + currentNum);
        sum = Math.max(sum, currentNum);
    }
    return sum;
}