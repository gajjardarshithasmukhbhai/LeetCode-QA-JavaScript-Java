import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

public class Debug {
    public static void main(String[] args) {
        // int[] left = {1,2,4,5};
        // int[] right = {3,4,7};
        // int[] totalSize = new int[left.length + right.length];
        // System.out.println(Arrays.toString(totalSize));

        List<String> list = new ArrayList<>();
        list.add("Darshit");
        list.add("Gajjar");
        list.add("Hasmukhbhai");
        list.remove(list.size()-1);
        list.remove(list.size()-1);
        list.remove(list.size()-1);
        System.out.println(list);        

        Map<Integer, String> mapList = new HashMap<>();
        mapList.put(1, "Darshit");
        mapList.put(2, "Gajjar");
        mapList.put(3, "Hasmukhbhai");

        System.out.println(mapList);

        Stack<String> value = new Stack<>();
        value.push("Darshit");
        value.push("Gajjar");
        System.out.println(value);
    }
}
