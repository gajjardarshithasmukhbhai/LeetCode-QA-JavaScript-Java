const numSplits = (s) => {

    let count = 0;


    let left = 0;
    
    const isLeftRightEqual = (left, right) => {
        let leftMap = new Map();
        let rightMap = new Map();
        
        for(let i=0;i<=left;i++) {
            leftMap.set(s[i], (leftMap.get(s[i]) || 0)+1);
        }

        for(let j=right;j<s.length;j++) {
            rightMap.set(s[j], (rightMap.get(s[j]) || 0)+1);
        }

        return leftMap.size === rightMap.size;
    }
    
    for(let right=1; right<s.length; right++) {
        if(isLeftRightEqual(left, right)) {
            count++;
            left++;
        }
        else {
            left++;
        }
    }

    return count;
};
