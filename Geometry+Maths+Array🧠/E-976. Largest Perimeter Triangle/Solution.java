import java.lang.reflect.Array;
import java.util.*;

public class Solution {
    int largestPerimeter(int[] nums) {
        // Convert int[] to Integer[] because reverseOrder() does not work with primitive arrays
        Integer[] arr = Arrays.stream(nums).boxed().toArray(Integer[]::new);

        // Sort in descending order
        Arrays.sort(arr, Collections.reverseOrder());

        // Check for valid triangle
        for (int i = 0; i < arr.length - 2; i++) {
            if (arr[i + 1] + arr[i + 2] > arr[i]) {
                return arr[i] + arr[i + 1] + arr[i + 2];
            }
        }
        return 0;
    }
    public static void main(String[] args) {
        Solution paramsObj = new Solution();

        int[] value = paramsObj.largestPerimeter(new int[]{2,1,2});
    }
}


