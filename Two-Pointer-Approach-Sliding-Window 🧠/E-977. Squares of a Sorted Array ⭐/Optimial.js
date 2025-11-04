const sortedSquares = (nums) => {
    let filledArray = Array(nums.length).fill(0);

    let left = 0;
    let right = nums.length-1;
    let count = nums.length-1;

    while(left<=right) {
        
        if(Math.abs(nums[left]) < Math.abs(nums[right])) {
            filledArray[count] = Math.pow(nums[right],2)
            right--;
        }
        else {
            filledArray[count] = Math.pow(nums[left],2);
            left++;
        }
        --count;
    }
    return filledArray;
};