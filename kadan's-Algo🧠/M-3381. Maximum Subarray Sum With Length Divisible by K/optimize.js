const maxSubarraySum = (nums, k) => {
    const n = nums.length;
    
    // prefix sum
    const pref = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        pref[i + 1] = pref[i] + nums[i];
    }

    let ans = Number.NEGATIVE_INFINITY;

    for (let start = 0; start < k; start++) {
        let curr = 0;
        let best = Number.NEGATIVE_INFINITY;

        for (let i = start; i + k - 1 < n; i += k) {
            let r = i + k - 1;     // full block
            let blockSum = pref[r + 1] - pref[i];

            curr = Math.max(blockSum, curr + blockSum); // Kadane on k-blocks
            best = Math.max(best, curr);
        }

        ans = Math.max(ans, best);
    }

    return ans;
};
