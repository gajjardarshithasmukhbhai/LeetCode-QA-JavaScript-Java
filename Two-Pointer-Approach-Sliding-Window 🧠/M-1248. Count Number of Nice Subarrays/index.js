// Formula we used:

// nums = [1, 0, 1, 0, 1], goal = 2
// We want the number of subarrays with sum = 2.

// atMost(nums, 2) returns 10 subarrays (with sum ≤ 2)

// atMost(nums, 1) returns 6 subarrays (with sum ≤ 1)

const numberOfSubarrays = (nums, k) => {
    return makeDiff(nums, k) - makeDiff(nums, k-1);
}

const makeDiff = (nums, k) => {
    let left = 0;
    let right = 0;

    let sum = 0;
    let result = 0;

    if(k<0) {
        return 0;
    }
    while(right<nums.length) {
        sum = sum + nums[right]%2;
        while(sum>k) {
            sum -=nums[left]%2;
            left++;
        }
        result = result + (right-left+1);
        ++right;
    }
    return result;
}