const lengthOfLongestSubstring = (s) => {
    let left = 0;
    let right = 0;
    let hasMap = new Map();
    let totalLength = s.length;
    let maxWindow = 0;

    while(right < totalLength) {
        if(hasMap.get(s[right]) && hasMap.get(s[right]) >=left) {
            left = hasMap.get(s[right]) + 1;
        }
        hasMap.set(s[right], right);
        maxWindow = Math.max(maxWindow, right-left+1);
        right++;
    }
    return maxWindow;
}
