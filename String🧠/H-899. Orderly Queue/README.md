# String Manipulation Problems - Approaches & Insights

## 1. Orderly Queue (Problem 899)
### Key Insight:
- When k ≥ 2, string can be sorted completely
- When k = 1, only rotations are possible

### Approach:
1. **For k ≥ 2:**
   - Can swap any two adjacent characters
   - Eventually achieves full sorting
   - Time: O(n log n)

2. **For k = 1:**
   - Can only rotate string
   - Must check all possible rotations
   - Find lexicographically smallest rotation
   - Time: O(n²)

```javascript
// Example for k=1
"baca" -> possible rotations:
"baca", "acab", "caba", "abac"
```

## 2. String Compression (Problem 443)
### Approach:
1. Two-pointer technique:
   - Read pointer (i)
   - Write pointer (j)

2. Process:
   - Count consecutive characters
   - Write character followed by count
   - Skip count if only one occurrence

### Example:
```
Input: ['a','a','b','b','c','c','c']
Process:
1. Count 'a': 2 → write 'a2'
2. Count 'b': 2 → write 'b2'
3. Count 'c': 3 → write 'c3'
Result: ['a','2','b','2','c','3']
```

### Time Complexity Analysis:
- One pass through array: O(n)
- Each character processed once
- Writing count digits: O(log k) where k is count

## Common String Operation Patterns

### 1. Two-Pointer Technique
```java
int left = 0;
for(int right = 0; right < length; right++) {
    // process window
    while(condition) {
        // adjust left pointer
        left++;
    }
}
```

### 2. Character Counting
```java
Map<Character, Integer> counts = new HashMap<>();
// Increment
counts.put(c, counts.getOrDefault(c, 0) + 1);
// Decrement
counts.put(c, counts.get(c) - 1);
```

### Tips:
1. Consider string immutability:
   - Java: Use StringBuilder for modifications
   - JavaScript: Array operations often more efficient

2. Space optimization:
   - In-place modifications when possible
   - Use character array instead of string builder

3. Edge cases:
   - Empty string
   - Single character
   - All same characters
   - No duplicates
