# 📘 Sliding Window Algorithm Documentation

The **Sliding Window Algorithm** is a commonly used technique in programming to efficiently process subarrays or substrings of a larger data structure (like arrays or strings). Instead of recalculating results from scratch for every window (or subarray), the algorithm "slides" the window to reuse past computations.

---

## 🧠 Core Concept

A **window** is defined by two pointers:
- `left` (or `start`)
- `right` (or `end`)

The window slides across the array by **expanding** or **shrinking** these pointers based on the problem's constraints.

The **length of the current window** is:
```
window size = right - left + 1
```

---

## 🔹 Types of Sliding Window

### 1. **Fixed-size Window**
Used when the problem requires a window/subarray of size `k`.

**Template:**
```javascript
function maxSumSubarray(arr, k) {
    let left = 0, right = 0;
    let sum = 0, maxSum = 0;

    while (right < arr.length) {
        sum += arr[right];

        if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, sum);
            sum -= arr[left];
            left++;
        }

        right++;
    }

    return maxSum;
}
```

---

### 2. **Variable-size Window**
Used when the window size depends on some condition (like sum ≤ target, all characters in substring, etc.).

**Template:**
```javascript
function minSubarrayLen(target, arr) {
    let left = 0, sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}
```

---

## ⚙️ Key Patterns & Tricks

- **Expanding Window**: Always move the `right` pointer.
- **Shrinking Window**: Move the `left` pointer when a condition (like sum, characters, etc.) is violated.
- **Window Length**: Always use `right - left + 1` to get the current window size.
- **Valid Window**: A window that satisfies the problem constraint (e.g., target sum, unique characters).
- **Max/Min Length Subarray**: Adjust `left` and `right` to find the optimal window.

---

## 🧪 Use Cases

- Longest substring with no repeating characters
- Minimum size subarray with sum ≥ target
- Maximum sum of a subarray of size k
- Permutation in string
- Count of anagrams
- Longest subarray with at most k distinct numbers

---


### Longest Subarray with Sum ≤ K (Based on Provided Diagram - Striver Baba)
```javascript
function longestSubarrayWithSumAtMostK(arr, k) {
    let left = 0, right = 0;
    let sum = 0, maxLen = 0;
    const n = arr.length;

    while (right < n) {
        sum += arr[right];

        // Shrink the window if sum exceeds k
        while (sum > k) {
            sum -= arr[left];
            left++;
        }

        // Update maxLen if current window is valid
        if (sum <= k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        right++;
    }

    return maxLen;
}

```

## ✅ Summary

| Concept            | Rule                          |
|--------------------|-------------------------------|
| Window Length      | `right - left + 1`            |
| Shrink Window      | When condition is violated    |
| Expand Window      | Always advance `right`        |
| Fixed Size         | Move `left` when size == `k`  |
| Variable Size      | Move `left` based on condition|
