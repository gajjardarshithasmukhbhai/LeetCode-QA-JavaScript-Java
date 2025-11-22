const canAliceWin = (nums) => {
    let singleDigitSum = 0;
    let doubleDigitSum = 0;
    const helper = (index) => {
        if(nums[index].toString().length === 1) {
            singleDigitSum += nums[index];
        }
        if(nums[index].toString().length === 2) {
            doubleDigitSum +=nums[index];
        }
        if(index === nums.length && singleDigitSum!==doubleDigitSum) {
            return true;
        }
        if(index === nums.length && singleDigitSum === doubleDigitSum) {
            return false;
        }
        return helper(index+1);
    }
    return helper(0);
};

console.log(canAliceWin());