// BrutForce ==> O(nlogn) will taken
// value all ready sorted still, we're doing this brutforce approach and get this one

const sortedSquares = (nums) => {
    
    for(let i=0;i<nums.length;i++) {
        nums[i] = Math.pow(nums[i],2);
    }

    return nums.sort((a,b) => a-b);
};