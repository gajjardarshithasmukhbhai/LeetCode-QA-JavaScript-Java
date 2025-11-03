const firstMissingPositive = (nums) => {
  let length = nums.length;
  
  // find 1 is present or not

  let isOnePresent = false;
  for(let i=0;i<nums.length;i++) {
    if(nums[i] === 1) isOnePresent = true;
  }

  if(!isOnePresent) {
    return 1;
  }
  else {
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<=0 || nums[i] > length) {
            nums[i] = 1;
        }
    }

    for(let i=0;i<nums.length;i++) {
        let index = Math.abs(nums[i])-1;
        if(nums[index] > 0) nums[index] *= -1;
    }

    for(let i=0;i<nums.length;i++) {
        if(nums[i]>0) {
            // index return
            return i+1;
        }
    }
    // all are positive number
    return length+1;
  }
};