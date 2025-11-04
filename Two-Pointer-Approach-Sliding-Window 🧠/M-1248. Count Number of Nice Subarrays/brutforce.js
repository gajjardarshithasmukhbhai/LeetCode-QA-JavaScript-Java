/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let resultCount = 0;
    for(let i=0;i<nums.length;i++) {
        let oddCount = 0;
        for(let j=i;j<nums.length;j++) {
            if(nums[j]%2!==0) {
                oddCount++;
            }
            if(oddCount === k) {
                resultCount++;
            }
            if(oddCount>k) {
                break;
            }
        }
    }
    return resultCount;
};