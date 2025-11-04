/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallestSubarrays = (nums) => {
    const setBitIndex = new Array(32).fill(-1);
    const n = nums.length;
    const result = new Array(n).fill(0);
    
    for(let i = n-1;i>=0;i--) {

        let endIndex = i;
        // Time Complexity is O(1) ==> This is Fixed One
        for(let j=0;j<32;j++) {
            if((nums[i] & (1<<j)) === 0) {
                if(setBitIndex[j]!==-1) {
                    endIndex = Math.max(endIndex, setBitIndex[j]);
                }
            } 
            else {
                setBitIndex[j] = i;
            }
        }
        result[i] = endIndex - i + 1;
    }
    return result;
};