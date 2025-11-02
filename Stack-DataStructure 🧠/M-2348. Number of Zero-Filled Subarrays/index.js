const zeroFilledSubarray = (nums) => {

    let count = 0;
    let result = 0;

    for(let i=0;i<nums.length;i++) {
        if(nums[i] === 0) {
            count++;
        }
        else {
            result += ((count)*(count+1))/2;
            count = 0;
        }
    }

    result += ((count)*(count+1))/2;
    return result;
}