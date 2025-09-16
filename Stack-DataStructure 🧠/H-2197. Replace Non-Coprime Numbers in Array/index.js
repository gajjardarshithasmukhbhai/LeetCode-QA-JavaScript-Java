const greatestCommonDivisor = (a,b) => {
    let temp;
    while (b!=0) {
        temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}

const replaceNonCoprimes = (nums) => {
    const stack = [];
    const result = [];

    let value = nums[0]*nums[1];
    stack.push(value/greatestCommonDivisor(nums[0], nums[1]));
    result.push(value/greatestCommonDivisor(nums[0], nums[1]));

    for (let index = 2; index < nums.length; index++) {
        let current = nums[index];

        while (
            stack.length > 0
        ) {
            let top = stack[stack.length-1];
            let g = greatestCommonDivisor(top, current);
            
            if(g === 1) break; 

            stack.pop();
            
            current = (top * current) / g;
        }

        stack.push(current);
    }
    return stack;
};
