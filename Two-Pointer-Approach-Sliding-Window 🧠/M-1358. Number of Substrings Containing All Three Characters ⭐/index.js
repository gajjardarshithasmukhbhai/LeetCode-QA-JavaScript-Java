/**
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = (s) => {
    let left = 0;
    let right = 0;
    let hasMap = new Map();
    hasMap.set('a', -1);
    hasMap.set('b', -1);
    hasMap.set('c', -1);

    let totalSum = 0;

    while(right < s.length) {
        hasMap.set(s[right], right);

        let getValues = [...hasMap.values()];
        let smallestNum = Math.min(...getValues);

        if(!getValues.includes(-1)) {
            totalSum = totalSum + smallestNum+1;
        }
        right++;
    }
    return totalSum;
};