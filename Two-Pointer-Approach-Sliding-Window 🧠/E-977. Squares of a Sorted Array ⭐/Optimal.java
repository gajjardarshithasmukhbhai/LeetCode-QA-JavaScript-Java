public class Optimal {
    
    // Approach: Two Pointers (Optimal) - O(n) time, O(n) space
    public int[] sortedSquares(int[] nums) {
        int[] result = new int[nums.length];
        
        int left = 0;
        int right = nums.length - 1;
        int index = nums.length - 1;  // Fill from the end (largest squares first)
        
        // INSIGHT: Compare absolute values from both ends
        // Larger absolute value will produce larger square
        while (left <= right) {
            
            if (Math.abs(nums[left]) < Math.abs(nums[right])) {
                // Right element has larger absolute value
                result[index] = nums[right] * nums[right];
                right--;
            } else {
                // Left element has larger or equal absolute value
                result[index] = nums[left] * nums[left];
                left++;
            }
            index--;
        }
        
        return result;
    }
    
    // Alternative approach: Brute Force - O(n log n) time, O(1) extra space
    public int[] sortedSquaresBruteForce(int[] nums) {
        // Square all elements first
        for (int i = 0; i < nums.length; i++) {
            nums[i] = nums[i] * nums[i];
        }
        
        // Sort the squared array
        java.util.Arrays.sort(nums);
        return nums;
    }
    
    // Test method
    public static void main(String[] args) {
        Optimal solution = new Optimal();
        
        // Test cases
        int[][] testCases = {
            {-4, -1, 0, 3, 10},
            {-7, -3, 2, 3, 11},
            {-5, -3, -2, -1},
            {1, 2, 3, 4, 5}
        };
        
        System.out.println("Testing Squares of Sorted Array:");
        for (int i = 0; i < testCases.length; i++) {
            System.out.println("\nTest Case " + (i + 1) + ": " + 
                             java.util.Arrays.toString(testCases[i]));
            
            // Test optimal approach
            int[] result1 = solution.sortedSquares(testCases[i].clone());
            System.out.println("Two Pointers: " + java.util.Arrays.toString(result1));
            
            // Test brute force approach
            int[] result2 = solution.sortedSquaresBruteForce(testCases[i].clone());
            System.out.println("Brute Force:  " + java.util.Arrays.toString(result2));
        }
    }
}
