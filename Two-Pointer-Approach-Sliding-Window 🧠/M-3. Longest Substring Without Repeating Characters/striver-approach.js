const lengthOfLongestSubstring = (s) => {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let set = new Set();
    let totalLength = s.length;

    while(right < totalLength) {
        
       while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
       }
       right++;
       maxLen = Math.max(maxLen, right-left+1);
    }
    return maxLen;
};