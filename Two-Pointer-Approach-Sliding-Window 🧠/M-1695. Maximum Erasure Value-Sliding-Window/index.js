/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = (nums) => {
    const list = new Map();
    let start = 0;
    let sum = 0;
    let maxSum = 0;

    for(let end = 0; end<nums.length;end++) {
        const num = nums[end];

        while(list.has(num)) {
            let toRemove = nums[start];
            list.delete(toRemove);
            sum -=toRemove;
            start++;
        }
        list.set(num, 1);
        sum +=num;
        maxSum = Math.max(maxSum, sum); 
    }
    return maxSum;
};