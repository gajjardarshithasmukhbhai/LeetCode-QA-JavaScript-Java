const canConstruct = (ransomNote, magazine) => {
    let ransomNoteMap = new Map();
    let magazineMap = new Map();

    let result = true;
    for(let i=0;i<ransomNote.length;i++) {
        ransomNoteMap.set(ransomNote[i], (ransomNoteMap.get(ransomNote[i]) || 0)+1);
    }

    for(let j=0;j<magazine.length;j++) {
        magazineMap.set(magazine[j], (magazineMap.get(magazine[j]) || 0)+1);
    }

    for(let [key,value] of ransomNoteMap) {
        if(ransomNoteMap.get(key) > (magazineMap.get(key) || 0)) {
            return false;
        }
    }
    return result;
};