const increasingTriplet = (nums) => {
    let isTripletValid = false;

    let num1 = Infinity;
    let num2 = Infinity;

    for(let i=0;i<nums.length;i++) {
        if(num1>= nums[i]) {
            num1 = nums[i];
            num2 = Infinity
        }
        else if(num2 >= nums[i]) {
            num2 = nums[i];
        }
        else {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([20,100,10,12,5,13]));