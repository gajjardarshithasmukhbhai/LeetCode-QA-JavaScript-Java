const prefixesDivBy5 = (nums) => {
    let result = [];

    let str = "";
    for(let i=0;i<nums.length;i++) {
        str = ((str << 1) | nums[i]) % 5;  
        result.push(str === 0);
    }

    return result;
};
console.log(prefixesDivBy5([0,1,1]));