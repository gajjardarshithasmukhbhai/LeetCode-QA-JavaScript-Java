# Kadane's Algorithm: Comprehensive Guide

## 1. What is Kadane's Algorithm?

Kadane's Algorithm is a **dynamic programming approach** to solve the **Maximum Subarray Problem** in O(n) time and O(1) space. It finds the contiguous subarray within an array that has the largest sum.

**Problem Statement:** Given an array of integers, find the contiguous subarray with the maximum sum.

---

## 2. Core Concept

The algorithm maintains two variables at each position:
- **`maxCurrent`**: Maximum sum ending at the current position
- **`maxGlobal`**: Maximum sum found so far

### Key Insight:
At each element, we decide:
- Either **extend** the previous subarray by including the current element
- Or **start fresh** with the current element alone

```
For each element:
  maxCurrent = max(element, maxCurrent + element)
  maxGlobal = max(maxGlobal, maxCurrent)
```

---

## 3. Algorithm Walkthrough

### Pseudocode:
```
function kadaneMaxSum(arr):
    maxCurrent = arr[0]
    maxGlobal = arr[0]
    
    for i from 1 to len(arr) - 1:
        maxCurrent = max(arr[i], maxCurrent + arr[i])
        maxGlobal = max(maxGlobal, maxCurrent)
    
    return maxGlobal
```

### Step-by-Step Example:

**Array:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`

| Index | Element | maxCurrent Decision | maxCurrent | maxGlobal |
|-------|---------|-------------------|-----------|-----------|
| 0     | -2      | Start             | -2        | -2        |
| 1     | 1       | Start fresh       | 1         | 1         |
| 2     | -3      | Extend (-3+1)     | -2        | 1         |
| 3     | 4       | Start fresh       | 4         | 4         |
| 4     | -1      | Extend (4-1)      | 3         | 4         |
| 5     | 2       | Extend (3+2)      | 5         | 5         |
| 6     | 1       | Extend (5+1)      | 6         | 6         |
| 7     | -5      | Extend (6-5)      | 1         | 6         |
| 8     | 4       | Extend (1+4)      | 5         | 6         |

**Result:** Maximum subarray = `[4, -1, 2, 1]` with sum = **6**

---

## 4. Pattern Recognition: When to Use Kadane's

### 🔴 Red Flags (Problem Indicators):

1. **"Find the maximum/minimum sum of a subarray"**
   - Example: "Find the maximum sum of a contiguous subarray"

2. **"Find a contiguous element sequence with maximum value"**
   - Example: "Find the longest sequence of stock prices with maximum profit"

3. **Keywords:**
   - Subarray (not subsequence!)
   - Contiguous
   - Maximum/Minimum sum
   - Continuous sequence

4. **Constraint:** Elements must be **adjacent/contiguous**
   - ✅ Kadane's works: Contiguous subarray
   - ❌ Won't work: Non-contiguous subsequence

### 🟢 Recognition Checklist:

- [ ] Problem asks for a **contiguous/continuous** sequence?
- [ ] Need to find **maximum or minimum SUM** of that sequence?
- [ ] Can solve in **O(n) time, O(1) space**?
- [ ] Array can have **negative numbers**?

If all checks pass → **Use Kadane's Algorithm**

---

## 5. Code Implementations

### JavaScript Implementation:

```javascript
// Basic Kadane's Algorithm
function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }
    
    return maxGlobal;
}

// With subarray tracking (return actual subarray)
function maxSubArrayWithRange(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    let start = 0, end = 0, tempStart = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxCurrent + nums[i]) {
            maxCurrent = nums[i];
            tempStart = i;
        } else {
            maxCurrent = maxCurrent + nums[i];
        }
        
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
            start = tempStart;
            end = i;
        }
    }
    
    return {
        maxSum: maxGlobal,
        subarray: nums.slice(start, end + 1),
        range: [start, end]
    };
}

// Example usage
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArrayWithRange([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: { maxSum: 6, subarray: [4, -1, 2, 1], range: [3, 6] }
```

### Java Implementation:

```java
public class KadaneAlgorithm {
    
    // Basic Kadane's Algorithm
    public static int maxSubArray(int[] nums) {
        int maxCurrent = nums[0];
        int maxGlobal = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
            maxGlobal = Math.max(maxGlobal, maxCurrent);
        }
        
        return maxGlobal;
    }
    
    // With subarray tracking
    public static class SubarrayResult {
        public int maxSum;
        public int start;
        public int end;
        
        public SubarrayResult(int maxSum, int start, int end) {
            this.maxSum = maxSum;
            this.start = start;
            this.end = end;
        }
    }
    
    public static SubarrayResult maxSubArrayWithRange(int[] nums) {
        int maxCurrent = nums[0];
        int maxGlobal = nums[0];
        int start = 0, end = 0, tempStart = 0;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > maxCurrent + nums[i]) {
                maxCurrent = nums[i];
                tempStart = i;
            } else {
                maxCurrent = maxCurrent + nums[i];
            }
            
            if (maxCurrent > maxGlobal) {
                maxGlobal = maxCurrent;
                start = tempStart;
                end = i;
            }
        }
        
        return new SubarrayResult(maxGlobal, start, end);
    }
}
```

---

## 6. Real-World Examples & Pattern Recognition

### Example 1: Stock Best Buy-Sell Day (Maximum Profit)
**Problem:** Find the best day to buy and sell a stock for maximum profit (can only hold one share at a time).

```javascript
// Stock prices: [7, 1, 5, 3, 6, 4]
function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    
    return maxProfit;
}

// Result: 5 (buy at 1, sell at 6)
```

**Recognition:** Find maximum difference → Variation of Kadane's

---

### Example 2: Maximum Product Subarray
**Problem:** Find contiguous subarray with the maximum product.

```javascript
function maxProduct(nums) {
    let maxCurrent = nums[0];
    let minCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // Store previous maxCurrent
        let tempMax = maxCurrent;
        
        // Handle negative numbers (min becomes max after multiplication)
        maxCurrent = Math.max(
            nums[i],
            nums[i] * maxCurrent,
            nums[i] * minCurrent
        );
        
        minCurrent = Math.min(
            nums[i],
            nums[i] * tempMax,
            nums[i] * minCurrent
        );
        
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }
    
    return maxGlobal;
}

// Example: [2, 3, -2, 4]
// Result: 6 (from [2, 3])
```

**Recognition:** Similar pattern but handle negative products (minCurrent tracks minimum for potential flip)

---

### Example 3: Circular Array Maximum Sum
**Problem:** Find maximum sum in a circular array (elements wrap around).

```javascript
function circularMaxSum(nums) {
    // Case 1: Max sum without wrapping (standard Kadane's)
    const maxKadane = kadaneMaxSum(nums);
    
    // Case 2: Max sum with wrapping
    // = Total sum - Minimum subarray sum
    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
        nums[num] = -num; // Negate to find minimum subarray
    }
    
    const minKadane = kadaneMaxSum(nums);
    
    // Restore original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = -nums[i];
    }
    
    const circularSum = totalSum + minKadane;
    
    // Handle edge case: all negative numbers
    return circularSum === 0 ? maxKadane : Math.max(maxKadane, circularSum);
}

// Example: [3, -2, 2, -3]
// Result: 3 (either [3] or [-2, 2, -3, 3] with wrapping)
```

**Recognition:** Circular variation → Two Kadane's passes needed

---

### Example 4: Maximum Sum of K Elements
**Problem:** Find maximum sum of exactly k elements in a subarray.

```javascript
function maxSumOfK(nums, k) {
    let currentSum = 0;
    
    // Calculate sum of first k elements
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    
    let maxSum = currentSum;
    
    // Sliding window approach
    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Example: [1, 4, 2, 10, 23, 3, 1], k=4
// Result: 39 (from [4, 2, 10, 23])
```

**Recognition:** Fixed window size → Sliding window (different from Kadane's but same family)

---

### Example 5: Maximum Sum After Operations
**Problem:** Find maximum sum after at most k removals from ends of subarray.

```javascript
function maxSumAfterRemovals(nums, k) {
    let maxSum = 0;
    
    // Try all subarrays
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    
    return maxSum;
}
```

**Recognition:** Core Kadane's problem

---

## 7. Time & Space Complexity Analysis

| Aspect | Complexity | Notes |
|--------|-----------|-------|
| **Time** | O(n) | Single pass through array |
| **Space** | O(1) | Only constant extra variables |
| **Optimality** | Optimal | Cannot do better than O(n) |

---

## 8. Variations & Extensions

### 1. **Minimum Subarray Sum**
Change `Math.max` to `Math.min`

### 2. **Maximum Absolute Difference**
Track both maximum and minimum at each step

### 3. **K-Maximum Subarrays**
Combine with heap/priority queue

### 4. **2D Matrix Maximum Subarray**
Apply Kadane's to each row combination

### 5. **Circular Array Variant**
Two passes: with and without wrapping

---

## 9. Common Mistakes & How to Avoid Them

| Mistake | Impact | Solution |
|---------|--------|----------|
| Confusing with subsequence | Wrong algorithm | Remember: CONTIGUOUS only |
| Not handling all negatives | Wrong edge case | Initialize with first element |
| Modifying original array | Data loss | Use separate tracking variables |
| Forgetting to update global max | Incorrect result | Update both maxCurrent AND maxGlobal |
| Off-by-one errors | Indexing bugs | Test with small arrays first |

---

## 10. Practice Problems

### Easy Level:
1. **Maximum Subarray** (LeetCode 53)
   - Find max sum of contiguous subarray
   - Pattern: Direct Kadane's application

2. **Best Time to Buy and Sell Stock** (LeetCode 121)
   - Pattern: Variant of Kadane's with min tracking

### Medium Level:
3. **Maximum Product Subarray** (LeetCode 152)
   - Pattern: Handle negatives with min tracking

4. **Circular Subarray Sum** (LeetCode 918)
   - Pattern: Two passes approach

5. **Maximum Subarray Sum with One Deletion** (LeetCode 1186)
   - Pattern: Modified state tracking

### Hard Level:
6. **Max Sum of Rectangle in Matrix** (LeetCode 363)
   - Pattern: 2D Kadane's

7. **Maximum Sum of Subarray Close to K** (LeetCode 363)
   - Pattern: Kadane's + binary search tree

---

## 11. Decision Tree for Pattern Recognition

```
Does the problem ask for:
│
├─ Contiguous subsequence? 
│  ├─ YES
│  │  ├─ Find MAX/MIN sum?
│  │  │  ├─ YES → Use Kadane's Algorithm ✓
│  │  │  └─ NO → Different approach needed
│  │  │
│  │  └─ Fixed window size? → Use Sliding Window
│  │
│  └─ NO (Non-contiguous) → Use DP/Greedy/Other
│
└─ 2D/Multi-dimensional? → Apply Kadane's to each dimension
```

---

## 12. Key Takeaways

✅ **When to use:**
- Finding maximum/minimum sum of **contiguous subarray**
- Elements must be **adjacent** (not subsequence)
- Arrays with **negative numbers** included

✅ **Why it works:**
- **Greedy decision**: At each step, decide optimally
- **DP principle**: Use previous state to compute current
- **Linear time**: Single pass, no redundant calculations

✅ **Remember:**
- `maxCurrent` = best sum ending here
- `maxGlobal` = best sum seen anywhere
- Update both at each step
- Works in O(n) time, O(1) space

---

## Quick Reference Code

```javascript
// Template for quick reference
function kadaneTemplate(arr) {
    let max_ending_here = arr[0];
    let max_so_far = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        max_ending_here = Math.max(arr[i], max_ending_here + arr[i]);
        max_so_far = Math.max(max_so_far, max_ending_here);
    }
    
    return max_so_far;
}
```

Use this as a starting point for any maximum subarray problem!
