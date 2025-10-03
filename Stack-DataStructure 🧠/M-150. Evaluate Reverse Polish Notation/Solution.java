import java.util.Stack;
import java.util.Set;
import java.util.HashSet;

public class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        Set<String> operators = new HashSet<>(Set.of("+", "-", "*", "/"));
        
        for (String token : tokens) {
            if (operators.contains(token)) {
                int value1 = stack.pop();
                int value2 = stack.pop();
                
                switch (token) {
                    case "+":
                        stack.push(value2 + value1);
                        break;
                    case "*":
                        stack.push(value2 * value1);
                        break;
                    case "-":
                        stack.push(value2 - value1);
                        break;
                    case "/":
                        stack.push(value2 / value1);
                        break;
                }
            } else {
                stack.push(Integer.parseInt(token));
            }
        }
        
        return stack.pop();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] tokens = {"2","1","+","3","*"};
        System.out.println(solution.evalRPN(tokens)); // Expected: 9
    }
}
