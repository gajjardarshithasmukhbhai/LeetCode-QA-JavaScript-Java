let nums = [21,4,7];

let sumFourDivisors = (nums) =>{
    let result = 0;
    for(let i=0;i<nums.length;i++) {
        let count = 0;
        let tempResult = 0;
        for(let factor = 1;factor<=Math.floor(Math.sqrt(nums[i])); factor++) {
            if(nums[i]%factor === 0) {
                
                let others = nums[i]/factor;

                if(nums[i]/factor === factor) {
                    count+=1;
                    tempResult +=factor;
                }
                else {
                    count+=2;
                    tempResult +=factor+others;
                }
            }
        }
        if(count === 4) {
            result +=tempResult;
        }
    }
    return result;
};

console.log(sumFourDivisors([1,2,3,4,5]));