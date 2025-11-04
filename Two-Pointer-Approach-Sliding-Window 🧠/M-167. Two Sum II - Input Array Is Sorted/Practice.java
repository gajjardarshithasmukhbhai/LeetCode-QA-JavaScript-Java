import java.util.ArrayList;

class Solution {
    public int[] twoSum(int[] numbers, int target) {  // Fixed: return int[] instead of ArrayList[]
        int i = 0;
        int j = numbers.length-1;

        while (i < j) {  // Fixed: condition should be i < j, not i < numbers.length && j > i
            if(numbers[i] + numbers[j] > target) {
                --j;
            }
            else if(numbers[i] + numbers[j] == target) {
                return new int[]{i+1, j+1};  // Fixed: return array directly when found
            }
            else {
                ++i;
            }
        }
        return new int[]{};  // Return empty array if no solution (shouldn't happen per problem constraints)
    }
}

public class Practice {
    public static void main(String[] args) {
        Solution test = new Solution();
        int[] result = test.twoSum(new int[] {2,7,11,15}, 9);  // Fixed: use int[] type
        System.out.println(java.util.Arrays.toString(result));  // Fixed: proper array printing
    }   
}