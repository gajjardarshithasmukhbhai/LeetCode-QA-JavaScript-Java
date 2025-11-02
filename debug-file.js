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

    // if it ends with zero
    return result;
}
console.log(zeroFilledSubarray([0,0,0,2,0,0]));