public class Solution {
    public int compress(char[] chars) {
        int index = 0;
        int i = 0;
        int j = 0;
        
        while (index < chars.length) {
            char currentChar = chars[index];
            int currentCharCount = 1;
            
            while (i < chars.length - 1 && chars[i] == chars[i + 1]) {
                currentCharCount++;
                i++;
            }
            
            chars[j++] = currentChar;
            if (currentCharCount > 1) {
                String countStr = String.valueOf(currentCharCount);
                for (char c : countStr.toCharArray()) {
                    chars[j++] = c;
                }
            }
            
            i++;
            index = i;
        }
        
        return j;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        char[] test = {'a','a','b','b','c','c','c'};
        System.out.println(solution.compress(test)); // Expected: 6 (a2b2c3)
    }
}
