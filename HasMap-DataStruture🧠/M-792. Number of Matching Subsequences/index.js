const isSequenceMatch = (s, value) => {
    let index = 0;

    for(let i=0;i<value.length;i++) {
        let charPosition = s.indexOf(value[i], index);

        if(charPosition === -1) {
            return false;
        }
        index = charPosition+1;
    }
    return true;
}



const numMatchingSubseq = (s, words) => {
    let resultOfValue = [];
    for(let i=0;i<words.length;i++) {
        let result = isSequenceMatch(s, words[i]);
        
        if(result) {
            resultOfValue.push(words[i]);
        }
    }
    return resultOfValue.length;
};

console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]));