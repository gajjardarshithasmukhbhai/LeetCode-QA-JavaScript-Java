var numSubseq = (nums, target) => {
    let count = 0;
    nums.sort((a,b) => a-b);
    const modulo = 1e9 + 7;

    let left = 0;
    let right = nums.length-1;
    let powerCal = Array(nums.length).fill(1);
    
    // precompute the power
    for(let i=1;i<nums.length;i++) {
        powerCal[i] = (powerCal[i-1]*2) % modulo; 
    }
    // Two pointer approach
    while(left<=right) {

        if(nums[left] + nums[right]<=target) {
            count = (count + (powerCal[right-left]))%modulo;
            left++;
        }
        else{
            right--;
        }
    }
    return count;
}
console.log(numSubseq([14,4,6,6,20,8,5,6,8,12,6,10,14,9,17,16,9,7,14,11,14,15,13,11,10,18,13,17,17,14,17,7,9,5,10,13,8,5,18,20,7,5,5,15,19,14],22)); // 272187084