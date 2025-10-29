let bitValue = 0;

const smallestNumber = (n) => {
    // convert number --> bit --> via toString method
    bitValue = n.toString(2).split('');
    
    for(let i=0;i<bitValue.length;i++) {
        if(bitValue[i] === '0') {
            bitValue[i] = '1';
        }
    }
    return parseInt(bitValue.join(''),2);
};

console.log(smallestNumber(10));
