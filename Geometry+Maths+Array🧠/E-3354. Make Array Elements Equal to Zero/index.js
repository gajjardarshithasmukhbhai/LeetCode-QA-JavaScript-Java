// brutforce solution
const countValidSelections = (nums) => {
    let result = 0;

    for(let i=0;i<nums.length;i++) {
        if(nums[i]>0) continue;

        // this is for left and right direction
        for(let direction=0; direction<2; direction++) {
            let shadowNums = nums.slice();
            let index = i;
            let directionLeftOrRight = direction === 0 ? -1: 1;

            while (index >= 0 && index < shadowNums.length) {
                if(shadowNums[index] === 0) {
                    index +=directionLeftOrRight;
                }
                else if(shadowNums[index] > 0) {
                    shadowNums[index] = shadowNums[index]-1;
                    directionLeftOrRight *= -1;
                    index +=directionLeftOrRight;
                }
                else {
                    break;
                }
            }
            if(shadowNums.every(nums => nums === 0)) {
                result++;
            }
        }
    }
    return result;
};
console.log(countValidSelections([1,0,2,0,3]));