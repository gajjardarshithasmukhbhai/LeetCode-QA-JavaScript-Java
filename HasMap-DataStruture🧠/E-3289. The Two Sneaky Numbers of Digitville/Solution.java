import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public int[] getSneakyNumbers(int[] nums) {
        Map<Integer, Integer> countFreq = new HashMap<>();
        List<Integer> listOfValues = new ArrayList<>();
        
        for(var value: nums) {
            countFreq.put(value, countFreq.getOrDefault(value, 0)+1);

            if(countFreq.get(value) == 2) {
                listOfValues.add(value);
            }
        }
        return listOfValues.stream().mapToInt(Integer::intValue).toArray();
    }
}

// import java.util.*;

// class Solution {
//     public static int[] getSneakyNumbers(int[] nums) {
//         Map<Integer, Integer> freq = new HashMap<>();
//         List<Integer> result = new ArrayList<>();

//         for (int num : nums) {
//             freq.put(num, freq.getOrDefault(num, 0) + 1);
//             if (freq.get(num) == 2) {
//                 result.add(num);
//             }
//         }

//         // Convert List<Integer> to int[]
//         int[] arr = new int[result.size()];
//         for (int i = 0; i < result.size(); i++) {
//             arr[i] = result.get(i);
//         }
//         return arr;
//     }
// }
