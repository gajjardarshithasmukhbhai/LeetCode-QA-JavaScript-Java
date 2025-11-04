const isSubsequence = (s, t) => {
    let isNotPresent = 1;
    let splitedValues = t.split('');

    let chatCodeAt = -1;

    for(let i=0;i<s.length;i++) {
        let getIndex = splitedValues.indexOf(s[i], chatCodeAt+1);
        if(getIndex === -1) {
            isNotPresent = -1;
        }
        chatCodeAt = getIndex;
    }
    return isNotPresent === 1 ? true: false;
}

console.log(isSubsequence("abc", "ahbgdc"));