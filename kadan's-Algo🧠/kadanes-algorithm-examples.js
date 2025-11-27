/**
 * Kadane's Algorithm - Practical Examples & Pattern Recognition
 * Comprehensive guide with multiple variations and use cases
 */

// ============================================
// 1. BASIC KADANE'S ALGORITHM
// ============================================

/**
 * Find maximum sum of contiguous subarray
 * Time: O(n), Space: O(1)
 */
function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }
    
    return maxGlobal;
}

/**
 * Find maximum sum with subarray indices
 */
function maxSubArrayWithRange(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    let start = 0, end = 0, tempStart = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxCurrent + nums[i]) {
            maxCurrent = nums[i];
            tempStart = i;
        } else {
            maxCurrent += nums[i];
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
        indices: { start, end }
    };
}

// ============================================
// 2. MAXIMUM SUBARRAY EXAMPLES
// ============================================

console.log("=== EXAMPLE 1: Basic Maximum Subarray ===");
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Array:", arr1);
console.log("Max sum:", maxSubArray(arr1)); // Output: 6
console.log("Details:", maxSubArrayWithRange(arr1)); 
// Output: { maxSum: 6, subarray: [4, -1, 2, 1], indices: { start: 3, end: 6 } }

console.log("\n=== EXAMPLE 2: All Negative Numbers ===");
const arr2 = [-5, -2, -8, -1, -4];
console.log("Array:", arr2);
console.log("Max sum:", maxSubArray(arr2)); // Output: -1 (largest single element)
console.log("Details:", maxSubArrayWithRange(arr2));

console.log("\n=== EXAMPLE 3: All Positive Numbers ===");
const arr3 = [1, 2, 3, 4, 5];
console.log("Array:", arr3);
console.log("Max sum:", maxSubArray(arr3)); // Output: 15 (entire array)

console.log("\n=== EXAMPLE 4: Single Element ===");
const arr4 = [5];
console.log("Array:", arr4);
console.log("Max sum:", maxSubArray(arr4)); // Output: 5

// ============================================
// 3. PATTERN RECOGNITION - VARIANT: Maximum Product Subarray
// ============================================

/**
 * Find maximum product of contiguous subarray
 * KEY: Handle negatives - min can become max after multiplication
 */
function maxProductSubArray(nums) {
    let maxCurrent = nums[0];
    let minCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let tempMax = maxCurrent;
        
        // Current max is max of: element alone, or with previous max/min
        maxCurrent = Math.max(
            nums[i],
            nums[i] * tempMax,
            nums[i] * minCurrent
        );
        
        // Current min is min of: element alone, or with previous max/min
        minCurrent = Math.min(
            nums[i],
            nums[i] * tempMax,
            nums[i] * minCurrent
        );
        
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }
    
    return maxGlobal;
}

console.log("\n=== PATTERN: Maximum Product Subarray ===");
const prodArr1 = [2, 3, -2, 4];
console.log("Array:", prodArr1);
console.log("Max product:", maxProductSubArray(prodArr1)); // Output: 6 [2,3]

const prodArr2 = [-2];
console.log("Array:", prodArr2);
console.log("Max product:", maxProductSubArray(prodArr2)); // Output: -2

const prodArr3 = [-2, 3, -4];
console.log("Array:", prodArr3);
console.log("Max product:", maxProductSubArray(prodArr3)); // Output: 24 [-2,3,-4]

// ============================================
// 4. PATTERN RECOGNITION - VARIANT: Circular Maximum Sum
// ============================================

/**
 * Maximum sum in circular array
 * KEY: Two cases - with wrapping and without wrapping
 */
function circularArrayMaxSum(nums) {
    // Case 1: Maximum subarray without wrapping (standard Kadane's)
    function kadaneMaxSum(arr) {
        let maxCurrent = arr[0];
        let maxGlobal = arr[0];
        
        for (let i = 1; i < arr.length; i++) {
            maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
            maxGlobal = Math.max(maxGlobal, maxCurrent);
        }
        
        return maxGlobal;
    }
    
    const maxWithoutCircular = kadaneMaxSum(nums);
    
    // Case 2: Maximum with wrapping
    // Total - Minimum subarray = Maximum circular
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        nums[i] = -nums[i];
    }
    
    const minSubarray = kadaneMaxSum(nums);
    
    // Restore original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = -nums[i];
    }
    
    const maxWithCircular = totalSum + minSubarray;
    
    // Handle edge case: all negative
    return maxWithCircular === 0 ? maxWithoutCircular : 
           Math.max(maxWithoutCircular, maxWithCircular);
}

console.log("\n=== PATTERN: Circular Array Maximum Sum ===");
const circArr1 = [3, -2, 2, -3];
console.log("Array:", circArr1);
console.log("Max circular sum:", circularArrayMaxSum(circArr1)); // Output: 3

const circArr2 = [1, 5, -3, 3];
console.log("Array:", circArr2);
console.log("Max circular sum:", circularArrayMaxSum(circArr2)); // Output: 9 [5,-3,3,1]

// ============================================
// 5. STOCK TRADING - BEST BUY SELL DAY
// ============================================

/**
 * Best time to buy and sell stock
 * PATTERN RECOGNITION: Maximum profit = max(currentPrice - minPriceSoFar)
 */
function maxProfitBuySell(prices) {
    if (prices.length < 2) return 0;
    
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        minPrice = Math.min(minPrice, prices[i]);
    }
    
    return maxProfit;
}

console.log("\n=== PATTERN: Stock Buy-Sell (Kadane's Variant) ===");
const prices1 = [7, 1, 5, 3, 6, 4];
console.log("Prices:", prices1);
console.log("Max profit:", maxProfitBuySell(prices1)); // Output: 5 (buy 1, sell 6)

const prices2 = [7, 6, 4, 3, 1];
console.log("Prices:", prices2);
console.log("Max profit:", maxProfitBuySell(prices2)); // Output: 0 (decreasing)

const prices3 = [2, 4, 1, 7, 5, 11];
console.log("Prices:", prices3);
console.log("Max profit:", maxProfitBuySell(prices3)); // Output: 10 (buy 1, sell 11)

// ============================================
// 6. MAXIMUM SUM SUBARRAY OF SIZE K
// ============================================

/**
 * Find maximum sum of subarray with exactly k elements
 * PATTERN: Sliding window (different but related to Kadane's)
 */
function maxSumSubarrayK(nums, k) {
    if (k > nums.length) return null;
    
    let windowSum = 0;
    
    // Sum of first k elements
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    let maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

console.log("\n=== PATTERN: Maximum Sum of K Elements ===");
const kArr1 = [1, 4, 2, 10, 23, 3, 1];
const k1 = 4;
console.log("Array:", kArr1, "K:", k1);
console.log("Max sum of k elements:", maxSumSubarrayK(kArr1, k1)); // Output: 39

// ============================================
// 7. PATTERN RECOGNITION CHALLENGE
// ============================================

/**
 * House Robber - maximum sum with non-adjacent elements
 * PATTERN: This is NOT Kadane's - it's DP, but similar decision logic
 */
function houseRobber(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        let current = Math.max(prev1, nums[i] + prev2);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

console.log("\n=== NOT KADANE'S: House Robber (non-adjacent elements) ===");
const houses = [1, 2, 3, 1];
console.log("Houses:", houses);
console.log("Max robbed:", houseRobber(houses)); // Output: 4 (1+3)

const houses2 = [2, 7, 9, 3, 1];
console.log("Houses:", houses2);
console.log("Max robbed:", houseRobber(houses2)); // Output: 12 (2+9+1)

// ============================================
// 8. PATTERN COMPARISON TABLE
// ============================================

console.log("\n=== PATTERN RECOGNITION GUIDE ===");
console.log(`
┌─────────────────────────┬──────────────────┬─────────────────────┐
│ Problem Type            │ Key Characteristic│ Algorithm           │
├─────────────────────────┼──────────────────┼─────────────────────┤
│ Max sum subarray        │ Contiguous       │ Kadane's            │
│ Max product subarray    │ Contiguous       │ Kadane's (with min) │
│ Stock buy-sell (1 tx)   │ Max difference   │ Kadane's variant    │
│ Circular max sum        │ Wrap around      │ 2x Kadane's         │
│ Max sum K elements      │ Fixed window     │ Sliding window      │
│ House robber            │ Non-adjacent     │ Dynamic Programming │
│ Max in 2D matrix        │ Contiguous rows  │ 2D Kadane's         │
│ Subarray close to K     │ Contiguous + BST │ Kadane's + BST      │
└─────────────────────────┴──────────────────┴─────────────────────┘
`);

// ============================================
// 9. RECOGNITION CHECKLIST
// ============================================

console.log("\n=== IS THIS A KADANE'S PROBLEM? CHECKLIST ===");
console.log(`
✓ MUST HAVE: Contiguous subarray
✓ MUST HAVE: Finding max/min SUM
✓ MUST HAVE: Single pass possible

✗ NOT KADANE'S IF: Non-contiguous subsequence
✗ NOT KADANE'S IF: Finding specific elements (not sum)
✗ NOT KADANE'S IF: Multiple transactions/decisions per element

COMPLEXITY GOAL:
✓ Kadane's: O(n) time, O(1) space
✓ Stock problem: O(n) time, O(1) space
✓ House robber: O(n) time, O(1) space
`);

// ============================================
// 10. TEMPLATE FOR NEW PROBLEMS
// ============================================

console.log("\n=== KADANE'S TEMPLATE ===");
const kadaneTemplate = `
function solveWithKadane(arr) {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        // Key line: decide to extend or start fresh
        maxCurrent = Math.max(
            arr[i],                    // Start fresh
            maxCurrent + arr[i]        // Extend
        );
        
        // Update global maximum
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }
    
    return maxGlobal;
}
`;
console.log(kadaneTemplate);

// ============================================
// EXPORT FOR USE IN OTHER MODULES
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        maxSubArray,
        maxSubArrayWithRange,
        maxProductSubArray,
        circularArrayMaxSum,
        maxProfitBuySell,
        maxSumSubarrayK,
        houseRobber
    };
}
