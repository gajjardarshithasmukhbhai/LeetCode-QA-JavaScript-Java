# 2197. Replace Non-Coprime Numbers in Array

## Topics & Tags
- **Data Structures**: Stack, Array Processing
- **Number Theory**: GCD, LCM, Coprime Numbers, Prime Factorization
- **Algorithm Patterns**: Greedy Approach, Stack-based Processing
- **Mathematical Concepts**: Euclidean Algorithm, Mathematical Formulas
- **Problem Type**: Array Transformation, Mathematical Optimization
- **Difficulty**: Hard
- **Companies**: Google, Microsoft, Meta

## Problem Description
Replace adjacent non-coprime numbers in an array with their LCM until no more replacements can be made. Two numbers are coprime if their GCD is 1.

## Key Mathematical Concepts 🧮

### 1. Greatest Common Divisor (GCD) 📊
**Definition**: The largest positive integer that divides both numbers without remainder.

```javascript
const greatestCommonDivisor = (a, b) => {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

**Properties**:
- GCD(a, b) = GCD(b, a % b) - **Euclidean Algorithm**
- GCD(a, 0) = a
- GCD(a, b) ≤ min(a, b)

**Examples**:
- GCD(12, 8) = 4
- GCD(15, 25) = 5
- GCD(7, 13) = 1

### 2. Least Common Multiple (LCM) 🔢
**Definition**: The smallest positive integer that is divisible by both numbers.

**Formula**: `LCM(a, b) = (a × b) / GCD(a, b)` ⭐

**Why this works**:
- Every common multiple contains all prime factors of both numbers
- LCM contains each prime factor with its highest power from either number
- The formula leverages the relationship: `a × b = GCD(a, b) × LCM(a, b)`

**Examples**:
- LCM(12, 8) = (12 × 8) / 4 = 24
- LCM(15, 25) = (15 × 25) / 5 = 75
- LCM(7, 13) = (7 × 13) / 1 = 91

### 3. Coprime Numbers 🤝
**Definition**: Two numbers are coprime if GCD(a, b) = 1

**Characteristics**:
- Share no common prime factors
- Cannot be reduced further when forming fractions
- Their LCM equals their product: `LCM(a, b) = a × b`

**Examples**:
- Coprime: (3, 5), (7, 9), (8, 15)
- Non-coprime: (4, 6), (9, 15), (10, 25)

## Algorithm Approach 🏗️

### Stack-Based Strategy
1. **Process left to right** through the array
2. **Use stack** to maintain processed elements
3. **Check compatibility** with stack top
4. **Merge when non-coprime** using LCM formula

### Core Logic
```javascript
// Check if current and stack top are non-coprime
let gcd = greatestCommonDivisor(stackTop, current);
if (gcd > 1) {
    // Non-coprime: replace with LCM
    current = (stackTop × current) / gcd;  // LCM formula
    stack.pop(); // Remove old element
}
```

## Mathematical Insights 💡

### Why LCM Formula Works
The relationship `a × b = GCD(a, b) × LCM(a, b)` comes from:
- **Prime factorization**: Every integer has unique prime factorization
- **GCD**: Takes minimum power of each prime factor
- **LCM**: Takes maximum power of each prime factor
- **Product**: Takes sum of powers = min + max powers

### Example Walkthrough
For numbers 12 and 8:
- 12 = 2² × 3¹
- 8 = 2³
- GCD(12, 8) = 2² = 4 (minimum powers)
- LCM(12, 8) = 2³ × 3¹ = 24 (maximum powers)
- Verification: 12 × 8 = 96, GCD × LCM = 4 × 24 = 96 ✅

### Optimization Benefits
- **Single pass**: Stack processes elements once
- **Greedy merging**: Always merge when possible
- **Optimal result**: Produces minimal array length

## Algorithm Complexity
- **Time Complexity**: O(n × log(max_value)) 
  - n iterations, each GCD takes O(log(max_value))
- **Space Complexity**: O(n) for the stack
- **GCD Complexity**: O(log(min(a, b))) per call

## Edge Cases & Considerations
- **All coprime**: No changes, return original array
- **All same number**: Merge into single LCM
- **Prime numbers**: Remain unchanged (coprime with everything except multiples)
- **Large numbers**: LCM can grow exponentially

## Related Mathematical Concepts
- **Euclidean Algorithm**: Efficient GCD computation
- **Bézout's Identity**: Extended GCD applications
- **Chinese Remainder Theorem**: System of congruences
- **Prime Factorization**: Fundamental theorem of arithmetic

## Applications in Real World
- **Scheduling**: Finding common time periods
- **Signal Processing**: Frequency synchronization  
- **Cryptography**: RSA key generation
- **Music Theory**: Rhythm and beat matching
