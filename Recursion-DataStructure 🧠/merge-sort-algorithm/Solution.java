public class Solution {

    // Main function to sort an array
    public int[] mergeSort(int[] arr) {

        // If array has 0 or 1 elements, just return it
        if (arr.length <= 1) {
            return arr;
        }

        // Find the middle index
        int mid = arr.length / 2;

        // Create two halves
        int[] left = new int[mid];
        int[] right = new int[arr.length - mid];

        // Copy elements into left and right arrays
        for (int i = 0; i < mid; i++) {
            left[i] = arr[i];
        }
        for (int i = mid; i < arr.length; i++) {
            right[i - mid] = arr[i];
        }

        // Sort both halves again (recursion)
        left = mergeSort(left);
        right = mergeSort(right);

        // Merge both sorted halves
        return merge(left, right);
    }

    // Function to merge two sorted arrays
    private int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0; // pointer for left
        int j = 0; // pointer for right
        int k = 0; // pointer for result

        // Compare and merge values in order
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result[k] = left[i];
                i++;
            } else {
                result[k] = right[j];
                j++;
            }
            k++;
        }

        // Copy leftover elements from left side
        while (i < left.length) {
            result[k] = left[i];
            i++;
            k++;
        }

        // Copy leftover elements from right side
        while (j < right.length) {
            result[k] = right[j];
            j++;
            k++;
        }

        return result;
    }

    // Program entry point
    public static void main(String[] args) {
        Solution obj = new Solution();

        int[] arr = {36, 22, 78, 9, 12, 0, 2};

        int[] sorted = obj.mergeSort(arr);

        // Print sorted array
        for (int num : sorted) {
            System.out.print(num + " ");
        }
    }
}
