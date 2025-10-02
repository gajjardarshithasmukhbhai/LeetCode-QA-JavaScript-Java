import java.util.Stack;

public class Solution {
    Stack<Character> stack = new Stack<>();

    public String removeStars(String s) {
        for(int i=0; i<s.length(); i++) {
            if(!stack.empty() && s.charAt(i) == '*') {
                stack.pop();
            }
            else {
                stack.push(s.charAt(i));
            }
        }

        StringBuilder str = new StringBuilder();

        for(var strValue: stack) {
            str.append(strValue);
        }
        return str.toString();
    }
   
    public static void main(String[] args) {
        Solution solution = new Solution();
        solution.removeStars("leet**cod*e");
   }
}
