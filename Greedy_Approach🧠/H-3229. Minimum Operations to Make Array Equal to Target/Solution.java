public class Solution {
    public long minimumOperations(int[] nums, int[] target) {
        int previous = 0;
        int length = nums.length;
        
        int current = 0;
        long resultCount = 0;
        
        for(int i=0;i<length;i++) {
            int difference = target[i] - nums[i]; 
            current = difference;

            if((current < 0 && previous > 0) || (current > 0 && previous < 0)) {
                resultCount +=Math.abs(current);
            }
            else if(Math.abs(current) > Math.abs(previous)) {
                resultCount += Math.abs(current - previous);
            }
            previous = current;
        }
        return resultCount;
    }
}
