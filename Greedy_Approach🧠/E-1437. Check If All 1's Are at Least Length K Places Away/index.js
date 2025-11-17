const kLengthApart = (nums, k) => {
    let string = nums.join('');

    let position = [];
    for(let i=0;i<nums.length;i++) {    
        if(nums[i] === 1) {
            let pos = string.indexOf(nums[i], i);
            position.push(pos);
        }
    }
    
    console.log('position: ', position);

    for(let j=1;j<position.length;j++) {
        if((position[j] - position[j-1]) <= k) {
            return false;
        }
    }
    return true;
};
