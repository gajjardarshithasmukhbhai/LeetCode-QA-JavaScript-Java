const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let totalLen = s.length;
    let maxLen = 0;
    let hasMap = new Map();
    let maxFreq = 0;

    while(right < totalLen) {
        hasMap.set(s[right], (hasMap.get(s[right]) || 0) + 1);

        maxFreq = Math.max(maxFreq, hasMap.get(s[right]));

        let windowSize = right - left + 1;

        if(windowSize - maxFreq > k) {
            
            hasMap.set(s[left], hasMap.get(s[left]) - 1);

            if(hasMap.get(s[left]) === 0) {
                hasMap.delete(s[left]);
            }
            left++;
        }
        maxLen = Math.max(maxLen, right-left+1);
        right++;
    }
    return maxLen;
};