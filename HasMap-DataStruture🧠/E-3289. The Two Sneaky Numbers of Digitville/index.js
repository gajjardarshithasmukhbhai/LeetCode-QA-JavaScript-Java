/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSneakyNumbers = (nums) => {
    const freq = new Map();
    let result = [];
    for(let i=0;i<nums.length;i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0)+1);
        if(freq.get(nums[i]) === 2) {
            result.push(nums[i]);
        }
    }
    return result;
};