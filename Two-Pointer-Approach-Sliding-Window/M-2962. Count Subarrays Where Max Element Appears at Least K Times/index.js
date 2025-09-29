const countSubarrays = (nums, k) => {
    let maxValue = Math.max(...nums);

    let freqCount = new Map();

    let left = 0;
    let count = 0;
    for(let right = 0;right<nums.length;right++) {

        freqCount.set(nums[right], (freqCount.get(nums[right]) || 0) + 1);

        while((freqCount.get(maxValue || 0)>=k)) {
            freqCount.set(nums[left], freqCount.get(nums[left])-1);
            left++;
        }
        count +=left;
    }
    return count;
};