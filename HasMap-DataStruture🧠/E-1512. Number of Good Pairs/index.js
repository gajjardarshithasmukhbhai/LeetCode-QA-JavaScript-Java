const numIdenticalPairs = (nums) => {
    const countFreq = new Map();
    
    let result = 0;
    for(let i=0;i<nums.length;i++) {
        countFreq.set(nums[i], (countFreq.get(nums[i]) || 0)+1);
    }

    for(let [key, value] of countFreq) {
        result += ((value)*(value-1))/2
    }

    return result;
};