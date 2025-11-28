const smallestRepunitDivByK = (k) =>{
    let value = 1;
    if(k%2 === 0 || k%5 === 0) {
        return -1;
    }

    let count = 1;

    for(let len=1;len<=k;len++) {
        if(value%k === 0) {
            return count;
        }
        value = ((value*10)+1) %k;
        ++count;
    }
    return -1;
};