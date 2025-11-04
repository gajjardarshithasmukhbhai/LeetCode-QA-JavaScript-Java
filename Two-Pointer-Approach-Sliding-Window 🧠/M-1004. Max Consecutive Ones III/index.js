/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    let zero = 0;
    let maxLength = 0;

    while(right < nums.length) {

        if(nums[right] === 0 && zero <=k) {
            zero++;
        }
        while(zero > k) {
            if(nums[left] === 0 ) {
                zero--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right-left+1)
        right++;
    }
    return maxLength;
};