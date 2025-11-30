const subarraysDivByK = (nums, k) => {
    let map = new Map();
    let result = 0;
    let sum = 0;

    map.set(0, 1);

    for(let i=0;i<nums.length;i++) {
        sum += nums[i];
        result += map.get(sum%k) || 0;
        map.set(sum%k, (map.get(nums%k) || 0)+1);
    }
    return result;
};