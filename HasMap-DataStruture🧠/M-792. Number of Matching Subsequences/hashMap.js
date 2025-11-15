const numMatchingSubseq = (s, words) => {
    let uniqueWords = new Map();

    let count = 0;

    for(let value of words) {
        uniqueWords.set(value, (uniqueWords.get(value) || 0)+1);
    }

    const isSubsequnce = (value) => {
        let index = 0;

        for(let i=0;i<s.length;i++) {
            if(value[index]===s[i]) index++;
            if(index === value.length) return true; 
        }
        return false;
    }
    
    for(let [key, value] of [...uniqueWords]) {
        if(isSubsequnce(key)) {
            count +=value;
        };
    }

    return count;
}