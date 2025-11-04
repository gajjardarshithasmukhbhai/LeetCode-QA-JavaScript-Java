/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let left = 0;
    let right = k-1;
    let maxAverage = 0;

    for(let i=0;i<k;i++) {
        sum +=nums[i];
    }
    maxAverage = sum / k;

    while(right < nums.length-1) {
        sum = sum - nums[left];
        left++;
        right++;
        sum = sum + nums[right];
        maxAverage = Math.max(maxAverage, sum / k);
    }
    return maxAverage;
};