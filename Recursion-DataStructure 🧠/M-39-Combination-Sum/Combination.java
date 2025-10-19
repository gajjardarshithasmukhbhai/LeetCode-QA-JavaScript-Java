package Recursion-DataStructure 🧠.M-39-Combination-Sum;

import java.util.*;

public class Combination {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        helper(candidates, target, 0, new ArrayList<>(), result);

        return result;
    }

    public static void helper(int[] candidates, int target, int index, List<Integer> current, List<List<Integer>> result) {
        if(target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        if(target < 0 || index == candidates.length) {
            return;
        }
        current.add(candidates[index]);
        helper(candidates, target-candidates[index], index, current, result);
        current.remove(current.size()-1);
    }

    public static void main(String[] args) {
        int[] candidate = {2,3,6,7};
        int target = 7;
        System.out.println(combinationSum(candidate, target));
    }
}
