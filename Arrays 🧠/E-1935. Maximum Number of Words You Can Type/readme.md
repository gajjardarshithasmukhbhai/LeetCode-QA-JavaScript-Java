# 1935. Maximum Number of Words You Can Type

## Topics & Tags
- **Data Structures**: Array, Set, Hash Set
- **String Processing**: String Splitting, Character Checking
- **Algorithm Patterns**: Membership Testing, Optimization
- **Problem Type**: String Validation, Counting
- **Difficulty**: Easy
- **Companies**: Google, Microsoft, Amazon

## Problem Description
You have a text string and some broken letters on your keyboard. You need to count how many words from the text can be typed without using any broken letters.

## Approach
1. Split the text into individual words
2. Create a Set from broken letters for O(1) lookup
3. For each word, check if any character is in the broken letters set
4. Count words that don't contain any broken letters

## Performance Optimization Insights 🚀

### .includes() vs Set.has() Comparison

#### Using .includes() (Inefficient)
```javascript
const brokenLetters = "abc"; // string or array
if (brokenLetters.includes(char)) // O(m) time complexity
```
- **Time Complexity**: O(m) per check where m = length of brokenLetters
- **Problem**: Linear scan through broken letters for each character check
- **Total Complexity**: O(n × k × m) where n = words, k = avg word length, m = broken letters

#### Using Set.has() (Optimized) ✅
```javascript
const brokenSet = new Set(brokenLetters); // O(m) to create
if (brokenSet.has(char)) // O(1) time complexity
```
- **Time Complexity**: O(1) average per check (hash lookup)
- **Total Complexity**: O(n × k) where n = words, k = avg word length
- **Space Trade-off**: Slight memory overhead for hash table

### Performance Impact Analysis

| Scenario | .includes() | Set.has() | Improvement |
|----------|-------------|-----------|-------------|
| Small broken letters (1-3) | ~O(n×k×3) | ~O(n×k) | Minimal |
| Medium broken letters (5-10) | ~O(n×k×8) | ~O(n×k) | 8x faster |
| Large broken letters (15+) | ~O(n×k×15) | ~O(n×k) | 15x+ faster |

## Technical Insights & Best Practices

### When to Use Set.has()
- ✅ Multiple membership checks (like character validation)
- ✅ Large lookup datasets
- ✅ Performance-critical applications
- ✅ Repeated queries on same dataset

### When .includes() is Acceptable
- ✅ Very small datasets (1-3 items)
- ✅ One-time lookups
- ✅ Memory-constrained environments
- ✅ Simple prototyping

### Code Optimization Pattern
```javascript
// Before: O(m) per lookup
for (let char of word) {
    if (brokenLetters.includes(char)) return false;
}

// After: O(1) per lookup
const brokenSet = new Set(brokenLetters);
for (let char of word) {
    if (brokenSet.has(char)) return false;
}
```

## Algorithm Complexity
- **Time Complexity**: O(n × k) where n = number of words, k = average word length
- **Space Complexity**: O(m) where m = number of broken letters
- **Preprocessing**: O(m) to create the Set

## Key Takeaways
1. **Hash-based lookups** (Set) are almost always better than linear searches (includes) for repeated operations
2. **Preprocessing** data structures can dramatically improve performance
3. **Space-time trade-offs** are usually worth it for better algorithmic complexity
4. **Profiling** is important - measure before and after optimization

## Related Problems
- Word Pattern Matching
- Valid Anagram
- String Compression
- Character Frequency Analysis
