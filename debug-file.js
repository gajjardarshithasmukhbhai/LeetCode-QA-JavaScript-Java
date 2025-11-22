const canAliceWin = (nums) => {
    let singleDigitSum = 0;
    let doubleDigitSum = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i].toString().length === 1) {
            singleDigitSum +=nums[i];
        }
        if(nums[i].toString().length === 2) {
            doubleDigitSum += nums[i];
        }   
    }
    return singleDigitSum!==doubleDigitSum;
};

console.log(canAliceWin([5,5,5,25]));