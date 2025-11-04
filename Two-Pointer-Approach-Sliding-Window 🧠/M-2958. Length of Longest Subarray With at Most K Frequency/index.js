const maxSubarrayLength = (nums, k) => {
    
    let frequencyCount = new Map();

    let left = 0;

    let count = 0;

    let sum = 0;

    for(let right=0;right<nums.length;right++) {
        
        frequencyCount.set(nums[right], (frequencyCount.get(nums[right]) || 0)+1);

        while(frequencyCount.get(nums[right]) > k) {
            
            frequencyCount.set(nums[left], frequencyCount.get(nums[left])-1);

            left++;
        }
        count = Math.max(count, right-left+1);
    }

    return count;
};