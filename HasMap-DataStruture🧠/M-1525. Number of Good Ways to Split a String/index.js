const numSplits = (s) => {
    let leftMap = new Map();
    let rightMap = new Map();

    let rightMapResult = new Array(s.length).fill(0);
    let leftMapResult = new Array(s.length).fill(0);

    rightMapResult[s.length-1] = 1;
    rightMap.set(s[s.length-1], 1);
    for(let i=s.length-2;i>=0;i--) {
        if(!rightMap.has(s[i])) {
            rightMapResult[i] = rightMapResult[i+1]+1;
            rightMap.set(s[i], 1);
        } else {
            rightMapResult[i] = rightMapResult[i+1];
        }
    }

    // left side part will check one by one

    leftMap.set(s[0], 1);
    leftMapResult[0] = 1;
    for(let i=1;i<s.length;i++) {
        if(!leftMap.has(s[i])) {
            leftMapResult[i] = leftMapResult[i-1]+1;
            leftMap.set(s[i], 1);
        } else {
            leftMapResult[i] = leftMapResult[i-1];
        }
    }

    let count = 0;
    for(let i=0;i<leftMapResult.length-1;i++) {
        if(leftMapResult[i] === rightMapResult[i+1]) {
            count++;
        }
    }
    return count;
};
