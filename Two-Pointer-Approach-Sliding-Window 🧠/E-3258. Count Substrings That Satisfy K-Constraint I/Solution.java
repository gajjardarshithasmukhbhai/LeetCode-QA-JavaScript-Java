import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int countKConstraintSubstrings(String s, int k) {
        Map<Character, Integer> map = new HashMap<>();
        int count = 0;
        int left = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            map.put(ch, map.getOrDefault(ch, 0) + 1);

            while (map.getOrDefault('0', 0) > k && map.getOrDefault('1', 0) > k) {
                if (map.getOrDefault('0', 0) > k || map.getOrDefault('1', 0) > k) {
                    char leftChar = s.charAt(left);
                    map.put(leftChar, map.get(leftChar) - 1);
                    left++;
                }
            }
            count += right - left + 1;
        }
        return count;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.countKConstraintSubstrings("10101", 1));
    }
}
