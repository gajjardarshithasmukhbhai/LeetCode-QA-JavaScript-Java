/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    let totalSum = 0;
    let leftTotal = 0;
    for(let i=0;i<nums.length;i++) {
        totalSum = totalSum + nums[i];
    }

    for(let i=0; i<nums.length;i++) {
        let rightTotal = totalSum - leftTotal - nums[i];

        if(leftTotal === rightTotal) {
            return i;
        }
        leftTotal = leftTotal + nums[i];
    }
    return -1;
};