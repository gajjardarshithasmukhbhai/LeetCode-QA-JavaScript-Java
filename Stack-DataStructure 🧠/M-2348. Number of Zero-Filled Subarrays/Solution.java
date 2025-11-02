package Stack_DataStructure_🧠.M_2348_Number_of_Zero_Filled_Subarrays;

public class Solution {
    public long zeroFilledSubarray(int[] nums) {
        long count = 0;
        long result = 0;

        for (int num : nums) {
            if (num == 0) {
                count++;
            } else {
                result += (count * (count + 1)) / 2;
                count = 0;
            }
        }

        result += (count * (count + 1)) / 2;
        return result;
    }
}