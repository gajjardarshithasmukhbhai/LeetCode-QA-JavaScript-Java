const zeroFilledSubarray = (nums) => {

    let stack = [];
    
    let count = 0;
    let result = 0;

    for(let i=0;i<nums.length;i++) {
        if(nums[i] === 0) {
            stack.push(0);
        }
        if(stack.length && stack[stack.length-1] === nums[i]) {
            ++count;
        }
        if(stack.length && stack[stack.length-1]!==nums[i]) {
            result += ((count)*(count+1))/2;
            count = 0;
            stack = [];
        }
    }
    return result;
}
console.log(zeroFilledSubarray([0,0,0,2,0,0]));