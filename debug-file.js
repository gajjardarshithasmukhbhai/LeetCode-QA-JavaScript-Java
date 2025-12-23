const subarraySum = (nums, k) => {
    let numsPrefix = [];
    let subArrayCount = 0;

    numsPrefix.push(nums[0]);
    for(let i=1;i<nums.length;i++) {
        numsPrefix[i] = (numsPrefix[i-1])+nums[i];
    }
    numsPrefix.unshift(0);

    let left = 0;
    let right = 0;
    let total = 0;
    for(let i=right;i<numsPrefix.length;i++) {
        if(total>k) {
            left++;
            total -= nums[left];
        }
        if(total === k) {
            ++subArrayCount;
        }
        total += nums[i];
    }
    return subArrayCount;
}
console.log(subarraySum([1,2,3], 3));