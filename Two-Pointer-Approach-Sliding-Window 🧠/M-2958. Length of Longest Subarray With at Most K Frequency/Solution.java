import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        Map<Integer, Integer> frequencyCount = new HashMap<>();
        int left = 0;
        int count = 0;
        
        for (int right = 0; right < nums.length; right++) {
            frequencyCount.put(nums[right], frequencyCount.getOrDefault(nums[right], 0) + 1);

            while (frequencyCount.get(nums[right]) > k) {
                frequencyCount.put(nums[left], frequencyCount.get(nums[left]) - 1);
                left++;
            }
            count = Math.max(count, right - left + 1);
        }
        return count;
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();

        System.out.println(solution.maxSubarrayLength(new int[]{1, 2, 3, 1, 2, 3, 1, 2}, 2));
    }
}