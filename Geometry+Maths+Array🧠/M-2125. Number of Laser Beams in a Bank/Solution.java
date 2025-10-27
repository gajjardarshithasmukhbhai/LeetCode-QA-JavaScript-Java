class Solution {
    public int numberOfBeams(String[] bank) {
        int result = 0;
        int prevCount = 0;

        for(int i=0;i<bank.length; i++) {
            int currentCount = 0;
            for(char c: bank[i].toCharArray()) {
                if(c == '1') {
                    currentCount++;
                }
            }

            if(currentCount > 0) {
                result += currentCount*prevCount;
                prevCount = currentCount;
            }
        }
        return result;
    }
}