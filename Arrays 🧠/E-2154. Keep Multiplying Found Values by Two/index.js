var findFinalValue = (nums, original) => {
    const set = new Set(nums);

    for(let i=0;i<nums.length;i++) {
        if(set.has(original)) {
            original = original*2;
        }
    }
    return original;
};