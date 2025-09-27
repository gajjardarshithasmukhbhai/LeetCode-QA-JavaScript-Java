import java.util.HashSet;
import java.util.Set;

public class ReverseVowels {
    
    public String reverseVowels(String s) {
        Set<Character> vowels = new HashSet<>();
        vowels.add('a'); vowels.add('e'); vowels.add('i'); vowels.add('o'); vowels.add('u');
        vowels.add('A'); vowels.add('E'); vowels.add('I'); vowels.add('O'); vowels.add('U');
        
        char[] chars = s.toCharArray();
        int left = 0;
        int right = chars.length - 1;
        
        while (left < right) {
            if (!vowels.contains(chars[left])) {
                left++;
                continue;
            }
            if (!vowels.contains(chars[right])) {
                right--;
                continue;
            }
            
            // Swap vowels
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            
            left++;
            right--;
        }
        
        return new String(chars);
    }
    
    public static void main(String[] args) {
        ReverseVowels solution = new ReverseVowels();
        
        // Test cases
        System.out.println(solution.reverseVowels("hello")); // "holle"
        System.out.println(solution.reverseVowels("leetcode")); // "leotcede"
    }
}