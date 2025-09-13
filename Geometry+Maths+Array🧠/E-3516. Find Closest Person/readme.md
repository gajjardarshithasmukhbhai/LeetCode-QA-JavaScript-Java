# Find Closest Person - Speed = Distance/Time Formula Application

## Problem Overview
This problem demonstrates a practical application of the fundamental physics formula: **Speed = Distance/Time**

Given three positions on a number line:
- Person 1 at position `x`
- Person 2 at position `y` 
- You at position `z`

Find which person you can reach first, assuming both persons move toward you at the same speed.

## Mathematical Foundation: Speed = Distance/Time

### Core Formula
```
Speed = Distance / Time
Therefore: Time = Distance / Speed
```

### Problem Application
Since both persons move at the **same speed** toward you:
- **Time to reach Person 1** = `|z - x| / speed`
- **Time to reach Person 2** = `|z - y| / speed`

Since speed is constant and the same for both, we can compare distances directly:
- **Shorter distance** = **Less time** = **Closer person**

## Code Implementation Analysis

```javascript
var findClosest = function(x, y, z) {
    let firstPerson = Math.abs(z-x);    // Distance to Person 1
    let secondPerson = Math.abs(z-y);   // Distance to Person 2

    if(firstPerson === secondPerson) {
        return 0;  // Equal distances = Equal times
    }
    return firstPerson > secondPerson ? 2: 1;  // Shorter distance wins
};
```

### Code Block Breakdown

#### Block 1: Distance Calculations
```javascript
let firstPerson = Math.abs(z-x);    // Distance to Person 1
let secondPerson = Math.abs(z-y);   // Distance to Person 2
```

**Why `Math.abs()`?**
- Distance is always positive regardless of direction
- `z-x` could be negative if `x > z`
- Absolute value ensures we get actual distance magnitude

**Physics Connection:**
```
Distance₁ = |position_you - position_person1| = |z - x|
Distance₂ = |position_you - position_person2| = |z - y|
```

#### Block 2: Time Comparison Logic
```javascript
if(firstPerson === secondPerson) {
    return 0;  // Tie - both take same time
}
return firstPerson > secondPerson ? 2: 1;  // Choose shorter distance
```

**Mathematical Reasoning:**
```
If Distance₁ = Distance₂, then Time₁ = Time₂ (tie)
If Distance₁ > Distance₂, then Time₁ > Time₂ (Person 2 is closer)
If Distance₁ < Distance₂, then Time₁ < Time₂ (Person 1 is closer)
```

## Real-World Examples with Speed Formula

### Example 1: Basic Scenario
```
Person 1 at x = 2
Person 2 at y = 8  
You at z = 5
Both persons move at speed = 3 units/second toward you

Distance₁ = |5 - 2| = 3 units
Distance₂ = |5 - 8| = 3 units

Time₁ = Distance₁ / Speed = 3 / 3 = 1 second
Time₂ = Distance₂ / Speed = 3 / 3 = 1 second

Result: Tie (return 0)
```

### Example 2: Clear Winner
```
Person 1 at x = 1
Person 2 at y = 10
You at z = 3
Both persons move at speed = 2 units/second

Distance₁ = |3 - 1| = 2 units
Distance₂ = |3 - 10| = 7 units

Time₁ = 2 / 2 = 1 second
Time₂ = 7 / 2 = 3.5 seconds

Result: Person 1 is closer (return 1)
```

### Example 3: Negative Coordinates
```
Person 1 at x = -5
Person 2 at y = 3
You at z = -2
Both persons move at speed = 4 units/second

Distance₁ = |-2 - (-5)| = |3| = 3 units
Distance₂ = |-2 - 3| = |-5| = 5 units

Time₁ = 3 / 4 = 0.75 seconds
Time₂ = 5 / 4 = 1.25 seconds

Result: Person 1 is closer (return 1)
```

## Visual Representation

```
Number Line Examples:

Example 1: Tie Case
Person1(2)    You(5)    Person2(8)
    |<--3---->|<--3---->|
    Equal distances = Equal times

Example 2: Person 1 Wins  
Person1(1) You(3)           Person2(10)
    |<-2->|<-------7------->|
    Shorter distance = Less time

Example 3: Negative Coordinates
Person1(-5)  You(-2)  Person2(3)
    |<-3->|<---5--->|
    Person 1 closer despite negative coords
```

## Algorithm Complexity Analysis

### Time Complexity: O(1)
- **Distance calculations**: 2 subtraction + 2 absolute value operations
- **Comparison**: 1-2 comparison operations
- **All operations are constant time**

### Space Complexity: O(1)
- **Variables used**: 2 distance variables
- **No additional data structures needed**
- **Constant space regardless of input values**

## Physics Concepts Applied

### 1. **Uniform Motion**
```
Assumption: Both persons move at constant speed
Formula: Distance = Speed × Time
Rearranged: Time = Distance / Speed
```

### 2. **Relative Motion**
```
Since speed is same for both:
Time_ratio = Distance_ratio
Shorter distance ∝ Shorter time
```

### 3. **Vector Distance (1D)**
```
Distance = |Final_Position - Initial_Position|
In our case: |z - x| and |z - y|
```

## Edge Cases & Considerations

### 1. **Same Position Cases**
```javascript
// You and Person 1 at same position
x = 5, y = 8, z = 5
Distance₁ = |5 - 5| = 0  // Instant reach
Distance₂ = |5 - 8| = 3  // Takes time
Result: Person 1 wins (return 1)
```

### 2. **All Same Position**
```javascript
// Everyone at same position
x = 5, y = 5, z = 5
Distance₁ = Distance₂ = 0
Result: Tie (return 0)
```

### 3. **Large Coordinate Values**
```javascript
// Algorithm handles large numbers efficiently
x = 1000000, y = -1000000, z = 500000
Distance₁ = |500000 - 1000000| = 500000
Distance₂ = |500000 - (-1000000)| = 1500000
Result: Person 1 wins (return 1)
```

## Alternative Approaches & Optimizations

### 1. **Direct Comparison (Most Efficient)**
```javascript
// Current implementation - optimal
var findClosest = function(x, y, z) {
    let d1 = Math.abs(z - x);
    let d2 = Math.abs(z - y);
    return d1 === d2 ? 0 : (d1 < d2 ? 1 : 2);
};
```

### 2. **One-liner Version**
```javascript
var findClosest = function(x, y, z) {
    return Math.abs(z-x) === Math.abs(z-y) ? 0 : 
           (Math.abs(z-x) < Math.abs(z-y) ? 1 : 2);
};
```

### 3. **Avoiding Repeated Calculation**
```javascript
var findClosest = function(x, y, z) {
    let diff = Math.abs(z-x) - Math.abs(z-y);
    return diff === 0 ? 0 : (diff < 0 ? 1 : 2);
};
```

## Key Takeaways

### 1. **Physics Simplification**
- Since speed is constant, we only need to compare distances
- Time comparison reduces to distance comparison
- Formula: `Time ∝ Distance` when speed is constant

### 2. **Mathematical Elegance**
- Simple absolute value calculations
- Direct comparison without complex formulas
- Handles all coordinate systems (positive, negative, mixed)

### 3. **Computational Efficiency**
- O(1) time and space complexity
- No loops or recursive calls needed
- Optimal solution for the given constraints

### 4. **Real-World Applications**
- GPS navigation (shortest path)
- Delivery optimization
- Emergency response routing
- Game AI pathfinding

## Related Problems & Extensions

### 1. **3D Distance Calculation**
```javascript
// Extension to 3D space
function distance3D(p1, p2) {
    return Math.sqrt(
        Math.pow(p2[0] - p1[0], 2) + 
        Math.pow(p2[1] - p1[1], 2) + 
        Math.pow(p2[2] - p1[2], 2)
    );
}
```

### 2. **Multiple Persons**
```javascript
// Find closest among n persons
function findClosestAmongN(persons, yourPosition) {
    let minDistance = Infinity;
    let closestPerson = -1;
    
    persons.forEach((pos, index) => {
        let distance = Math.abs(yourPosition - pos);
        if (distance < minDistance) {
            minDistance = distance;
            closestPerson = index;
        }
    });
    
    return closestPerson;
}
```

### 3. **Variable Speeds**
```javascript
// When persons have different speeds
function findClosestWithSpeeds(x, y, z, speed1, speed2) {
    let time1 = Math.abs(z - x) / speed1;
    let time2 = Math.abs(z - y) / speed2;
    
    return time1 === time2 ? 0 : (time1 < time2 ? 1 : 2);
}
```

This problem beautifully demonstrates how fundamental physics formulas can be applied to solve computational problems efficiently!