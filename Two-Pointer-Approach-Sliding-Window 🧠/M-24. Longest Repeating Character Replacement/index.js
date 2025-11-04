const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let totalLen = s.length;
    let maxLen = 0;
    let hasMap = new Map();

    while(right < totalLen) {
        hasMap.set(s[right], (hasMap.get(s[right]) || 0) + 1);

        while(hasMap.size > k) {
            left++;
            hasMap.set(s[right], hasMap.get(s[right]) - 1);

            if(hasMap.get(s[right]) === 0) {
                hasMap.delete(s[right]);
            }
        }
        maxLen = Math.max(maxLen, right-left+1);
        right ++;
    }
};