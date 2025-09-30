import java.util.Stack;

public class Solution {
   public String removeDuplicates(String s) {
        Stack<Character> stack = new Stack<>();
        int left = 0;
        while (left < s.length()) {
            char value = s.charAt(left);

            if (!stack.isEmpty() && stack.peek() == s.charAt(left)) {
                stack.pop();
            }
            else {
                stack.push(value);
            }
            left++;
        }
        // Build result from stack
        StringBuilder sb = new StringBuilder();
        for (char c : stack) {
            sb.append(c);
        }
        return sb.toString();
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.removeDuplicates("abbaca")); // Output: "ca"
    }
}