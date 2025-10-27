const numberOfBeams = (bank) => {
    let result = 0;

    for(let i=0;i<bank.length;i++) {
        let currentCount = 0;
        let prevCount = 0;

        for(let value of bank[i]) {
            if(value === "1") {
                currentCount++;
            }
        }

        if(currentCount> 0) {
            result += currentCount*prevCount;
            prevCount = currentCount;
        }
    
    }
    return result;
};