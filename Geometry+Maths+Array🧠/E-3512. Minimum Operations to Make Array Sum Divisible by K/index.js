const minOperations = (nums, k) => {
    let sum = 0;
    for(let i=0;i<nums.length;i++) {
        sum +=nums[i];
    }
    let count = 0;

    while (true) {
        if(sum%k === 0) {
            return count;
        }
        sum -=1;
        ++count;
    }
    return count;
};