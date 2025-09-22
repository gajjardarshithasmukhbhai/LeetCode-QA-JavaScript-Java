import java.util.*;

class Solution {
    public int maxFrequencyElements(int[] nums) {
        Map<Integer, Integer> value = new HashMap<>();
        
        for (int numValue : nums) {
            value.put(numValue, value.getOrDefault(numValue, 0) + 1);
        }

        int maxFreqCount = Collections.max(value.values());

        int count = 0;
        for (int numValue : value.values()) {
            if (maxFreqCount == numValue) {
                count++;
            }
        }

        return count * maxFreqCount;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = {1, 2, 2, 3, 1, 4};
        System.out.println(sol.maxFrequencyElements(nums)); // Output: 4
    }
}
