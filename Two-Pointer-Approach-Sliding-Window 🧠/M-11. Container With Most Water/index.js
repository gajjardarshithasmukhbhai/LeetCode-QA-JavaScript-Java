const maxArea = (height) => {
    let maxArea = 0;
    
    let left = 0;
    
    let right = height.length-1;
   
    while(left < right) {
        maxArea = Math.max(maxArea, Math.min(height[right], height[left])*(right-left));
        if(height[right]>height[left]) {
            left++;
        }        
        else {
            --right;
        }
    }
    return maxArea;
}
