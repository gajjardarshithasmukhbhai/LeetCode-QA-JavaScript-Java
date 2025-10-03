# Implement Queue using Stacks

## Implementation Approach
The queue is implemented using two stacks:
1. `input`: For pushing elements
2. `output`: For popping/peeking elements

## Core Operations

### Push Operation (O(1))
- Simply push to input stack
- Example: push(5) → input: [5]

### Pop Operation (Amortized O(1))
- If output has elements, pop from output
- If output empty:
  1. Transfer all elements from input to output
  2. Pop from output

### Peek Operation (Amortized O(1))
- Similar to pop, but return last element without removing
- Transfer elements only if output is empty

### Empty Check (O(1))
- Return true if both stacks are empty

## Amortized Analysis Explained

### What is Amortized Analysis?
Amortized analysis considers the average cost per operation over a sequence of operations, rather than the worst-case cost of a single operation.

### Why Pop is Amortized O(1)?
Let's analyze n operations:

1. **Worst Case Scenario**:
   - Transfer all elements: O(n)
   - But this happens only when output is empty

2. **Cost Breakdown**:
   - n push operations: n × O(1) = O(n)
   - n pop operations:
     - Transfer n elements once: O(n)
     - Each element moved exactly once
     - Total cost for n pops: O(n)

3. **Total Cost**:
   - For n operations: O(n)
   - Therefore, amortized cost per operation: O(n)/n = O(1)

### Visualization
```
Input Stack │       │ Output Stack
           │       │
           │   3   │
           │   2   │
           │   1   │
           └───────┘
```

After transfer:
```
Input Stack │       │ Output Stack
           │       │     1
           │       │     2
           │       │     3
           └───────┘
```

## Space Complexity
- O(n) where n is the number of elements in the queue
- Elements are stored in either input or output stack

## Key Insights
1. Two stacks can reverse element order (LIFO → FIFO)
2. Lazy transfer strategy - only move elements when needed
3. Each element is transferred at most once between stacks
4. Although pop can be O(n) in worst case, it averages to O(1)
