const makeGood = (s) => {
    let str = [];

    for(let i=0;i<s.length;i++) {
        let currentChar = s[i];
        let lastChar = str[str.length-1];
        if(str.length>0 && (currentChar.charCodeAt(0)-32 === lastChar.charCodeAt(0) || currentChar.charCodeAt(0)+32 === lastChar.charCodeAt(0))) {
            str.pop();
        }
        else {
            str.push(currentChar);
        }
    }
    return str.join('');
};