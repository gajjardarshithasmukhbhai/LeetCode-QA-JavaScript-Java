// Approach 1: Two Pointers (Optimal) - O(n²) time, O(1) space
const triangleNumber = (nums) => {
    // INSIGHT 1: Sorting enables elimination strategy
    // Without sorting, we can't make assumptions about relationships
    nums.sort((a,b) => a-b);
    
    let n = nums.length;
    let count = 0;
    
    // INSIGHT 2: Edge case - need at least 3 elements for triangle
    if(n < 3) {  // Fixed: should be n < 3, not n <= 3
        return 0;
    }

    // INSIGHT 3: Fix the LARGEST side (k), use two pointers for smaller sides
    // Why largest? Because we only need to check a + b > c when c is largest
    for(let k = 2; k < n; k++) {
        let i = 0;      // Smallest possible side
        let j = k - 1;  // Second largest possible side
        
        // INSIGHT 4: Two pointers eliminate invalid combinations efficiently
        while(i < j) {
            if(nums[i] + nums[j] > nums[k]) {
                // INSIGHT 5: Key optimization - if nums[i] + nums[j] > nums[k],
                // then nums[i+1] + nums[j] > nums[k], nums[i+2] + nums[j] > nums[k], etc.
                // So ALL elements from i to j-1 can pair with nums[j] and nums[k]
                count += j - i;  // Add j-i triangles at once!
                j--;  // Try next smaller second side
            }
            else {
                // nums[i] + nums[j] <= nums[k], need larger first side
                i++;  // Move to larger first side
            }
        }
    }
    return count;
};

// Approach 2: Brute Force - O(n³) time, O(1) space
const triangleNumberBruteForce = (nums) => {
    const n = nums.length;
    let count = 0;
    
    // INSIGHT: This approach doesn't utilize any mathematical properties
    // It checks every possible combination without elimination
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const a = nums[i], b = nums[j], c = nums[k];
                // Must check all three triangle inequalities
                // because array is not sorted
                if (a + b > c && a + c > b && b + c > a) {
                    count++;
                }
            }
        }
    }
    return count;
};

// Approach 3: Binary Search - O(n² log n) time, O(1) space
const triangleNumberBinarySearch = (nums) => {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let count = 0;
    
    // INSIGHT: This approach uses sorting but doesn't utilize 
    // the "count multiple at once" property of two pointers
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            // For each pair, binary search for valid third elements
            const target = nums[i] + nums[j];
            let left = j + 1, right = n - 1;
            let validIndex = j;
            
            // Binary search adds O(log n) factor unnecessarily
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[mid] < target) {
                    validIndex = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            count += validIndex - j;
        }
    }
    return count;
};

// Approach 4: Optimized Two Pointers (Alternative implementation)
const triangleNumberOptimized = (nums) => {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let count = 0;
    
    // Fix the largest side and find pairs for smaller sides
    for (let c = n - 1; c >= 2; c--) {
        let left = 0, right = c - 1;
        
        while (left < right) {
            if (nums[left] + nums[right] > nums[c]) {
                // All elements from left to right-1 can pair with nums[right]
                count += right - left;
                right--;
            } else {
                left++;
            }
        }
    }
    return count;
};

// Export all approaches for testing
module.exports = {
    triangleNumber,
    triangleNumberBruteForce,
    triangleNumberBinarySearch,
    triangleNumberOptimized
};

// Test cases
if (require.main === module) {
    const testCases = [
        [2, 2, 3, 4],
        [4, 2, 3, 4],
        [1, 1, 1],
        [1, 2, 3],
        []
    ];
    
    console.log('Testing all approaches:');
    testCases.forEach((nums, index) => {
        console.log(`\nTest Case ${index + 1}: [${nums}]`);
        console.log('Two Pointers:', triangleNumber([...nums]));
        console.log('Brute Force:', triangleNumberBruteForce([...nums]));
        console.log('Binary Search:', triangleNumberBinarySearch([...nums]));
        console.log('Optimized:', triangleNumberOptimized([...nums]));
    });
}
