const canConstruct = (ransomNote, magazine) => {
    let asciiChar = Array(26).fill(0); // fixed Array, so space is O(26) ==> O(1)

    for(let i=0;i<magazine.length;i++) {
        let charIndexValue = magazine.charCodeAt(i)-97;
        asciiChar[charIndexValue]++;
    }

    for(let j=0;j<ransomNote.length;j++) {
        let charValueIndex = ransomNote.charCodeAt(j)-97;
        asciiChar[charValueIndex]--;
        if(asciiChar[j] < 0) return false; 
    }
    return true;
};