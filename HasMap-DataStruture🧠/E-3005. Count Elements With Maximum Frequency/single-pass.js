const maxFrequencyElements = (nums) => {
    const count = new Array(101).fill(0);
    let maxFreq = 0;

    for(let value of nums) {
        count = count[value] + 1;
        maxFreq = Math.max(maxFreq, count[value])
    }

    let maxFreqCount = 0;
    for(let value of count) {
        if(value === maxFreq) {
            maxFreqCount++;
        }
    }
    return maxFreq*maxFreqCount;
};
// one pass, single pass Freq