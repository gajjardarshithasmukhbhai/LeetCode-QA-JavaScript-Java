const canBeTypedWords = (text, brokenLetters) => {
    const splitText = text.split(" ");
    const brokenSplitLetters = new Set(brokenLetters);
    console.log('brokenSplitLetters: ', brokenSplitLetters);
    let count = 0;

    for(let i=0;i<splitText.length;i++) {
        let newStr = splitText[i];
        let inKeyboard = false;
        for(let j=0;j<newStr.length;j++) {
            if(brokenSplitLetters.has(newStr[j])) {
                inKeyboard = true;
                break;
            }
        }
        if(!inKeyboard) {
            ++count;
        }
    }
    return count;
};
