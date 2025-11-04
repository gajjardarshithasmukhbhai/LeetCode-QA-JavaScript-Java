const maximumSubarraySum = (nums, k) => {
    
    let map = new Map();

    let result = 0;

    let sum = 0;

    let left = 0;
    for(let right=0; right<nums.length; right++) {
        sum += nums[right];

        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        
        if(right-left+1 > k) {
            
            map.set(nums[left], (map.get(nums[left]))-1);
            
            if(map.get(nums[left]) === 0) {
                map.delete(nums[left]);
            }

            sum -=nums[left];
            left++;
        }

        if(right-left+1 === k && map.size === k) {
            result = Math.max(result, sum);
        }
        
    }
    return result;
};