public class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        int count = 0;
        int left = 0;
        int result = 1;
        
        if (k <= 1) {
            return 0;
        }
        
        for (int right = 0; right < nums.length; right++) {
            result *= nums[right];
            
            while (result >= k) {
                result /= nums[left];
                left++;
            }
            count += right - left + 1;
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.numSubarrayProductLessThanK(new int[]{1, 2, 3}, 0));
    }
}
