const findNumbers = (nums) => {
    let countValue = 0;
    const helper = (count) => {
        if(count === nums.length) {
            return;
        }
        console.log('nums[count]%2: ', nums[count]);
        if(nums[count].toString().length%2 === 0) {
            ++countValue;
        }
        return helper(count+1);
    }
    helper(0);
    return countValue;
};

console.log(findNumbers([12,345,2,6,7896]));