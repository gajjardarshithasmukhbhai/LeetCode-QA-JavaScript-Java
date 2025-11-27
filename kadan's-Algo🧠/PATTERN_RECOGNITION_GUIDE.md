# Kadane's Algorithm - Pattern Recognition Visual Guide

## Quick Decision Tree

```
┌─────────────────────────────────────────────────────────────┐
│         Do You See These Keywords?                          │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   "Maximum/Minimum"   "Contiguous"      "Subarray"
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
                    ┌───────▼────────┐
                    │  Look deeper   │
                    └───────┬────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
    "Sum"            "Product"          "Difference"
    │                   │                   │
    ├─ NO wrapping  ├─ Track min        ├─ Min tracking
    │  → Kadane's   │  for negative      │  → Variant
    │               │  flip → Modified   │
    │               │  Kadane's          │
    │               │                    │
    └─ Wrapping?    └─ Check if         └─ Single metric?
       └─ Circular       adjacent          YES → Use it
          Kadane's       REQUIRED!
```

---

## Pattern Recognition Flow Chart

```
START: New LeetCode Problem
│
├─ Read problem statement carefully
│
├─ Q1: Does it ask for contiguous/continuous elements?
│  │
│  ├─ NO → Skip Kadane's, consider other approaches
│  │
│  └─ YES → Continue
│
├─ Q2: Looking for MAX or MIN?
│  │
│  ├─ NO (looking for specific count, boolean, etc) → Skip Kadane's
│  │
│  └─ YES → Continue
│
├─ Q3: What is being maximized/minimized?
│  │
│  ├─ SUM of elements?
│  │  └─ Wraps around? NO → Kadane's ✓
│  │  └─ Wraps around? YES → Circular Kadane's ✓
│  │
│  ├─ PRODUCT of elements?
│  │  └─ Has negative? YES → Modified Kadane's (track min) ✓
│  │  └─ Has negative? NO → Standard Kadane's ✓
│  │
│  ├─ DIFFERENCE between elements?
│  │  └─ Buy-Sell variant, use min tracking ✓
│  │
│  └─ Other metric? → Probably NOT Kadane's
│
├─ Q4: Can you solve in single pass O(n)?
│  │
│  └─ YES → Confirms Kadane's family ✓
│
└─ FINAL DECISION: Use appropriate Kadane's variant
```

---

## Problem Pattern Library

### 🔴 RED FLAG PATTERNS (Use Kadane's!)

#### Pattern 1: "Maximum/Minimum Sum"
```
Examples:
- "Find the maximum sum of any contiguous subarray"
- "Find the largest sum you can make with continuous numbers"
- "What's the best sum of a subarray?"

Recognition Keywords: sum, contiguous, subarray, maximum

Code Pattern:
for each element:
    current = max(element, current + element)
    global = max(global, current)
```

**Real Examples:**
- LeetCode 53: Maximum Subarray
- LeetCode 918: Maximum Sum Circular Subarray
- LeetCode 152: Maximum Product Subarray

---

#### Pattern 2: "Best Time to Buy and Sell"
```
Examples:
- "Best day to buy and sell stock once"
- "Find maximum profit from a transaction"
- "What's the best price difference?"

Recognition Keywords: buy, sell, profit, price, difference

Code Pattern:
for each price:
    profit = price - minPrice
    maxProfit = max(maxProfit, profit)
    minPrice = min(minPrice, price)
```

**Real Examples:**
- LeetCode 121: Best Time to Buy and Sell Stock
- LeetCode 122: Best Time to Buy and Sell Stock II
- Stock trading problems

---

#### Pattern 3: "Maximum Product in Array"
```
Examples:
- "Find maximum product of contiguous elements"
- "Largest product subarray"
- "What's the biggest product you can make?"

Recognition Keywords: product, contiguous, maximum, multiply

Code Pattern:
for each element:
    maxCurrent = max(element, element*maxCurrent, element*minCurrent)
    minCurrent = min(element, element*maxCurrent, element*minCurrent)
    
⚠️ KEY: Track both min and max for negative flip
```

**Real Examples:**
- LeetCode 152: Maximum Product Subarray
- LeetCode 628: Maximum Product of Three Numbers (variation)

---

#### Pattern 4: "Circular/Wrap-Around"
```
Examples:
- "Maximum sum in circular array"
- "Array wraps around at edges"
- "Can connect end to beginning"

Recognition Keywords: circular, wrap, cycle, round, connect

Code Pattern:
Case 1: Standard Kadane's (non-circular)
Case 2: Total - Minimum = Circular maximum

if both cases valid: return max(case1, case2)
```

**Real Examples:**
- LeetCode 918: Maximum Sum Circular Subarray
- House Robber II (circular houses)

---

### 🟡 YELLOW FLAG PATTERNS (Might not be pure Kadane's)

#### Pattern 5: "Fixed Window Size K"
```
Examples:
- "Maximum/Minimum sum of exactly k consecutive elements"
- "Find best k-element subarray"
- "Sliding window of size k"

Recognition Keywords: exactly k, k consecutive, window size

Code Pattern:
This is SLIDING WINDOW, not pure Kadane's
(Related family, O(n) still, but simpler)

Calculate sum of first k elements
Slide window: remove left, add right
```

**Real Examples:**
- Maximum Sum Subarray of Size K
- Sliding Window Maximum

---

### 🟢 GREEN FLAG - NOT KADANE'S

#### Pattern 6: "Non-Contiguous Elements"
```
Examples:
- "Maximum sum of non-adjacent elements"
- "Pick elements that don't touch"
- "House robber (can't rob adjacent houses)"

Recognition Keywords: non-adjacent, non-consecutive, skip

⚠️ NOT KADANE'S - Use Dynamic Programming

Code Pattern:
dp[i] = max(dp[i-1], nums[i] + dp[i-2])
```

**Real Examples:**
- LeetCode 198: House Robber
- LeetCode 213: House Robber II
- Maximum sum of non-adjacent elements

---

#### Pattern 7: "Multiple Transactions"
```
Examples:
- "Can buy and sell multiple times"
- "Maximum profit with unlimited transactions"
- "Multiple buy-sell operations allowed"

Recognition Keywords: multiple, unlimited, k transactions

⚠️ NOT KADANE'S - Use Greedy/DP

Code Pattern:
Greedy: Sum all positive differences
DP: Track multiple states
```

**Real Examples:**
- LeetCode 122: Best Time to Buy and Sell Stock II
- LeetCode 123: Best Time to Buy and Sell Stock III

---

## Problem Classification Chart

```
┌──────────────────────────┬─────────────────┬────────────┐
│ Problem                  │ Algo             │ Time/Space │
├──────────────────────────┼─────────────────┼────────────┤
│ Max Subarray Sum         │ Kadane's         │ O(n)/O(1)  │
│ Max Product Subarray     │ Kadane's+min     │ O(n)/O(1)  │
│ Stock Buy-Sell (1x)      │ Kadane's variant │ O(n)/O(1)  │
│ Circular Max Sum         │ 2x Kadane's      │ O(n)/O(1)  │
│ Max Sum K Elements       │ Sliding Window   │ O(n)/O(1)  │
│ House Robber             │ Dynamic Prog     │ O(n)/O(1)  │
│ Stock II (unlimited)     │ Greedy/DP        │ O(n)/O(1)  │
│ Stock III (k=2)          │ State DP         │ O(n)/O(1)  │
│ Max In 2D Matrix         │ 2D Kadane's      │ O(n³)/O(n) │
│ Subarray Closest K       │ Kadane's + BST   │ O(n log n) │
└──────────────────────────┴─────────────────┴────────────┘
```

---

## Example Problems with Solutions

### Example 1: Recognize Pattern

**Problem Statement:**
> Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

**Pattern Recognition:**
- ✓ Looking for "largest sum"
- ✓ "subarray" = contiguous
- ✓ Single value return
- ✓ O(n) expected

**Solution Approach:** → **USE KADANE'S**

```javascript
function maxSubArray(nums) {
    let maxCur = nums[0], maxGlo = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCur = Math.max(nums[i], maxCur + nums[i]);
        maxGlo = Math.max(maxGlo, maxCur);
    }
    return maxGlo;
}
```

---

### Example 2: Recognize Variant

**Problem Statement:**
> Given an array, find the maximum product of any contiguous subarray.

**Pattern Recognition:**
- ✓ Looking for "maximum product"
- ✓ "contiguous subarray"
- ✗ Has negative numbers → products flip signs
- ✓ Need to track minimum too

**Solution Approach:** → **MODIFIED KADANE'S (track min)**

```javascript
function maxProduct(nums) {
    let maxCur = nums[0], minCur = nums[0], maxGlo = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = maxCur;
        maxCur = Math.max(nums[i], nums[i]*maxCur, nums[i]*minCur);
        minCur = Math.min(nums[i], nums[i]*temp, nums[i]*minCur);
        maxGlo = Math.max(maxGlo, maxCur);
    }
    return maxGlo;
}
```

---

### Example 3: Recognize as Not Kadane's

**Problem Statement:**
> You are a professional robber. Houses are arranged in a line. You cannot rob two adjacent houses. Find the maximum sum of money you can rob.

**Pattern Recognition:**
- ✗ Non-adjacent elements (NOT contiguous)
- ✓ Looking for maximum sum
- ✗ Constraint: can't pick adjacent
- ✗ This violates Kadane's requirement

**Solution Approach:** → **DYNAMIC PROGRAMMING**

```javascript
function houseRobber(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        let curr = Math.max(prev1, nums[i] + prev2);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
```

---

### Example 4: Stock Problem Variant

**Problem Statement:**
> Given array of stock prices, you can buy and sell once. Find maximum profit.

**Pattern Recognition:**
- ✓ "Maximum" value
- ✗ Not exactly subarray sum
- ✓ Looking for max difference (price - minPrice)
- ✓ Single pass O(n) viable

**Solution Approach:** → **KADANE'S VARIANT (track min)**

```javascript
function maxProfit(prices) {
    let maxProfit = 0, minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
}
```

---

## Anti-Patterns (DON'T confuse these!)

### ❌ Anti-Pattern 1: Non-Contiguous is NOT Kadane's
```
WRONG: Using Kadane's for house robber
House robber needs DP, not Kadane's!
```

### ❌ Anti-Pattern 2: Fixed Window ≠ Kadane's
```
WRONG: Using full Kadane's for fixed window K
Should use simple sliding window instead
```

### ❌ Anti-Pattern 3: Multiple Operations ≠ Kadane's
```
WRONG: Using Kadane's for multiple buy-sell
Needs state DP or greedy approach
```

### ❌ Anti-Pattern 4: Modify Inputs (if asked not to)
```
WRONG: Negating array for circular variant
Use separate variable instead
```

---

## Quick Checklist Before Coding

```
Problem: _________________________________

[ ] Contiguous/continuous elements required?
[ ] Finding MAX or MIN value?
[ ] That value is a SUM (or product/difference)?
[ ] Single pass O(n) possible?
[ ] At each element, greedy choice possible?
[ ] No external constraints on selection?

If YES to all → KADANE'S ALGORITHM ✓
Otherwise → Research alternative algorithm
```

---

## Keywords That Trigger Kadane's

### 🎯 Strongly Suggest Kadane's:
- "maximum sum"
- "minimum sum"
- "largest sum"
- "contiguous subarray"
- "consecutive elements"
- "contiguous sequence"

### 🟨 Suggests Variant:
- "maximum product"
- "best buy and sell"
- "circular"
- "wrap around"
- "absolute difference"

### 🚫 Suggests NOT Kadane's:
- "non-adjacent"
- "non-consecutive"
- "multiple times"
- "k transactions"
- "pick k items"
- "specific elements"

---

## Final Decision Matrix

| Scenario | Decision | Algorithm |
|----------|----------|-----------|
| Max sum, contiguous | YES | Kadane's |
| Max sum, non-adjacent | NO | DP |
| Max product, has negatives | YES | Modified Kadane's |
| Max diff (stock), 1 transaction | YES | Kadane's variant |
| Max sum, circular | YES | Circular Kadane's |
| Max sum, exactly k | MAYBE | Sliding window |
| Max sum, k transactions | NO | State DP |
| Non-contiguous max | NO | DP |

---

Remember: **When in doubt, check if it's CONTIGUOUS!**
