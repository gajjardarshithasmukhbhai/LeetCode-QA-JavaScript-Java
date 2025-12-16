
var NumArray = function(nums) {
    this.result = [];
    this.result[0] = nums[0]; 
    
    for(let i=1;i<nums.length;i++) {
        this.result[i] = nums[i]+this.result[i-1];
    }    
};

NumArray.prototype.sumRange = function(left, right) {
    if(left === 0) {
        return this.result[right];
    }else {
        return this.result[right] - this.result[left-1];
    }
};