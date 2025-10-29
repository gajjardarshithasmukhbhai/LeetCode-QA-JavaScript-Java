var removeDuplicates = function(nums) {
    let left = 0;
    let right = 1;

    while(right < nums.length) {

        if(nums[left]!=nums[right]) {
            left++;
            nums[left] = nums[right];
        }
        else {
            right++;
        }
    }
    return left;
};

console.log(removeDuplicates([1,1,2]));