class Solution {
    public int compareVersion(String version1, String version2) {
        String[] value1 = version1.split("\\.");
        String[] value2 = version2.split("\\.");

        int maxLength = Math.max(value1.length, value2.length);

        for(int i=0;i<maxLength;i++) {
            int num1 = (i<value1.length) ? Integer.parseInt(value1[i]): 0;
            int num2 = (i<value2.length) ? Integer.parseInt(value2[i]): 0;

            if(num1>num2) {
                return 1;
            }
            if(num1<num2) {
                return -1;
            }
        }
        return 0;
    }
}