const minSubArrayLen = (target, nums) => {
    let left = 0;
    let right = 0;

    let sum = 0;
    let minWindow = Infinity;

    while(right < nums.length) {

        sum = sum + nums[right];
        
        while(sum >= target) {
            minWindow = Math.min(minWindow, right - left + 1);
            sum = sum - nums[left];
            left++;
        }
        right++;
    }

    return minWindow === Infinity ? 0: minWindow;
};
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));