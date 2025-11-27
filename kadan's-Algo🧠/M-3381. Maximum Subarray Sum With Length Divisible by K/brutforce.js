const maxSubarraySum = (nums, k) => {
    let result = -Infinity;

    let prefix_sum = Array(nums.length).fill(0);
    prefix_sum[0] = nums[0]; 
    
    // prefix sum 
    for(let i=1;i<nums.length;i++) {
        prefix_sum[i] = nums[i] + prefix_sum[i-1];
    }
    for(let i=0;i<nums.length;i++) {
        for(let j=i;j<nums.length;j++) {
            if((j-i+1)%k === 0) {
                result = Math.max(result, prefix_sum[j]-(i === 0 ? 0: prefix_sum[i-1]));
            }
        }
    }  
    return result;
};