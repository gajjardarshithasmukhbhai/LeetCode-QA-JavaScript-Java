const numSubarrayProductLessThanK = (nums, k) => {
    let count = 0;

    // step: 1
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<k) {
            ++count;
        }
    }

    // step:2
    for(let left=0;left<nums.length;left++) {
        let result = nums[left];
        let right=left+1;
        while (result<k) {
            result*=nums[right];
        }
        count = right-left+1;
    }

    return count;
};

console.log(numSubarrayProductLessThanK([1,2,3],0));