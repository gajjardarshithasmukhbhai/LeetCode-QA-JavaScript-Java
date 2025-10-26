package Geometry+Maths+Array🧠.E-1716. Calculate Money in Leetcode Bank;

public class Solution {
     public int totalMoney(int n) {
        int result = 0;
        for(int i=0;i<n;i++) {
            result +=(i/7)+(i%7)+1;
        }   
        return result;
    }
}
