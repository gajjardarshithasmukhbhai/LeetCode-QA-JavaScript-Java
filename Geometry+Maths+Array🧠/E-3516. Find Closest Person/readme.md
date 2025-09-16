# 3516. Find Closest Person

## Topics & Tags
- **Mathematics**: Absolute Value, Distance Calculation
- **Geometry**: 1D Distance, Point Comparison
- **Algorithm Patterns**: Simple Comparison, Conditional Logic
- **Problem Type**: Distance Minimization, Selection
- **Difficulty**: Easy
- **Concepts**: Manhattan Distance (1D), Tie Breaking

## Problem Description
Given three positions x, y, and z on a number line, determine which person (at position x or y) is closer to position z.

## Key Concepts

### 1. Distance Calculation 📏
- **Absolute Difference**: `|z - x|` and `|z - y|`
- **1D Manhattan Distance**: Distance between two points on a line
- **Always Positive**: Distance is always non-negative

### 2. Comparison Logic 🔍
```javascript
let firstPerson = Math.abs(z-x);   // Distance from z to x
let secondPerson = Math.abs(z-y);  // Distance from z to y
```

### 3. Return Value Strategy
- **Equal Distance**: Return 0 (tie)
- **Person 1 Closer**: Return 1
- **Person 2 Closer**: Return 2

## Mathematical Insights

### Distance Formula
- **1D Distance**: `d = |a - b|`
- **Properties**: 
  - Always non-negative
  - Symmetric: `|a - b| = |b - a|`
  - Triangle inequality applies

### Edge Cases
- **Same Position**: When x = y, both have same distance
- **Target at Person**: When z = x or z = y, distance is 0
- **Negative Coordinates**: Absolute value handles negative numbers

## Algorithm Complexity
- **Time Complexity**: O(1) - Constant time operations
- **Space Complexity**: O(1) - No extra space needed

## Related Concepts
- **Closest Point Problems**: Finding nearest neighbor
- **Distance Metrics**: Euclidean vs Manhattan distance  
- **Binary Search**: For larger search spaces
- **Geometry**: Point-to-point distance calculations

## Applications
- **GPS Navigation**: Finding closest landmark
- **Game Development**: NPC proximity detection
- **Data Analysis**: Nearest data point identification
- **Optimization**: Facility location problems