const reverseWords = (s) => {
    const getStringValues = s.trim('');
    const reverseTheWords = getStringValues.split(/\s+/);
    let reverseString = [];
    for(let i=reverseTheWords.length-1; i>=0;i--) {
        reverseString.push(reverseTheWords[i]);
    }
    return reverseString.join(' ');
};