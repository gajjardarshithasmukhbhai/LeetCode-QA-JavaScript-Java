/**
 * @param {string} s
 * @param {string} t
 * @return {string}
*/
const minWindow = (s, t) => {
    
    let left = 0;
    let right = 0;
    let start = 0;
    let minFrame = Infinity;
    let hasMap = new Map();
    let countOfT = t.length;
    
    for(let i=0;i<t.length;i++) {
        hasMap.set(t[i], (hasMap.get(t[i]) || 0)+1);
    }

    while(right < s.length) {

        if(hasMap.has(s[right])) {
            hasMap.set(s[right], hasMap.get(s[right])-1);
            if(hasMap.get(s[right])>=0) {
                --countOfT;
            }
        }
    
        while(countOfT === 0) {
            if(minFrame > right-left+1) {
                start = left;
                minFrame = right-left+1;
            }
            if(hasMap.has(s[left])) {
                hasMap.set(s[left], hasMap.get(s[left])+1);
                if(hasMap.get(s[left]) > 0) {
                    countOfT++;
                }
            }
            left++;
        }
        right++;
    }

    return minFrame === Infinity ? "": s.slice(start, start+minFrame);
};