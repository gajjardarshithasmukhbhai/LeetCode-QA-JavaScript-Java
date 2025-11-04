# 611. Valid Triangle Number

## Problem Description

Given an integer array `nums`, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

### Example 1:
```
Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
```

### Example 2:
```
Input: nums = [4,2,3,4]
Output: 4
```

### Triangle Validity Rule:
For three sides a, b, c to form a valid triangle:
- a + b > c
- a + c > b  
- b + c > a

## Approaches

### Approach 1: Two Pointers (Optimal) ⭐
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- Sort the array and use two pointers technique
- For each potential largest side, find valid pairs

### Approach 2: Brute Force
- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)
- Check all possible triplets

### Approach 3: Binary Search
- **Time Complexity:** O(n² log n)
- **Space Complexity:** O(1)
- For each pair, binary search for valid third element

## Key Insights

1. **Sorting Optimization:** After sorting, if `nums[i] + nums[j] > nums[k]` where `k > j > i`, then all elements from `i` to `j-1` will also satisfy this condition with `nums[j]` and `nums[k]`.

2. **Triangle Inequality:** We only need to check `a + b > c` when `c` is the largest side, as the other two conditions are automatically satisfied when the array is sorted.

## Usage

```javascript
console.log(triangleNumber([2,2,3,4])); // Output: 3
console.log(triangleNumber([4,2,3,4])); // Output: 4
```

## 🧠 Deep Insights: Why Two Pointers Pattern?

### 1. **Problem Nature Analysis**

The triangle validity problem has these characteristics:
- We need to find **triplets** (3 elements)
- We need to check **relationships between elements** (a + b > c)
- We want to **count valid combinations**, not find specific values
- The constraint involves **comparison of sums**

### 2. **Why Two Pointers is PERFECT here?**

#### ✅ **Key Insight: Sorted Array Property**
```
After sorting: [1, 2, 3, 4, 5, 6]
If nums[i] + nums[j] > nums[k], then:
- nums[i+1] + nums[j] > nums[k] ✅ (larger left element)
- nums[i+2] + nums[j] > nums[k] ✅ (even larger left element)
- ... and so on
```

#### ✅ **Mathematical Reasoning**
For a valid triangle with sides a ≤ b ≤ c:
- We only need to check: `a + b > c` (other conditions auto-satisfied)
- If `nums[i] + nums[j] > nums[k]`, then ALL indices from `i` to `j-1` will work with `nums[j]` and `nums[k]`
- This gives us `j - i` valid triangles in ONE operation!

#### ✅ **Elimination Strategy**
```javascript
// When nums[i] + nums[j] > nums[k]:
count += j - i;  // Add all valid combinations
j--;             // Try smaller second element

// When nums[i] + nums[j] <= nums[k]:
i++;             // Need larger first element
```

### 3. **Why OTHER Patterns DON'T Work Well?**

#### ❌ **Sliding Window - Why NOT suitable?**
```javascript
// Sliding window works for contiguous subarrays with conditions like:
// - Sum equals target
// - Maximum/minimum in window
// But triangles need ANY 3 elements, not contiguous ones!

// Example: [1, 2, 10, 11, 12]
// Valid triangle: (10, 11, 12) - NOT contiguous from start
// Sliding window would miss this!
```

#### ❌ **Hash Map - Why NOT optimal?**
```javascript
// Hash maps work for:
// - Two sum problems (looking for complement)
// - Frequency counting
// But triangle problem needs TRIPLET relationships, not lookups
// We'd still need nested loops = O(n²) minimum
```

#### ❌ **Binary Search Alone - Why LESS efficient?**
```javascript
// For each pair (i,j), binary search for valid k
// Time: O(n² log n) vs Two Pointers O(n²)
// More complex implementation
// Doesn't utilize the "count multiple" insight
```

#### ❌ **Dynamic Programming - Why OVERKILL?**
```javascript
// DP works for:
// - Overlapping subproblems
// - Optimal substructure
// Triangle counting has NO overlapping subproblems!
// Each triplet is independent
```

### 4. **Pattern Recognition Framework**

#### 🎯 **When to use Two Pointers:**
1. **Sorted array** or can be sorted
2. **Pair/triplet** finding problems
3. **Opposite direction movement** makes sense
4. **Elimination strategy** possible
5. **Linear scan** with **pruning** needed

#### 🎯 **Two Pointers Variants:**
```javascript
// Variant 1: Same direction (sliding window)
let left = 0, right = 0;
while (right < n) { /* expand/contract */ }

// Variant 2: Opposite direction (this problem)
let left = 0, right = n - 1;
while (left < right) { /* move closer */ }

// Variant 3: Fixed + Two pointers (triangle problem)
for (let k = 2; k < n; k++) {
    let i = 0, j = k - 1;
    while (i < j) { /* two pointers */ }
}
```

### 5. **Complexity Deep Dive**

#### **Why O(n²) and not O(n³)?**
```javascript
// Naive thinking: 3 nested loops = O(n³)
// Smart insight: For each k, two pointers scan once = O(n)
// Total: O(n) × O(n) = O(n²)

// The key is: we don't restart pointers for each k
// We process each pair (i,j) at most once!
```

#### **Space Complexity Analysis:**
- Input modification: O(1) - we sort in-place
- No extra data structures needed
- Only constant variables used

### 6. **Alternative Patterns Comparison**

| Pattern | Time | Space | Why Not Optimal? |
|---------|------|--------|------------------|
| Brute Force | O(n³) | O(1) | Too slow, doesn't use sorted property |
| Binary Search | O(n²logn) | O(1) | Extra log factor, more complex |
| Hash Map | O(n³) | O(n) | Still need 3 loops, extra space |
| DP | O(n³) | O(n²) | No overlapping subproblems |
| **Two Pointers** | **O(n²)** | **O(1)** | **Perfect fit!** |

### 7. **Mental Model for Recognition**

```
Problem asks for: COUNT of TRIPLETS with RELATIONSHIP
↓
Can we SORT without losing information? YES
↓
After sorting, can we use ELIMINATION strategy? YES
↓
Can we avoid RECHECKING same combinations? YES
↓
Two Pointers Pattern! ✅
```

### 8. **Common Mistakes & Why They Happen**

```javascript
❌ // Mistake 1: Not fixing one element
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        // Two pointers for k? This doesn't work!
    }
}

✅ // Correct: Fix largest element, two pointers for others
for (let k = 2; k < n; k++) {
    let i = 0, j = k - 1;
    // Now two pointers make sense!
}
```

This pattern recognition comes with practice - the key is understanding the **mathematical properties** that make elimination possible!
