let checkSubarraySum = (nums, k) => {
    let result = false;

    let mapValue = new Map();

    let sum = 0;
    mapValue.set(0,-1);
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];

        let reminder = sum%k;

        let conSubararyDif = mapValue.get(reminder);

        if(mapValue.has(reminder) && (i-conSubararyDif)>=2) {
            return true;
        }
        if(!mapValue.has(reminder)) {
            mapValue.set(reminder, i);
        }
    }
    return result;
};

console.log(checkSubarraySum([5,0,0,0],3));