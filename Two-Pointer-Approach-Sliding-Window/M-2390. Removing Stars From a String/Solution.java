import java.util.Arrays;
import java.util.List;

public class Solution {
    public String removeStars(String value) {
        char[] chars = value.toCharArray();

        int writer = 0;
        for(int i=0;i<value.length(); i++) {
            if(chars[i] == '*') {
                writer--;
            } else {
                chars[writer] = chars[i];
                writer++;
            }
        }
        return new String(chars, 0, writer);
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.removeStars("leet**cod*e"));
    }
}
