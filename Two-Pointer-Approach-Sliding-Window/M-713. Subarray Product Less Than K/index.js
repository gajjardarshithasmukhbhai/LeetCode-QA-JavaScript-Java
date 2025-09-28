const numSubarrayProductLessThanK = (nums, k) => {
    let count = 0;

    let left = 0;
    
    let result = 1;

    if(k<=1) {
        return 0;
    }
    for(let right=0; right<nums.length; right++) {        
        result *= nums[right];
        
        while(result>=k) {
            result /= nums[left];
            left++;
        }
        count += right-left+1;
    }

    return count;
};

console.log(numSubarrayProductLessThanK([1,2,3],0));