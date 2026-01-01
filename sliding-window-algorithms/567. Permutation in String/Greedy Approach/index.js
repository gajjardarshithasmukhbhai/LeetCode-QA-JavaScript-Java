// concept here --> if two string is same after sorted with length --> Then permutation of those string will be same
// Ex. "bac" === "bca" --> let's do for sorting --=-> "abc" === "abc" --=--> so definitely permutation should be same

const checkInclusion = (s1, s2) => {
    let sortedString1 = s1.split('').sort().join('');
    let countOfSortedStr = sortedString1.length;
    
    if (s1.length > s2.length) {
            return false;
    }
    for(let i=0;i+countOfSortedStr<=s2.length;++i) {
        let formStr = "";
        let start = i;
        let end = start + countOfSortedStr;

        
        while(start<end) {
            formStr +=s2[start];
            start++;
        }
        let sortedVal = formStr.split('').sort().join('');

        if(sortedVal === sortedString1) {
            return true;
        }
    }
    return false;
};